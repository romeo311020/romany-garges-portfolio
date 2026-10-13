# ENG. ROMANY GARGES — Portfolio v2

Arabic-first, responsive multi-page portfolio with a black, white, and silver visual identity using plain HTML, CSS, and JavaScript.

## Pages
- `index.html` — home
- `projects.html` — project cards and category filters
- `services.html` — services and service-request shortcuts
- `contact.html` — WhatsApp, Instagram, email, GitHub and email-draft form

## Upload to the existing GitHub repository
Upload the files in this folder to the **root** of `romany-garges-portfolio`, replacing `index.html`, `style.css`, `script.js`, and `README.md` when GitHub asks. Add the three new HTML pages. Keep the existing `profile.jpg` in the repository root; the home page reads it from `profile.jpg`.

## Before publishing
1. Replace the Instagram link in `contact.html` with your real profile URL.
2. Replace the WhatsApp URL with your full international phone number (Egypt: country code 20, without the leading 0), for example `https://wa.me/201XXXXXXXXX`.
3. Review project descriptions and links so they accurately describe your current work.
4. This contact form opens an email draft using `mailto:`; it does not send or store messages on a server.
5. The language button currently switches navigation direction and labels, but the detailed page copy is Arabic-first. Full translation of all page content can be added in the next pass.

## Publish
GitHub repository → Settings → Pages → Deploy from a branch → `main` → `/(root)` → Save.


## Current repository notes
- The home page profile image path is set to `assets/profile.jpg`, matching the existing repository structure shown by the user.
- Before publishing, replace `201XXXXXXXXX` in `contact.html` with the real WhatsApp number in international format and replace `REPLACE_WITH_YOUR_USERNAME` with the real Instagram username.
- This package uses a monochrome black, white, and silver palette; it does not intentionally reuse the reference site's colors.
