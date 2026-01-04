# Sanjana Venkatesh — Portfolio (Static Site)

This is a lightweight, dependency-free portfolio site (HTML/CSS/JS) structured for easy hosting on **GitHub Pages**.

## Structure

- `index.html` — Home / Hero / About / Highlights / Contact
- `experience.html` — Work experience timeline + achievements
- `projects.html` — Projects grid with client-side tag filtering
- `certifications.html` — Certifications, skills, and tooling overview
- `awards.html` — Awards and recognition
- `resume.html` — Resume page (includes a placeholder PDF)
- `publications.html` — Publications / talks (currently minimal)

Assets:
- `css/style.css`
- `js/main.js`
- `assets/img/` — placeholder PNGs + favicon

## Replace Images

All images are placeholders. Replace files in `assets/img/` with your own images using the same filenames:

- `profile.png`
- `project-anime.png`
- `project-retail.png`
- `project-fab.png`
- `project-airbnb.png`
- `project-covid-vision.png`
- `project-covid-chatbot.png`
- `project-market-basket.png`

## Add Your Resume

Replace:
- `assets/resume/Sanjana_Venkatesh_Resume.pdf`

(Keep the same filename so links continue to work.)

## Run Locally

You can open `index.html` directly in a browser.

If you prefer a local web server:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy on GitHub Pages

1. Create a repo named `sanjana-v.github.io` (or any repo).
2. Copy all files from this folder to the repo root.
3. In GitHub: **Settings → Pages**
   - Source: `Deploy from a branch`
   - Branch: `main` / root
4. Save. Your site will publish at the GitHub Pages URL.

