# Civil Engineer Portfolio CMS — Prototype

A single-page Civil Engineering portfolio, laid out as a bento-grid (hero, then an about / featured-projects / project-spotlight row, then an experience / skills / contact row), with scroll-reveal animations, a scrollspy nav, button ripple effects, a light/dark theme toggle, and a built-in content editor.

## Editable from the admin panel ("Edit Website")
- Font family, accent color, default theme (dark/light)
- Hero background image URL
- Hero name / eyebrow / tagline / location / email / CV link / LinkedIn
- About section copy, photo, and the four highlight labels
- Add / remove / edit projects, tags, links, and thumbnail images
- The featured project spotlight (title, tags, description, loop note, tile labels, link)
- Experience (company, role, period, photo, bullet points)
- Skills, split into Engineering and Software & Tools groups (label + icon)
- Contact section copy, email, LinkedIn, and background image
- Export content as JSON

## Interactions
- Scroll-reveal animations on cards and hero content (IntersectionObserver)
- Scrollspy nav underline + scroll progress bar
- Ripple / press effects on buttons, hover-lift on cards and project rows
- Light/dark theme toggle (visitor preference, saved per browser)
- Mobile hamburger nav menu

## Important
This is a **front-end CMS prototype** using browser `localStorage`. It is useful for design validation and personal use on one browser/device — content edits are local to whichever browser saved them, not shared across visitors.

For a production website, connect the editor to:
- Authentication (Admin only)
- Database (Postgres/Supabase)
- Image/file storage (Supabase Storage, S3, Cloudinary, etc.)
- Server-side validation and publishing/version history

The UI/data model is intentionally structured so it can be migrated to a real backend later.
