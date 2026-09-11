# Khalil Oualdi: personal portfolio

A Jekyll portfolio for a Mathematics BSc student at EPFL. Home, Projects, detailed project write-ups, Background, and Contact. Hosted on the existing GitHub Pages repository.

## Local development

Use a current supported Ruby and Bundler:

```sh
bundle install
bundle exec jekyll serve --host 127.0.0.1
```

Open http://127.0.0.1:4000. Build without serving with `bundle exec jekyll build`.

The default macOS Ruby 2.6 is outdated and may not resolve current dependencies. The redesign was previewed locally with an isolated compatibility bundle outside the repository; the production Gemfile was preserved.

## Content

- `index.html`: introduction and selected work.
- `_projects/*.md`: the two project write-ups; add new entries from `templates/project-template.md`.
- `cv.html`: education and project experience, retaining the `/cv/` route.
- `assets/cv/CV.pdf`: optional CV download, shown only when the file exists.
- `_config.yml`: site URL, GitHub profile, optional email and LinkedIn.
- `DESIGN_GUIDE.md`: the design system and editing guidance.

The project accounts are based on the public source repositories. Employment history, dates, contact details, and personal contribution claims have not been invented.

## GitHub Pages

The existing remote is `git@github.com:khaliloualdi-boop/khaliloualdi-boop.github.io.git`. The canonical URL is https://khaliloualdi-boop.github.io with an empty base URL.

The site uses GitHub Pages-compatible Jekyll plugins. Retain the existing Pages configuration; a frontend framework or extra deployment service is not needed.

Before pushing, review `git diff`, run the Jekyll build, and check the site on desktop and mobile. The redesign does not automatically commit, push, or change hosting settings.

## Remaining author content

Add a CV PDF, optional email/LinkedIn, and any further experience or reflections when ready. Replace the asset-sheet and schematic previews with actual project screenshots if available.
