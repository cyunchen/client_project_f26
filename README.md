# SI 539 Engaged Learning Website

This is a client website for the University of Michigan School of Information's Engaged Learning Office (ELO). It helps students find guidance and resources before, at the start of, and during an engaged learning project.

The site is built with plain HTML, CSS, and JavaScript. It does not use a framework or external JavaScript library.

## Pages

- **Home (index.html)** — introduces engaged learning and links to the main project stages and opportunities.
- **Preparing for Your Experience (prep.html)** — includes a preparation checklist and resources.
- **Starting Your Experience (start.html)** — provides steps and resources for beginning work with a partner.
- **During Your Experience (during.html)** — offers project guidance and a table of resources.
- **FAQ (faq.html)** — answers common questions in a keyboard-accessible accordion.
- **Page Not Found (404.html)** — helps visitors return to the home page or continue to another stage.

## Features

- The stage pages have a progress bar that shows the current stage.
- FAQ answers can be opened one at a time or all together.
- The footer year updates automatically with JavaScript. It shows 2026 if JavaScript is unavailable.
- Pages include a skip link to help keyboard users move directly to the main content.
- The layout adjusts for mobile, tablet, and desktop screens.

## Project files

- HTML pages are in the project folder.
- CSS stylesheets are in the css folder.
- JavaScript files are in the js folder.
- Images used by the pages are in the images folder.

## Preview the site

You can open index.html in a browser for a quick preview. To test the 404 page and its root-relative links locally, start a simple web server from the directory that contains the client_project_f26 folder, then visit http://localhost:8000/client_project_f26/.

For example, if Python is installed, run:

    python3 -m http.server 8000

## Published site

The site is published with GitHub Pages at [https://cyunchen.github.io/client_project_f26/](https://cyunchen.github.io/client_project_f26/).
