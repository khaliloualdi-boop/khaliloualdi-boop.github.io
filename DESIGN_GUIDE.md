# Design Guide: Khalil Oualdi

## Purpose and positioning

A personal portfolio for a Mathematics BSc student at EPFL. Give visitors more depth than a LinkedIn profile: explain each project's context, rules, implementation choices, and source.

Keep the introduction factual. Do not add dates, grades, employment, individual contribution claims, performance figures, or achievements without confirmation. Current project accounts are based on the linked repositories and their design documents.

## Visual direction

A project notebook with retro-computing details. The Pinterest references inform graph-paper rules, compact monospace labels, squared controls, clear borders, and small offset shadows. Use real project material instead of decorative stock images.

The original guide's useful foundations remain: CSS tokens, Space Grotesk and Inter, an 8px spacing rhythm, reusable Jekyll layouts, light/dark themes, and Markdown project pages. The redesign replaces oversized navy sections, floating characters, speech bubbles, and parallax with a quieter reading experience. Original character includes remain available in the repository but are not rendered.

Reference links:

- https://pin.it/72carvcdj — retro desktop interfaces
- https://pin.it/46ZbeptS6 — personal, notebook-like composition
- https://pin.it/F2SvqO1B0 — clear borders and colour accents
- https://pin.it/69P1KZnya — pixel details
- https://pin.it/1etrzEFkv — retro computer imagery
- https://pin.it/3bj7ZbI42 — graph-paper structure

Use these as inspiration, not assets to copy.

## Information architecture

- **Home:** name and student identity, selected projects, brief background.
- **Projects:** all published projects, using the same reusable card as Home.
- **Project pages:** context, tools, source, and a readable technical account.
- **Background:** education, project experience, and a CV when supplied. Keeps the existing `/cv/` URL.
- **Contact:** verified public profile links. Email and LinkedIn appear only when configured.

Preserve the existing Jekyll/GitHub Pages architecture and routes. No frontend framework, Node build, or backend is required.

## Colour and typography

All theme colours live in `assets/css/style.css`.

| Token    | Light   | Purpose                          |
| -------- | ------- | -------------------------------- |
| --bg     | #fafbf9 | Page background                  |
| --ink    | #202522 | Primary text and borders         |
| --muted  | #535d58 | Secondary text                   |
| --accent | #234bd1 | Links and primary action         |
| --mint   | #d8eddc | Background band and game preview |
| --yellow | #f3e690 | Train preview and monogram       |
| --soft   | #e8edf9 | Project title bars               |
| --line   | #c4cbc5 | Subtle separators                |

Dark mode has its own text, accent, surface, and border tokens. It follows the system preference until a visitor chooses a theme; the choice is saved locally.

- Space Grotesk: display and section headings.
- Inter: body text and navigation.
- IBM Plex Mono: project filenames, small labels, and terminal notation.
- Body text starts at 1rem with 1.7 line height.
- Regular interface labels should be at least .875rem.
- Use zero letter spacing and breakpoint-based type sizes.
- Keep article text to a comfortable reading width, approximately 740px.

## Layout and components

The desktop content width is capped at 1160px. Mobile uses 16px side gutters. Projects use two equal columns on desktop and one on small screens. Article metadata sits alongside text on desktop and above it on mobile.

Page sections are unframed bands. Cards belong to individual projects and use a 4px radius, a thin border, and a small hard shadow. Do not put cards inside cards.

The graph-paper background is a subtle CSS grid, not a decorative image. Keep it away from long reading sections.

Navigation stays at the top. The mobile menu is a disclosure, not a modal: opening moves focus to the first link; Escape closes it and returns focus. Clicking away, moving focus outside, following a link, or switching to desktop closes it.

Theme and menu buttons are 44px square and have accessible names and native hover titles. Text links stay recognisable. Avoid decorative controls that look interactive but do nothing.

## Adding or editing a project

Copy `templates/project-template.md` to `_projects/project-slug.md`.

Required fields:

- `title`: public project title.
- `order`: display order, lowest first.
- `tags`: tools or topics.
- `summary`: one or two sentences for listings.
- `context`: course or project context.
- `repository`: verified source URL.
- `file_label`: a short label for the title bar.

Optional fields:

- `number`: display index.
- `image` and `image_alt`: local preview asset and accurate description.
- `visual`: CSS preview variant.
- `math`: enable KaTeX. Defaults to true for project pages to preserve existing math support.
- `links`: additional label/URL pairs.

Write Markdown below the front matter. A useful structure is overview, system design, testing or limitations, then source links. Describe what the source supports; add personal reflections only when the author supplies them.

The current game image is the repository's dungeon tileset, not a screenshot. The train preview is an explicitly labelled schematic. For future projects, prefer actual screenshots with meaningful alt text and record their source in `assets/images/README.md`.

## Personal content

Edit `index.html` for the introduction and `cv.html` for education and experience. Do not invent missing biography details.

Set `email` and `linkedin_url` in `_config.yml` when ready. Empty values hide those links. The verified GitHub profile is already configured.

Add `assets/cv/CV.pdf` to enable the CV download automatically. Until then, the page states that the file is not yet available instead of linking to a missing file.

## Accessibility and motion

- Keep a single main landmark and one H1 on each page.
- Maintain logical heading levels and descriptive link text.
- The first keyboard link skips navigation.
- Focus outlines must remain visible in both themes.
- Content is readable without JavaScript; mobile links remain available.
- Use `aria-current` for the active page or project section.
- Honour reduced motion. Do not hide content behind scroll animations.
- Allow text wrapping and 200% text enlargement.
- Keep wide code and tables scrollable within articles rather than widening the page.
- Do not convey project status or meaning through colour alone.

## Performance and metadata

Use local, appropriately sized project assets and reserve image dimensions. Below-fold images may load lazily. Fonts use swap loading. KaTeX is requested only for pages with math enabled.

Jekyll SEO generates the title, description, and canonical metadata once. The site URL is configured for the existing GitHub Pages repository. A custom favicon identifies the site. No social-preview image or analytics was added.

Documentation, templates, local dependencies, and build output must not become published content.

## Verification before publishing

Run the native Jekyll build, then inspect Home, Projects, both current project pages, Background, and Contact. Check desktop and narrow mobile widths, both themes, keyboard focus, mobile menu opening/closing, long content, and local links.

GitHub Pages remains the hosting target. Review the diff, commit the source files and assets, and push to the existing remote when ready. Do not commit `_site/`, local dependencies, or credentials.
