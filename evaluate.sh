#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Counter for passed tests
PASSED=0
TOTAL=0
CRITICAL_FAILS=0

# Function to check if a file or directory exists
check_exists() {
    TOTAL=$((TOTAL+1))
    if [ -e "$1" ]; then
        echo -e "${GREEN}[PASS]${NC} $2 exists"
        PASSED=$((PASSED+1))
    else
        echo -e "${RED}[FAIL]${NC} $2 does not exist"
        CRITICAL_FAILS=$((CRITICAL_FAILS+1))
    fi
}

# Function to check if a file contains specific content
check_content() {
    TOTAL=$((TOTAL+1))
    if grep -q "$2" "$1"; then
        echo -e "${GREEN}[PASS]${NC} $3"
        PASSED=$((PASSED+1))
    else
        echo -e "${RED}[FAIL]${NC} $3"
        if [ "$4" = "critical" ]; then
            CRITICAL_FAILS=$((CRITICAL_FAILS+1))
        fi
    fi
}

# Check project structure
check_exists "package.json" "Project configuration file"
check_exists "README.md" "README file"

# Detect project type
if grep -q "\"react\"" package.json; then
    PROJECT_TYPE="React"
elif grep -q "\"vue\"" package.json; then
    PROJECT_TYPE="Vue"
elif grep -q "\"svelte\"" package.json; then
    PROJECT_TYPE="Svelte"
else
    PROJECT_TYPE="Unknown"
fi

echo "Detected project type: $PROJECT_TYPE"

# Check for TypeScript
if grep -q "\"typescript\"" package.json; then
    echo "TypeScript detected"
    check_exists "tsconfig.json" "TypeScript configuration file"
else
    echo "TypeScript not detected"
fi

# Check for styling solution
if grep -q "\"tailwindcss\"" package.json; then
    echo "Tailwind CSS detected"
    check_exists "tailwind.config.js" "Tailwind configuration file"
elif grep -q "\"bootstrap\"" package.json; then
    echo "Bootstrap detected"
elif grep -q "\"sass\"" package.json; then
    echo "Sass detected"
else
    echo -e "${YELLOW}[WARNING]${NC} No recognized CSS framework detected"
fi

# Check for responsive design
check_content "src/styles/main.css" "@media" "Responsive design media queries" "critical"

# Check for key components
check_exists "src/components" "Components directory"
check_exists "src/pages" "Pages directory"

# Check for routing
if [ "$PROJECT_TYPE" = "React" ]; then
    check_content "package.json" "\"react-router-dom\"" "Routing library" "critical"
elif [ "$PROJECT_TYPE" = "Vue" ]; then
    check_content "package.json" "\"vue-router\"" "Routing library" "critical"
fi

# Check for state management
if [ "$PROJECT_TYPE" = "React" ]; then
    if grep -q "\"redux\"" package.json || grep -q "\"recoil\"" package.json || grep -q "\"mobx\"" package.json; then
        echo -e "${GREEN}[PASS]${NC} State management library detected"
        PASSED=$((PASSED+1))
    else
        echo -e "${YELLOW}[WARNING]${NC} No recognized state management library detected"
    fi
elif [ "$PROJECT_TYPE" = "Vue" ]; then
    if grep -q "\"vuex\"" package.json || grep -q "\"pinia\"" package.json; then
        echo -e "${GREEN}[PASS]${NC} State management library detected"
        PASSED=$((PASSED+1))
    else
        echo -e "${YELLOW}[WARNING]${NC} No recognized state management library detected"
    fi
fi

# Check for form validation
check_content "src" "form.*validation" "Form validation implementation" "critical"

# Check for API calls
check_content "src" "fetch(\\|axios\\|http" "API calls implementation" "critical"

# Check for error handling
check_content "src" "try.*catch" "Error handling implementation" "critical"

# Check for testing setup
if grep -q "\"jest\"" package.json || grep -q "\"vitest\"" package.json; then
    echo -e "${GREEN}[PASS]${NC} Testing framework detected"
    PASSED=$((PASSED+1))
    check_exists "src/__tests__" "Test directory"
else
    echo -e "${RED}[FAIL]${NC} No testing framework detected"
    CRITICAL_FAILS=$((CRITICAL_FAILS+1))
fi

# Print summary
echo "------------------------------"
echo -e "${GREEN}Passed: $PASSED/${TOTAL}${NC}"
echo -e "${RED}Critical Fails: $CRITICAL_FAILS${NC}"

if [ $CRITICAL_FAILS -eq 0 ]; then
    if [ $PASSED -eq $TOTAL ]; then
        echo -e "${GREEN}All tests passed!${NC}"
    else
        echo -e "${YELLOW}Some non-critical tests failed. Please review the output above.${NC}"
    fi
else
    echo -e "${RED}Critical tests failed. Please fix these issues before submitting:${NC}"
    if ! grep -q "@media" src/styles/main.css; then
        echo "- Responsive design not implemented"
    fi
    if [ "$PROJECT_TYPE" = "React" ] && ! grep -q "\"react-router-dom\"" package.json; then
        echo "- Routing not implemented (react-router-dom missing)"
    fi
    if [ "$PROJECT_TYPE" = "Vue" ] && ! grep -q "\"vue-router\"" package.json; then
        echo "- Routing not implemented (vue-router missing)"
    fi
    if ! grep -q "form.*validation" src; then
        echo "- Form validation not implemented"
    fi
    if ! grep -q "fetch(\\|axios\\|http" src; then
        echo "- API calls not implemented"
    fi
    if ! grep -q "try.*catch" src; then
        echo "- Error handling not implemented"
    fi
    if ! grep -q "\"jest\"" package.json && ! grep -q "\"vitest\"" package.json; then
        echo "- Testing framework not set up"
    fi
fi
