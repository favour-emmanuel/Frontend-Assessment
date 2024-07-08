# Frontend Developer Assessment

## Project Overview
This assessment tests your skills as an intermediate frontend developer. You are tasked with creating a responsive profile website for a multidimensional company with three major departments.

### Company Description
The company operates in three main departments:
1. Engineering and Technology: Delivers and builds software applications on all platforms, conducts security analysis and pentesting, cloud development, DevOps, etc.
2. General Services: Handles procurement, servicing, and equipment hiring.
3. Innovation Hub: Focuses on research and development of cutting-edge technologies.

### Project Requirements
1. Create a responsive, single-page application (SPA) showcasing the company's profile.
2. Use any modern frontend framework or library of your choice (e.g., React, Vue, Angular, Svelte).
3. Implement responsive design using either a CSS framework (e.g., Tailwind CSS, Bootstrap) or custom CSS/SASS.
4. Use TypeScript if you're comfortable with it (optional but recommended).
5. Implement proper state management appropriate to your chosen framework.
6. Create the following sections:
   - Home page with company overview and highlights of each department
   - Individual pages/sections for each department
   - About Us page
   - Services page with a comprehensive list of all services
   - Contact Us page with a form (including client-side validation)
7. Implement a responsive navigation menu.
8. Use modern JavaScript features and follow best practices for your chosen stack.
9. Ensure cross-browser compatibility and optimize for performance.
10. Implement at least 3 of the following advanced features:
    - Dark mode toggle with persistent user preference
    - Lazy loading of images and components
    - Animations and transitions between pages/sections
    - Interactive data visualizations
    - Multilingual support (at least 2 languages)
    - A simple blog section with pagination and category filtering
    - Integration with a headless CMS for content management
    - Implementation of a search functionality across the site
11. Write clean, well-commented, and modular code.
12. Implement error boundaries and proper error handling.
13. Set up at least one unit test and one integration test.

## Instructions

```mermaid
graph TD
    A[Start] --> B[Fork Repository]
    B --> C[Clone Forked Repo Locally]
    C --> D[Set Up Project]
    D --> E[Implement Features]
    E --> F[Run Evaluation Script]
    F --> G{Pass All Checks?}
    G -->|Yes| H[Commit Changes]
    G -->|No| I[Fix Issues]
    I --> F
    H --> J[Push to Your Fork]
    J --> K[Create Pull Request]
    K --> L[End]