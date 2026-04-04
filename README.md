# SYVN — Sayvion Mayfield's Resume Website

> A personal online resume built with HTML, CSS, Bootstrap 4, and JavaScript.

**Version:** 2.2.0 · **Live:** [syvn.github.io](https://syvn.github.io) · **Since:** July 2017

---

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Pages](#pages)
- [Stylesheets](#stylesheets)
- [JavaScript Modules](#javascript-modules)
- [Third-Party Dependencies](#third-party-dependencies)
- [Setup & Development](#setup--development)
- [Branching Strategy](#branching-strategy)
- [Versioning](#versioning)
- [TODO](#todo)

---

## Overview

This is a single-page resume website showcasing education, technical skills, employment history, projects, and contact information. It features a dark theme, animated elements, an interactive progress bar, and a hamburger side-navigation menu.

## Project Structure

```
syvn/
├── index.html              # Main resume page
├── showcase.html           # Projects & showcase page
├── CNAME                   # Custom domain config (GitHub Pages)
├── CHANGELOG.md            # Version history
├── version.json            # Current version number
├── README.md               # This file
├── .gitignore              # Git ignore rules
│
├── css/
│   ├── styles.css          # Primary site styles (layout, colors, typography)
│   ├── sidebar.css         # Hamburger menu / sidenav overrides
│   ├── animate.css         # CSS animation library (Animate.css)
│   ├── bootstrap.min.css   # Bootstrap 4 (local copy)
│   ├── bootstrap.css       # Bootstrap 4 (unminified)
│   ├── bootstrap-theme.*   # Bootstrap 3 optional theme (legacy)
│   └── font-awesome-4.7.0/ # Font Awesome 4 icon library
│       ├── css/
│       ├── fonts/
│       ├── less/
│       └── scss/
│
├── js/
│   ├── script.js           # Custom JS — progress bar animations
│   ├── main.js             # ProgressBar.js library (bundled)
│   ├── bootstrap.js        # Bootstrap JS (unminified)
│   ├── bootstrap.min.js    # Bootstrap JS (minified)
│   ├── jquery-3.2.1.min.js # jQuery 3.2.1
│   ├── scrollreveal.js     # ScrollReveal library (unminified)
│   ├── scrollreveal.min.js # ScrollReveal library (minified)
│   └── npm.js              # npm bootstrap helper
│
└── images/                 # All image assets (logos, icons, photos)
```

## Pages

| File             | Purpose                                          |
| ---------------- | ------------------------------------------------ |
| `index.html`     | Main resume — About, Education, Skills, Employment, Projects, Contact |
| `showcase.html`  | Extended showcase of projects, organizations, and social links |

## Stylesheets

| File                        | Purpose                                              |
| --------------------------- | ---------------------------------------------------- |
| `css/styles.css`            | **Primary styles** — body, links, footer, sidenav, spacing utilities (`xtext*`), progress bars, skill grid, responsive breakpoints, Font Awesome icon colors, card overrides |
| `css/sidebar.css`           | **Sidebar overrides** — fixed-position hamburger button (`#newside`) |
| `css/animate.css`           | **Animate.css** — CSS animation keyframes (tada, pulse, fadeInUp, zoomIn, etc.) |
| `css/bootstrap.min.css`     | **Bootstrap 4** — responsive grid, utilities, components |
| `css/bootstrap-theme.*`     | **Bootstrap 3 theme** — optional legacy theme (can be removed) |
| `css/font-awesome-4.7.0/`   | **Font Awesome 4** — icon fonts and stylesheets |

### Key CSS Classes (custom)

| Class                       | Description                                |
| --------------------------- | ------------------------------------------ |
| `.sidenav`                  | Slide-out side navigation panel            |
| `.xtext` / `.xtext2`–`.xtext6` | Spacing utility classes (padding %)    |
| `.emp` / `.emp2`–`.emp5`    | Text indent, alignment, and spacing helpers|
| `.faicon-*`                 | Font Awesome icon color overrides          |
| `.imgcenter`                | Centered block image                       |
| `.hoc`                      | Max-width content container (978px)        |
| `.rightspace`               | Progress bar container positioning         |

## JavaScript Modules

| File                | Purpose                                             |
| ------------------- | --------------------------------------------------- |
| `js/script.js`      | **Custom script** — initializes ProgressBar.js semi-circle animations for education progress indicators (#progress, #progress2) and skill indicators (#skprogress, #skprogress2) |
| `js/main.js`        | **ProgressBar.js 1.0.0** — library for SVG-based animated progress indicators |
| `js/scrollreveal.min.js` | **ScrollReveal 3.x** — scroll-triggered reveal animations |
| `js/jquery-3.2.1.min.js` | **jQuery 3.2.1** — DOM manipulation and smooth scrolling |
| `js/bootstrap.min.js`    | **Bootstrap 4 JS** — responsive navbar, modals, etc. |

### Inline Scripts (in `index.html`)

| Script Block                    | Purpose                                      |
| ------------------------------- | -------------------------------------------- |
| `openNav()` / `closeNav()`      | Toggle sidenav width and background color    |
| Smooth scrolling                | jQuery-based smooth scroll to anchor targets |
| ScrollReveal init               | Initializes `sr.reveal()` for section animations |
| Google Analytics                | gtag.js tracking (UA-110491759-1)            |

## Third-Party Dependencies

| Library             | Version | Source                          | Purpose                |
| ------------------- | ------- | ------------------------------- | ---------------------- |
| Bootstrap           | 4.0.0   | CDN + local                     | Responsive grid & UI   |
| jQuery              | 3.2.1   | Local (`js/`)                   | DOM & animations       |
| Font Awesome        | 4.7.0   | Local (`css/font-awesome-4.7.0/`)| Icons                 |
| ProgressBar.js      | 1.0.0   | Local (`js/main.js`)            | Progress animations    |
| ScrollReveal        | 3.x     | Local (`js/`)                   | Scroll animations      |
| Animate.css         | 3.x     | Local (`css/animate.css`)       | CSS animations         |
| Normalize.css       | 7.0.0   | CDN (necolas)                   | CSS reset              |
| Google Fonts        | —       | CDN                             | Montserrat, Raleway    |

## Setup & Development

1. **Clone the repo:**
   ```bash
   git clone https://github.com/zendiii/syvn.git
   cd syvn
   ```

2. **Open locally:**
   Open `index.html` in a browser, or use a local server:
   ```bash
   # Python 3
   python3 -m http.server 8000
   ```
   Or use the VS Code Live Server extension.

3. **Deploy:**
   Push to `master` branch — GitHub Pages serves from `master` automatically.

## Branching Strategy

| Branch        | Purpose                                    |
| ------------- | ------------------------------------------ |
| `master`      | Production — deployed to GitHub Pages      |
| `test_Branch` | Development — testing changes before merge |

**Workflow:**
1. Create or switch to a feature/test branch
2. Make changes and commit with descriptive messages
3. Test locally
4. Merge into `master` when ready
5. Update `version.json` and `CHANGELOG.md`

## Versioning

This project uses [Semantic Versioning](https://semver.org/):

- **MAJOR** — Breaking layout or structural changes
- **MINOR** — New sections, pages, or features
- **PATCH** — Bug fixes, typo corrections, style tweaks

Current version is tracked in `version.json` and documented in `CHANGELOG.md`.

## TODO

- [x] ~~Fix duplicate jQuery imports~~ (removed CDN 1.11.3, kept local 3.2.1)
- [x] ~~Fix duplicate `js/script.js` imports~~ (removed second load)
- [x] ~~Fix duplicate `class` attributes on HTML elements~~ (merged into single attributes)
- [x] ~~Add proper `<ul>` wrappers around `<li>` elements in Employment section~~
- [x] ~~Replace deprecated `<center>` tag in footer~~ (replaced with CSS `text-align: center`)
- [x] ~~Update "Univeristy" typo to "University"~~ (FAMU entry)
- [x] ~~Move `<footer>` inside `<body>` tag~~
- [x] ~~Fix invalid CSS in `style` attributes~~ (`img-responsive` moved to `class`)
- [x] ~~Remove legacy commented-out code blocks~~
- [ ] Remove legacy Bootstrap 3 theme CSS (conflicts with Bootstrap 4)
- [ ] Improve mobile responsiveness for cards and skill grid
- [ ] Add meta description and Open Graph tags for SEO
- [ ] Consider migrating to Font Awesome 5+ and Bootstrap 5
- [x] ~~Clean up `showcase.html`~~ (duplicate classes, footer outside body, dead CDNs, script fixes)

