# Frontend Developer Assessment

## Project Overview
[Include your project overview and requirements here]

## Instructions

1. Fork this repository
2. Clone your forked repository locally
3. Complete the project according to the requirements
4. Run the evaluation script: `./evaluate.sh`
5. Fix any critical issues identified by the script
6. Commit your changes and push to your forked repository
7. Create a pull request to this original repository

## Process Diagram

```mermaid
graph TD
    A[Start] --> B[Fork Repository]
    B --> C[Clone Forked Repo Locally]
    C --> D[Complete Project]
    D --> E[Run Evaluation Script]
    E --> F{Any Critical Fails?}
    F -->|Yes| G[Fix Critical Issues]
    G --> E
    F -->|No| H[Commit Changes]
    H --> I[Push to Forked Repo]
    I --> J[Create Pull Request]
    J --> K[End]