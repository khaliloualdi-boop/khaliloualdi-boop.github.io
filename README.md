# Personal website

Minimal Jekyll site: Home, Projects, CV, Contact. No backend, no build step
beyond Jekyll itself, deploys straight to GitHub Pages.

## Local development

Requires Ruby (>= 2.7 recommended — check with `ruby -v`) and Bundler.

```bash
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000.

## Adding a project

Every file in `_projects/` becomes one entry on the Projects page (and its
own page at `/projects/<filename>/`), automatically, newest first. Nothing to
register anywhere else.

1. Copy [`templates/project-template.md`](templates/project-template.md) into
   `_projects/your-project-slug.md`.
2. Fill in the front matter:
   - `title` — project name
   - `date` — used for sorting and display
   - `tags` — list of short labels
   - `summary` — one or two sentences shown on the listing page
   - `links` — list of `{label, url}` pairs (GitHub, demo, paper, etc.)
3. Write the full description below the front matter in Markdown. Inline
   math (`$...$`) and display math (`$$...$$`) are rendered client-side with
   [KaTeX](https://katex.org/).

   If a math expression contains a literal `{{ ... }}` (double curly
   braces), wrap it in `{% raw %}...{% endraw %}` so Jekyll's Liquid
   templating engine doesn't try to interpret it as a variable.

With no files in `_projects/`, the Projects page shows a clean "no projects
yet" placeholder — nothing to configure for that.

## Adding your CV

Drop your PDF at `assets/cv/CV.pdf`. The CV page already links to it.

## Filling in your details

- `index.md` — replace the placeholder bio.
- `contact.md` — replace the placeholder email/GitHub/LinkedIn.
- `_config.yml` — `title` / `description` if you want to change them.

## Light / dark mode

Follows the visitor's OS preference by default; the toggle button in the nav
bar lets them override it, saved in `localStorage`. No framework — a few
lines of vanilla JS in `assets/js/main.js`.

## Deploying to GitHub Pages

This site only uses plugins on GitHub Pages' allowed list
(`jekyll-feed`, `jekyll-sitemap`, `jekyll-seo-tag`), so GitHub can build it
natively — no GitHub Actions workflow needed.

1. Create a GitHub repository and push this folder to it:

   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin git@github.com:your-username/your-repo.git
   git push -u origin main
   ```

2. **Option A — user site** (repo named `your-username.github.io`): once
   pushed, GitHub Pages is enabled automatically and the site is live at
   `https://your-username.github.io/`. Leave `baseurl: ""` in `_config.yml`.

3. **Option B — project site** (any other repo name): go to the repo's
   **Settings → Pages**, set **Source** to "Deploy from a branch", branch
   `main`, folder `/ (root)`. The site is served at
   `https://your-username.github.io/your-repo/`. Set
   `baseurl: "/your-repo"` in `_config.yml` (and re-push) so internal links
   resolve correctly.

Either way, GitHub rebuilds the site automatically on every push to `main`.
