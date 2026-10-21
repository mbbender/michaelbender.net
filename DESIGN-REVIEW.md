# Website redesign review — 21 October 2026

## What needed to change

The original site established urgency but led business owners into commands, version numbers, social embeds, repeated disaster scenarios, and unsupported availability claims. It introduced Michael late, presented a form as booking without a scheduling flow, and rendered a literal `'+TEL+'` in the footer. The previous sharing image also clipped its headline.

## The new experience

- Warm white, forest green, and lime with a restrained typographic system, real portrait, consistent navigation, and responsive layouts.
- A visitor journey from business risk to clear next steps: urgent notice → reassurance and direct contact → what the issue means → practical services → process → founder credibility → pricing → FAQs → consultation request.
- Recognizable platforms are examples of supported software, not customer logos. Michael's own businesses are explicitly presented as founder experience.
- Direct calls and texts, free call requests, optional preferred callback time, and persistent mobile contact actions. A requested time is explicitly not a confirmed appointment.
- Existing pricing retained as a typical $500–$3,000 USD range with complexity caveats and scope/quote agreement before work.
- About, pricing, security briefing, and confirmation pages redesigned with matching navigation/footer. Existing URLs preserved.
- Social embeds replaced with dated official evidence; sharing artwork and favicon refreshed.

## Security evidence

Reviewed against the original PHP sources on 21 October 2026:

- https://www.php.net/archive/2026.php
- https://github.com/php/php-src/security/advisories/GHSA-w8hw-w9fx-j79w
- https://github.com/php/php-src/security/advisories/GHSA-6wmf-4rv5-p3rp

The briefing distinguishes official fixed releases from vendor/source backports, treats mitigations as partial protection, and avoids claiming every PHP website is certainly compromised or vulnerable to a single request. Technical detail is secondary to the owner-facing explanation. Review the dated facts before any later production switch.

## Validation and limitations

- All five primary pages checked for local resource and anchor integrity, duplicate IDs, image alt text, a single H1, and valid JSON-LD.
- JavaScript syntax and Git whitespace checks passed.
- Desktop and 390px phone visual checks; five pages without horizontal overflow at phone width. Landscape menu verified to scroll within the viewport.
- Software guidance choices, mobile menu closing, FAQ expansion, preferred-time field reveal/disable, and local confirmation redirect checked.
- FormSubmit destination retained from the original site. No real test inquiry sent; delivery and the destination's activation status are unverified.
- No external scheduler URL supplied. Current form requests a callback; a booking service can replace the relevant calls to action when Michael supplies its URL.
- No testimonials, client counts, certifications, scarcity claims, or guaranteed response times invented.
- Static project remains build-free. Google Fonts has system font fallbacks.

## Review and release

Work is on `redesign/php-rescue-2026-10`, based on `origin/main` at `85497ba`. Do not merge, change Pages source settings, or change DNS until Michael approves the live switch. Branch source and screenshots support review; a branch push is not a hosted branch deployment. Production remains on the existing `main` source.
