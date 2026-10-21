# michaelbender.net

Michael Bender's PHP security and recovery consulting website. Static HTML/CSS/JavaScript, hosted on GitHub Pages.

## Review the redesign

The `redesign/php-rescue-2026-10` branch is the review version. Production remains on `main`; do not merge until Michael approves the switch.

Run a local static server from this directory, for example:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Open http://127.0.0.1:4173/. There is no build or dependency installation.

## Files

- `index.html`: owner-focused sales page, services, process, FAQs, inquiry form.
- `style.css`: responsive shared design.
- `site.js`: accessible mobile menu, software guidance, preferred callback time.
- `about/`, `pricing/`, `updates/`, `thanks/`: supporting pages.
- `img/`: existing portrait and refreshed social preview image (`assets/social-preview.html` is its editable artwork source).
- `CNAME`, `.nojekyll`: production Pages configuration; preserve these.
- `llms.txt`, `robots.txt`, `sitemap.xml`: discovery metadata.

Contact requests use the existing FormSubmit destination, `michael@intake.health`. The form supports a preferred time; this is a callback request, not an automatically confirmed appointment. Do not send test submissions without authorization. The delivery service has not been tested by submitting an inquiry during the redesign.

See AGENTS.md for enduring project context and STATUS.md for current work and review notes.
