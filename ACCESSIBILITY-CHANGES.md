# Readability update — Hired Billing Support

Goal: easier reading for older visitors and people with weak eyesight.
Tested on all 56 pages at desktop (1440px), tablet (1024px) and phone (390px)
against the original site, scrolling each page so fade-in sections are visible:
0 layout problems added. Text too light to read (desktop): 573 places → 13
(not counting /blog, where light text on a dark gradient reads fine but can't be
measured automatically). The 13 left are small coloured status labels inside
the dashboard pictures, all close to the target (3.9–4.4 : 1).

## New file
- app/accessibility.css: the readability layer (bigger text, darker colours,
  bigger buttons, phone layout safety, reduced-motion support). Loaded after
  globals.css. To undo everything, delete its import line in app/layout.tsx.

## Changed files
- app/layout.tsx: loads Inter for body text, Fraunces optical-size axis, imports accessibility.css
- app/contact/page.tsx, app/case-study/page.tsx: removed font variable overrides
- app/case-study/page.tsx, app/case-study/[slug]/page.tsx: mint text on cream changed to deep green
- app/CostROIcalculator/calculator.module.css: 9–10px labels raised to 12px, faded and red text darkened
- app/blog/page.tsx: badge text 10px → 12px
- app/privacy-policy/page.tsx and 15 other pages/heroes: tiny inline sizes and faded inline colours raised
- app/components/Footer.tsx: fixed broken links /hire/medical and /hire/dental → /medical and /dental

## Dark-section fixes (second round)
- Grey "muted" text and italic heading halves inside navy sections now switch
  automatically to light grey (was nearly invisible, 2.4 : 1 → 9.6 : 1)
- Faded white text on navy raised from 30–60% to 82% opacity in 21 source files
- "Trusted by" logo strip: logos at full visibility instead of 30%
- Green/amber status colours in the dashboard pictures adjusted per background

## Italic heading words (third round)
- Italic words in headings ("shows up", "Humans do the judgment") used the
  thinnest font weight (300), which looks like hairlines. Now normal weight
  everywhere, and on navy they are brand mint green (8.4 : 1).
- Checked all 426 italic heading words on all pages: all readable now.
- Step numbers 01/02/03 on /enterprise were at 60% opacity → full.

## Logo strip and security cards (fourth round)
- "Trusted by" logo strip (/dental and industry pages): every practice name is
  now the same bold weight, every second line the same weight and colour
- Security cards (HIPAA, SOC 2, Encrypted, Vetted) on the homepage: icon on
  top, title and text full-width and left-aligned; two cards per row only when
  each card has room (at least 240px), otherwise one per row, so words no
  longer break like "Background- checked"

## Service card grids (fifth round)
- /dental "The full dental operations stack" (8 cards) and /medical "The full
  operational stack" (9 cards): copy rewritten in plain, natural English with
  the same meaning and all facts kept (98% clean-claim rate, 48 hours, AR days
  below 25 within 90 days / below 30 in the first quarter). Every card's text
  is now about the same length.
- One type scale inside each card; body text justified with hyphenation
  (left-aligned on phones); tag, title, pain line, text and outcome line up
  across each row (CSS subgrid). No colours changed.

## Bugs fixed that were already on the live site
- "70%" on /enterprise was invisible (colour --amber was never defined)
- "Explore Services" button on /article-28-facilities was invisible
- two-column blocks on phones (solution pages, homepage security badges) were wider than the screen

## Not included in this zip (on purpose)
- .env and .env.local (passwords and API keys): keep your existing ones
- tmp/contact-submissions.jsonl (customers' contact details)

## Still to check
- app/sitemap.ts lists /hire/... URLs that return 404. Remove them, or create those pages.
