# Personal Portfolio Website

A responsive personal portfolio website built using HTML5, CSS3, and vanilla JavaScript. The website presents my professional journey, personal interests, family, and hobbies.

**Live Website:** https://artheeshvm.github.io/profile-website/

**GitHub Repository:** https://github.com/ArtheeshVM/profile-website

## 1. Project Overview

The objective of this project is to develop a personal portfolio website that showcases personal and professional information through a clean, responsive, and interactive user interface.

The project also demonstrates Git version control, collaborative pull request practices, automated validation, and continuous deployment using GitHub Actions.

## 2. Website Features

- Responsive navigation with a mobile menu.
- Hero section introducing the portfolio owner.
- Professional journey displayed as a timeline.
- Personal interests presented using cards.
- Interactive family cards with flip animations.
- Hobbies gallery with an image lightbox.
- Footer with social links and back-to-top navigation.

## 3. Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Website structure |
| CSS3 | Styling, layouts, and responsiveness |
| Vanilla JavaScript | Interactive functionality |
| Git | Version control |
| GitHub | Source code hosting and collaboration |
| GitHub Actions | CI/CD automation |
| GitHub Pages | Website hosting |
| HTMLHint | HTML validation |
| Stylelint | CSS validation |
| Lighthouse CI | Website performance auditing |

## 4. Project Structure

```text
profile-website/
│
├── .github/
│   └── workflows/
│       ├── validate.yml
│       ├── pr-checks.yml
│       ├── deploy.yml
│       ├── lighthouse.yml
│       └── notify.yml
│
├── css/
│   ├── theme.css
│   └── style.css
│
├── images/
│   ├── family/
│   ├── hero/
│   ├── hobbies/
│   └── movies/
│
├── js/
│   └── main.js
│
├── .gitignore
├── .htmlhintrc
├── .stylelintrc.json
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

## 5. Run the Project Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/ArtheeshVM/profile-website.git
   ```

2. Navigate to the project directory:

   ```bash
   cd profile-website
   ```

3. Open `index.html` in a web browser.

No frontend framework or build process is required.

## 6. Git Branching Strategy

The project follows a branch-based development workflow.

- `main`: Contains the stable, production-ready version.
- `develop`: Integration branch for completed features.
- `feature/*`: Used for developing individual website features.
- `ci/*`: Used for implementing and improving CI/CD configurations.
- `theme/*`: Used for theme-related development.

### Development Workflow

1. Create a feature branch from `develop`.
2. Implement and test the changes.
3. Push the feature branch to GitHub.
4. Create a Pull Request targeting `develop`.
5. Review and merge after successful checks.
6. Create a release Pull Request from `develop` to `main`.
7. Merge after all required checks pass.

Direct commits to `main` are avoided.

## 7. CI/CD Implementation

GitHub Actions automates project validation, pull request checks, deployment, performance auditing, and workflow reporting.

| Workflow | Purpose |
|---|---|
| Validate HTML & CSS | Validates HTML using HTMLHint and CSS using Stylelint |
| Pull Request Checks | Checks JavaScript syntax and required project files |
| Deploy to GitHub Pages | Deploys the website when changes are pushed to `main` |
| Lighthouse Performance Audit | Audits the deployed website and uploads the report |
| Workflow Notification | Adds a summary of completed workflow results to GitHub Actions |

### CI/CD Process

```text
Developer makes changes
          |
          v
     Push to GitHub
          |
          v
    Create Pull Request
          |
          v
   Automated PR Checks
          |
          v
    Merge into develop
          |
          v
   Release Pull Request
          |
          v
      Merge into main
          |
          v
   GitHub Pages Deployment
          |
          v
    Lighthouse Audit
          |
          v
   Workflow Notification
```

## 8. Deployment

The website is hosted using GitHub Pages.

**Live URL:** https://artheeshvm.github.io/profile-website/

Updates merged into `main` trigger the automated deployment workflow.

## 9. Validation and Quality Checks

The project uses automated checks to maintain code quality:

- HTML validation using HTMLHint.
- CSS validation using Stylelint.
- JavaScript syntax validation using Node.js.
- Required project file verification.
- Lighthouse performance auditing after deployment.

## 10. Future Improvements

- Update the placeholder profile image.
- Add additional personal and professional information.
- Improve accessibility and performance based on Lighthouse recommendations.
- Continue enhancing the responsive user experience.

---

**Developed as a personal portfolio and CI/CD learning project.**