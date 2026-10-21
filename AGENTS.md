# michaelbender.net

Michael Bender's personal consulting website, aimed at nontechnical business owners who need urgent help with PHP software, security updates, legacy applications, and recovery.

## Source and hosting

- Repository: https://github.com/mbbender/michaelbender.net
- Local project: `~/workspace/personal/projects/michaelbender-net`
- Static HTML, CSS, and a small progressive-enhancement script. No build step.
- GitHub Pages serves the production site at https://michaelbender.net from `main`. Preserve `CNAME` and `.nojekyll`.
- Redesign work stays on a review branch until Michael explicitly authorizes the production switch. Do not merge into or push to `main`, change Pages settings, or change DNS as part of preview work.

## Design and messaging

Calm authority for owners, clear urgency grounded in official advisories, warm white / forest green / lime, generous spacing, sans-serif text and serif italic display emphasis. Lead visitors from the business risk to a practical plan and direct contact. Keep technical instructions out of the primary sales journey.

Use only established experience and real evidence. Existing owner-authored facts: PHP since 2004, founder of software businesses, phone (919) 810-7503, typical projects $500–$3,000 with scope-specific quote. Never invent testimonials, certifications, response-time promises, client logos, or availability scarcity. Recheck security facts against original PHP advisories before changing them.

## Contact and pages

- `index.html`: homepage, software guidance selector, contact form.
- `about/`, `pricing/`, `updates/`, `thanks/`: preserve existing URLs.
- `style.css`: shared responsive design; `site.js`: menu, guidance, callback preference, year.
- Existing FormSubmit destination: `michael@intake.health`; confirm route `/thanks/`. Do not submit test inquiries without explicit authorization.
- No scheduling provider URL was supplied for the redesign. The form collects preferred callback time; a request is not a confirmed appointment. Do not label it instant booking.
- No analytics or embedded social widgets in the redesign. External font from Google Fonts; system fallbacks available.

Read STATUS.md before changes and update it before ending a session. Run appropriate static checks and visually review desktop/mobile when changing layout. Keep shared header/footer consistent across all five pages.
