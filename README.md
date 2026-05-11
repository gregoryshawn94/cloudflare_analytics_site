# Applied Analytics for Impact — Cloudflare Pages v2

This is a static Cloudflare Pages website for a Python analytics portfolio.

It includes:

- Shared nav and footer generated from one config file
- Dashboard library
- Reusable dashboard detail page
- Two live Streamlit dashboard embeds
- Blog library
- Reusable blog post page
- PNG image support in blog posts
- Code block support in blog posts
- Sample PNG assets
- Broad analytics positioning across factory physics, supply chain, materials science, finance, gardening, and Python workflows

## Main concept

You should rarely edit the HTML pages directly.

Edit this file for most website updates:

```text
assets/config.js
```

## File structure

```text
impact_analytics_cloudflare_v2/
├── index.html
├── dashboards.html
├── dashboard.html
├── blog.html
├── post.html
├── about.html
├── contact.html
├── _headers
├── README.md
└── assets/
    ├── config.js
    ├── layout.js
    ├── styles.css
    └── images/
        ├── capacity-utilization-example.png
        ├── littles-law-example.png
        └── materials-screening-example.png
```

## Local preview

From the project folder:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

For local preview, use the `.html` URLs:

```text
http://localhost:8000/dashboards.html
http://localhost:8000/dashboard.html?slug=sag-test-1
http://localhost:8000/dashboard.html?slug=basic-capacity-model
http://localhost:8000/blog.html
http://localhost:8000/post.html?slug=capacity-planning-dashboard
```

On Cloudflare Pages, clean URLs such as `/dashboards` and `/blog` should also work.

## Cloudflare Pages settings

Use:

```text
Framework preset: None
Build command: blank or exit 0
Build output directory: /
Root directory: /
```

Do not include a `_redirects` file unless you need custom redirects.
Cloudflare Pages can serve clean URLs from `.html` files automatically.

## Updating dashboards

Edit `DASHBOARDS` in:

```text
assets/config.js
```

Each dashboard object follows this pattern:

```js
{
  slug: "basic-capacity-model",
  title: "Basic Capacity Model",
  subtitle: "Demand, routing, workload, capacity, and utilization",
  category: "Factory physics",
  status: "Live",
  streamlitUrl: "https://basic-capacity-model.streamlit.app",
  summary: "Short summary...",
  inputs: ["Demand", "Routing", "Process time"],
  outputs: ["Required load", "Utilization", "Bottleneck status"],
  tags: ["capacity", "OEE", "Streamlit"],
  featured: true
}
```

The site automatically embeds Streamlit apps using:

```text
?embed=true
```

## Updating blog posts

Edit `BLOG_POSTS` in:

```text
assets/config.js
```

Blog bodies support these block types:

```js
{ type: "heading", text: "Section title" }
{ type: "paragraph", text: "Paragraph text." }
{ type: "image", src: "/assets/images/example.png", alt: "Alt text", caption: "Caption text." }
{ type: "code", language: "python", code: `print("hello")` }
{ type: "list", items: ["item 1", "item 2"] }
{ type: "callout", text: "Important note." }
```

## Git push workflow

After copying these files into your Cloudflare Pages repo:

```powershell
git status
git add .
git commit -m "Refactor website with reusable dashboards and blog blocks"
git push
```

Cloudflare Pages should redeploy automatically.
