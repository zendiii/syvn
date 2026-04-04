# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.2.0] - 2025-07-11

### Added
- `.gitignore` with rules for OS files, editor files, logs, bower_components, node_modules
- Showcase link in hamburger side-menu (index.html)
- `<ul>` wrappers around bare `<li>` elements in Employment section (index.html)
- Inline comments for all script blocks (openNav/closeNav, smooth-scroll, ScrollReveal)
- Section marker comments throughout index.html and showcase.html
- File header comment blocks for index.html, showcase.html, styles.css, sidebar.css, script.js
- Table of Contents comment in styles.css (22 sections)
- Standard `animation-*` properties alongside `-webkit-animation-*` vendor prefixes (styles.css)

### Changed
- Moved `<footer>` inside `<body>` on both index.html and showcase.html (was after `</body>`)
- Replaced deprecated `<center>` tags with `style="text-align: center;"` (both pages)
- Consolidated duplicate jQuery imports — removed CDN 1.11.3, kept local 3.2.1 (both pages)
- Fixed `js/ProgressBar.js` script references → `js/main.js` (the actual file, both pages)
- Reordered scripts: main.js → scrollreveal → jQuery → bootstrap → script.js (both pages)
- Scoped global `ul`/`ul li`/`ul li a` rules to `#sidebar ul` in styles.css (fixed bullet points in Employment)
- Changed `img-responsive` (Bootstrap 3) → `img-fluid` (Bootstrap 4) on index.html
- Sidenav open width on showcase.html: 250px → 280px (matches index.html)
- Improved `alt` text on all images across both pages (was "Card image cap")

### Removed
- Junk files from repo root: `div`, `svg`, `vim.exe.stackdump`
- Duplicate `js/script.js` imports (loaded twice on both pages)
- Legacy commented-out sidebar HTML and jQuery toggle code (both pages)
- Commented-out HTML blocks: Instagram embed, duplicate AITP card, Fellow card (index.html)
- Dead CDN scripts: `rawgit.com/progressbar.js`, `oss.maxcdn.com/html5shiv`, `oss.maxcdn.com/respond.js`, `bower_components/aos` (both pages)
- Bootstrap 3 theme CSS link and bower AOS CSS link (both 404, both pages)
- Duplicate jQuery CDN 1.11.3 (both pages)
- Empty CSS rulesets in mobile breakpoint: `#mainav`, `#breadcrumb`, `.container`, `#footer`, `#copyright`
- Duplicate `#main` CSS rule

### Fixed
- CSS `position: bottom` → `position: relative` on footer (styles.css)
- CSS `border-style: #1D2021` → `border: none` on `.progress > svg` (styles.css)
- CSS `.lead { bold }` → `.lead { font-weight: bold; }` (styles.css)
- Invalid inline `style` attributes: `width: 50%; img-responsive;` and `width: 80%; center;` (index.html)
- 4 duplicate `class` attributes merged into single attributes (index.html)
- 3 duplicate `class` attributes merged into single attributes (showcase.html)
- Typo "Univeristy" → "University" (index.html)

## [2.1.0] - 2025-04-04

### Added
- Fixed-position hamburger menu button (stays visible while scrolling)
- `sidebar.css` — dedicated stylesheet for sidebar/navigation overrides
- Showcase page (`showcase.html`) with projects and social links

### Changed
- Reduced sidenav open width from 250px → 280px for better mobile fit
- Removed Platforms section from Skills (Android, iOS, Windows, Windows Server)
- Removed Instagram link from Contact section

### Fixed
- Hamburger menu button now scrolls with the page (`position: fixed`)

## [2.0.0] - 2019-07-01

### Added
- Cisco Systems employment entry
- Brandt Information Services employment entry
- Platforms section (Android, iOS, Windows, Windows Server)
- Instagram social link
- Sidenav hamburger menu (replaced old sidebar)

### Changed
- Updated bio and About section
- Updated Education section with FSU graduation (Class of 2019)

## [1.0.0] - 2017-07-01

### Added
- Initial release of personal resume website
- About, Education, Technical Skills, Employment, Projects, Contact sections
- Bootstrap 4 responsive grid layout
- Animated progress bars (ProgressBar.js) for education completion
- ScrollReveal animations
- Smooth scrolling for anchor links
- Font Awesome icons throughout
- Google Analytics integration
- Footer with social links (GitHub, Bitbucket, LinkedIn)
- Custom dark theme (`#1D2021` background)
