# Likhith Gowda B R — Portfolio

A personal portfolio website built with React + Vite, with content from Likhith's resume, GitHub, and LinkedIn.

## Sections

* **Hero** — intro, download resume, quick links
* **About** — summary, CGPA, project/certification stats
* **Tools & Technologies** — languages, frameworks, databases, and platforms
* **Projects** — ExploreHive, AI Password Strength Prediction, AI Voice Assistant
* **Experience & Training** — Thetha Dynamics internship, Samsung Innovation Campus, and certifications
* **Contact** — email, phone, GitHub, LinkedIn, and a contact form powered by Formspree

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

The production-ready files will be generated in:

```text
dist/
```

## Deploy to GitHub Pages

```bash
npm install gh-pages --save-dev
npm run deploy
```

Update the `homepage` field in `package.json` to match your GitHub Pages URL before deploying.

## Notes

* The **Download Resume** button links to the latest resume hosted on Google Drive.
* `public/assets/avatar.svg` is used for the portfolio profile image. Replace it with your preferred profile image if needed.
* `public/assets/tools/*.svg` contains the technology logos used in the Tools & Technologies section.
* `public/assets/proyek/*.svg` contains the project graphics used in the Projects section.
* The contact form is powered by **Formspree**.
* The portfolio uses responsive design and is optimized for desktop and mobile devices.
