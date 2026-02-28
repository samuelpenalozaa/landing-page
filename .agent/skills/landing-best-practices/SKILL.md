---
name: landing-best-practices
description: >
  Enforces project-specific standards when working on the Samuel Peñaloza
  personal landing page. Activate when the user asks to add, modify, or review
  any code, content, or files in the landing page project located at
  "Landig page/". Covers SEO, file structure, CSS variables, naming conventions,
  responsive design, git commits, and sitemap/meta freshness.
---

# Landing Page Best Practices Skill

## Goal

Ensure every change made to the Samuel Peñaloza personal landing page follows
the established project standards: clean file separation, consistent design
tokens, SEO hygiene, and meaningful version control. This skill prevents
regressions and keeps the codebase professional and maintainable.

## Project Context

- **URL**: https://samuelpenaloza.netlify.app
- **Stack**: Vanilla HTML / CSS / JS — no frameworks, no build tools
- **File structure**:
  ```
  Landig page/
  ├── index.html       ← HTML only (no inline <style> or <script>)
  ├── css/
  │   └── styles.css   ← All styles
  ├── js/
  │   └── main.js      ← All JavaScript
  ├── favicon.svg
  ├── sitemap.xml
  └── robots.txt
  ```
- **Design tokens** (always use these CSS variables, never hardcode colors):
  ```css
  --negro:      #0a0a0a    /* Background */
  --blanco:     #f4f0e8    /* Cream text */
  --naranja:    #ff4d00    /* Orange accent */
  --gris:       #1a1a1a    /* Dark gray */
  --gris-claro: #2a2a2a    /* Light gray / borders */
  ```
- **Typography**:
  - `Bebas Neue` — large display headings, counters
  - `DM Serif Display` (italic) — section titles, blog titles
  - `DM Mono` — body text, labels, form inputs

## Instructions

Follow **all** steps below for any change to the project:

### 1. File Structure
- NEVER add `<style>` blocks inside `index.html`. All CSS goes in `css/styles.css`.
- NEVER add `<script>` blocks inside `index.html`. All JS goes in `js/main.js`.
- Keep `index.html` clean: only HTML structure + the two `<link>`/`<script>` imports.
- If a new resource is needed (image, icon), place it in a logical subfolder (e.g., `assets/`).

### 2. CSS & Design System
- Always use the defined CSS variables (`--negro`, `--naranja`, etc.) instead of hardcoded hex values.
- New components must follow the existing naming pattern:
  - Sections: `.nombre-wrap`, `.nombre-item`, `.nombre-content`
  - Labels: `.card-label`, `.sec-num`, `.sec-title`
  - Buttons: `.btn-[action]`
- New `@keyframes` go at the bottom of `styles.css`, in the Animations section.

### 3. Responsive Design
- NEVER break mobile layout (breakpoint: `max-width: 600px`).
- For every new grid or flex layout added, add a corresponding rule inside the `@media (max-width: 600px)` block in `styles.css`.
- Test logic: any multi-column layout must collapse to single column on mobile.

### 4. Semantic HTML & Accessibility
- All new content sections must use `<section aria-labelledby="id-of-its-h2">`.
- Headings must follow logical order: one `<h1>` (hero), `<h2>` per section, `<h3>` for sub-items.
- All `<section>` elements must be inside `<main>`.
- Interactive elements (buttons, inputs) must have visible labels.
- Use `<time datetime="YYYY-MM-DD">` for all dates.

### 5. SEO — Evaluate on Every Content Change
After adding or modifying any content, ask:
- [ ] Does the page `<title>` still accurately reflect the page? Update if needed.
- [ ] Does `<meta name="description">` still describe the page content? Update if needed.
- [ ] Were new keywords introduced? Add them to `<meta name="keywords">`.
- [ ] Was a new page or major section added? Update `sitemap.xml` with the new URL and `<lastmod>` date.
- [ ] Do the Open Graph tags (`og:title`, `og:description`) still look good when shared on WhatsApp?

The SEO block in `index.html` is structured as:
```
<!-- ===== SEO BÁSICO ===== -->
<!-- ===== OPEN GRAPH ===== -->
<!-- ===== TWITTER CARD ===== -->
```
Never remove or merge these comment blocks.

### 6. Git Commits — Conventional Commits Format
Always suggest commits in this format:
```
<type>(<scope>): <short imperative description in Spanish or English>
```

| Type       | When to use                                    |
|------------|------------------------------------------------|
| `feat`     | New section, feature, or functionality         |
| `fix`      | Bug fix or broken behavior correction          |
| `style`    | CSS-only changes (no logic change)             |
| `content`  | Text/copy changes only                         |
| `seo`      | Meta tags, sitemap, robots.txt, OG tags        |
| `refactor` | Code restructuring without behavior change     |
| `chore`    | Config files, file moves, tooling              |
| `docs`     | README or documentation changes                |

**Examples**:
```
feat(blog): agregar nueva entrada sobre vibe coding
seo(meta): actualizar descripcion y keywords para nueva seccion
fix(contador): corregir fecha de nacimiento en main.js
style(contacto): ajustar padding del formulario en mobile
content(hero): actualizar subtitulo del hero
```

## Constraints

- Do **NOT** use TailwindCSS, Bootstrap, or any external CSS framework.
- Do **NOT** use hardcoded color values like `#ff4d00`. Always use the CSS variable `var(--naranja)`.
- Do **NOT** inline styles in HTML attributes unless absolutely unavoidable (e.g., one-off `opacity`).
- Do **NOT** modify the `robots.txt` `Disallow` rules without explicit user confirmation.
- Do **NOT** remove the `<link rel="canonical">` tag from `index.html`.
- Do **NOT** suggest external JavaScript libraries without first checking if the feature can be done in vanilla JS.
- Do **NOT** create a new file outside the established structure without explaining why.

## Example

**User**: "Quiero agregar una sección de Servicios con precios"

**Correct agent behavior**:
1. Add HTML inside `<main>` in `index.html` using `<section aria-labelledby="servicios-titulo">` and sequential section number (e.g., `08 —`).
2. Add CSS to `css/styles.css` under a new `/* SERVICIOS */` comment block, using only CSS variables.
3. Add responsive rules in the `@media (max-width: 600px)` block.
4. Evaluate SEO:
   - Update `<meta name="keywords">` to include "servicios web, freelancer Colombia".
   - Update `<meta name="description">` if needed.
   - Update `sitemap.xml` `<lastmod>` date.
5. Suggest commit:
   ```
   feat(servicios): agregar seccion de servicios y precios
   seo(meta): actualizar keywords con servicios freelancer
   ```
