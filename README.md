# Likhith Gowda B R — Portfolio

A personal portfolio website built with React + Vite, adapted from the [portofolio-reactjs](https://github.com/dicka88/portofolio-reactjs) template and populated with content from Likhith's resume, GitHub, and LinkedIn.

## Sections
- **Hero** — intro, download resume, quick links
- **About** — summary, CGPA, project/certification stats
- **Tools & Technologies** — languages, frameworks, platforms
- **Projects** — ExploreHub, AI Password Strength Prediction, AI Voice Assistant
- **Experience & Training** — Thetha Dynamics internship, Samsung Innovation Campus, certifications
- **Contact** — email, phone, GitHub, LinkedIn, and a contact form (via formsubmit.co)

## Run locally
```
npm install
npm run dev
```

## Build for production
```
npm run build
```
Output goes to `dist/`.

## Deploy to GitHub Pages
```
npm install gh-pages --save-dev
npm run deploy
```
Update the `homepage` field in `package.json` to match your GitHub Pages URL first.

## Notes
- `public/assets/CV.pdf` is Likhith's resume — replace it if the resume is updated.
- `public/assets/avatar.svg`, `public/assets/tools/*.svg`, and `public/assets/proyek/*.svg` are placeholder graphics generated for this build. Swap in a real photo and project screenshots any time — just keep the same filenames, or update the paths in `src/data.js` and `src/App.jsx`.
- The contact form posts to `https://formsubmit.co/likhithgowda08052005@gmail.com`. The first submission requires a one-time confirmation click from that inbox (formsubmit.co's activation step).
