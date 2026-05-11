# Applied Analytics for Impact — Cloudflare Pages Modular Site

This static Cloudflare Pages site uses JavaScript modules so each dashboard and blog post can live in its own file.

## What this version includes

### Live dashboards

- SAG Test Dashboard: `https://sag-test1.streamlit.app`
- Basic Capacity Model: `https://basic-capacity-model.streamlit.app`

### Planned dashboards

- OEE and Throughput Dashboard
- Supply Chain Part-Risk Dashboard
- Materials Screening Dashboard
- Garden Yield Tracker
- Personal Finance Scenario Dashboard

### Blog posts

- Capacity Planning Dashboard: demand to bottlenecks
- Factory physics: using Little’s Law without overcomplicating it
- Materials data screening: turning experiments into decisions
- Supply chain risk scoring with imperfect data
- Garden analytics: tracking yield, timing, and lessons learned

---

# File structure

```text
impact_analytics_cloudflare_v3_modules/
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
    ├── images/
    │   ├── capacity-utilization-example.png
    │   ├── littles-law-example.png
    │   └── materials-screening-example.png
    └── content/
        ├── dashboards/
        │   ├── index.js
        │   ├── sag-test-1.js
        │   ├── basic-capacity-model.js
        │   ├── oee-throughput.js
        │   ├── supply-chain-risk.js
        │   ├── materials-screening.js
        │   ├── garden-yield.js
        │   └── personal-finance.js
        └── posts/
            ├── index.js
            ├── capacity-planning-dashboard.js
            ├── factory-physics-littles-law.js
            ├── materials-data-screening.js
            ├── supply-chain-risk-scoring.js
            └── garden-analytics.js
```

## Mental model

```text
assets/config.js                  → site-wide settings only
assets/content/dashboards/*.js    → one file per dashboard
assets/content/posts/*.js         → one file per blog post
assets/content/*/index.js         → registry of published items
assets/layout.js                  → shared rendering logic
assets/styles.css                 → site-wide style
```

You should rarely need to edit the HTML files after this refactor.

---

# Local testing

Do **not** double-click `index.html`. This site uses ES modules, so run a local server.

From the project folder:

```powershell
cd "C:\path\to\impact_analytics_cloudflare_v3_modules"
python -m http.server 8000
```

Open:

```text
http://localhost:8000
```

Test these pages:

```text
http://localhost:8000/
http://localhost:8000/dashboards.html
http://localhost:8000/dashboard.html?slug=sag-test-1
http://localhost:8000/dashboard.html?slug=basic-capacity-model
http://localhost:8000/blog.html
http://localhost:8000/post.html?slug=capacity-planning-dashboard
http://localhost:8000/post.html?slug=factory-physics-littles-law
http://localhost:8000/about.html
http://localhost:8000/contact.html
```

Stop the local server with:

```text
Ctrl + C
```

---

# Cloudflare Pages settings

Use these Cloudflare Pages settings:

```text
Framework preset: None
Build command: blank or exit 0
Build output directory: /
Root directory: /
Production branch: main
```

Do not add `_redirects` unless you intentionally need custom redirects.

Cloudflare Pages should serve clean URLs such as:

```text
/dashboards
/blog
/about
/contact
```

The `.html` versions are also safe:

```text
/dashboards.html
/blog.html
/about.html
/contact.html
```

---

# Git workflow: update an existing repo

Use this if you are copying this version into your existing Cloudflare Pages repo.

## 1. Go to your existing repo folder

```powershell
cd "C:\path\to\your\cloudflare-analytics-site"
```

## 2. Confirm current repo status

```powershell
git status
```

If you have uncommitted changes, either commit them or create a backup before continuing.

## 3. Optional but recommended: create a branch

```powershell
git checkout -b modular-content-refactor
```

## 4. Copy the new files into the repo

Copy all files from this ZIP folder into your existing repo folder.

When Windows asks whether to replace files with the same name, choose:

```text
Replace the files in the destination
```

This is expected because the refactor replaces the old page shell and script files.

## 5. Remove old files that are no longer needed

If any of these old files exist, remove them:

```powershell
Remove-Item _redirects -ErrorAction SilentlyContinue
Remove-Item assets\script.js -ErrorAction SilentlyContinue
Remove-Item -Recurse blog -ErrorAction SilentlyContinue
```

## 6. Check the changes

```powershell
git status
git diff --stat
```

You should see modified files, new files, and possibly deleted files.

## 7. Test locally

```powershell
python -m http.server 8000
```

Then test:

```text
http://localhost:8000/
http://localhost:8000/dashboards.html
http://localhost:8000/dashboard.html?slug=sag-test-1
http://localhost:8000/dashboard.html?slug=basic-capacity-model
http://localhost:8000/blog.html
http://localhost:8000/post.html?slug=capacity-planning-dashboard
```

Stop the server:

```text
Ctrl + C
```

## 8. Stage all changes

Use `-A` so Git captures new files, modified files, and deleted files:

```powershell
git add -A
```

## 9. Commit

```powershell
git commit -m "Refactor site into modular dashboards and blog posts"
```

## 10. Push

If you are working directly on `main`:

```powershell
git push
```

If you created the `modular-content-refactor` branch:

```powershell
git push -u origin modular-content-refactor
```

Then open GitHub and merge the branch into `main`, or merge locally:

```powershell
git checkout main
git pull
git merge modular-content-refactor
git push
```

Cloudflare Pages should redeploy automatically after `main` is updated.

---

# Git workflow: new local folder, same remote repo

Use this if you unzipped this package into a completely new local folder and want to connect it to the existing GitHub remote.

## 1. Open PowerShell in the new folder

```powershell
cd "C:\path\to\impact_analytics_cloudflare_v3_modules"
```

## 2. Initialize Git

```powershell
git init
git branch -M main
```

## 3. Add the same remote repo

```powershell
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```

Example:

```powershell
git remote add origin https://github.com/gregoryshawn94/cloudflare-analytics-site.git
```

## 4. Bring in the existing remote history

```powershell
git fetch origin main
git reset --mixed origin/main
```

This connects your folder to the remote history while keeping the new files in your working directory.

## 5. Stage, commit, and push

```powershell
git add -A
git commit -m "Refactor site into modular dashboards and blog posts"
git push -u origin main
```

---

# How to add a new dashboard

## 1. Create a new dashboard file

Create:

```text
assets/content/dashboards/my-new-dashboard.js
```

Use this template:

```js
const dashboard = {
  slug: "my-new-dashboard",
  title: "My New Dashboard",
  subtitle: "Short description of the dashboard",
  category: "Finance",
  status: "Live",
  streamlitUrl: "https://my-new-dashboard.streamlit.app",
  summary:
    "A short explanation of what this dashboard does and why it matters.",
  inputs: [
    "Input 1",
    "Input 2"
  ],
  outputs: [
    "Output 1",
    "Output 2"
  ],
  tags: ["Python", "Streamlit", "finance"],
  featured: false
};

export default dashboard;
```

## 2. Register it in the dashboard index

Open:

```text
assets/content/dashboards/index.js
```

Add an import:

```js
import myNewDashboard from "./my-new-dashboard.js";
```

Add it to the array:

```js
const DASHBOARDS = [
  sagTest1,
  basicCapacityModel,
  oeeThroughput,
  supplyChainRisk,
  materialsScreening,
  gardenYield,
  personalFinance,
  myNewDashboard
];
```

## 3. Test the dashboard page

```text
http://localhost:8000/dashboard.html?slug=my-new-dashboard
```

---

# How to add a new blog post

## 1. Create a new post file

Create:

```text
assets/content/posts/my-new-post.js
```

Use this template:

```js
const post = {
  slug: "my-new-post",
  title: "My New Post",
  date: "2026-05-15",
  category: "Supply chain",
  summary:
    "Short summary of the post.",
  tags: ["supply chain", "Python"],
  body: [
    {
      type: "heading",
      text: "Main idea"
    },
    {
      type: "paragraph",
      text:
        "This is the first paragraph."
    },
    {
      type: "code",
      language: "python",
      code: `import pandas as pd

df = pd.read_csv("data.csv")
df.head()`
    },
    {
      type: "image",
      src: "/assets/images/my-image.png",
      alt: "Description of the image",
      caption: "Caption shown below the image."
    }
  ]
};

export default post;
```

## 2. Register it in the post index

Open:

```text
assets/content/posts/index.js
```

Add an import:

```js
import myNewPost from "./my-new-post.js";
```

Add it to the array:

```js
const BLOG_POSTS = [
  capacityPlanningDashboard,
  factoryPhysicsLittlesLaw,
  materialsDataScreening,
  supplyChainRiskScoring,
  gardenAnalytics,
  myNewPost
];
```

## 3. Test the post page

```text
http://localhost:8000/post.html?slug=my-new-post
```

---

# Blog body block types

## Heading

```js
{
  type: "heading",
  text: "Section title"
}
```

## Paragraph

```js
{
  type: "paragraph",
  text: "Paragraph text."
}
```

## Image

Put your image in:

```text
assets/images/
```

Then reference it:

```js
{
  type: "image",
  src: "/assets/images/my-image.png",
  alt: "Short image description",
  caption: "Caption shown under the image."
}
```

## Code

Use backticks for multiline code:

```js
{
  type: "code",
  language: "python",
  code: `import pandas as pd

df = pd.read_csv("data.csv")
df.head()`
}
```

## List

```js
{
  type: "list",
  items: [
    "First item",
    "Second item",
    "Third item"
  ]
}
```

## Callout

```js
{
  type: "callout",
  text: "Important note or takeaway."
}
```

---

# When you add images

Put PNGs here:

```text
assets/images/
```

Recommended file naming:

```text
capacity-utilization.png
littles-law-wip-throughput.png
materials-screening-map.png
```

Avoid spaces in image names.

---

# Common issues

## Blog or dashboard detail page is blank

Check the browser developer console. The most common cause is a typo in an import path in one of these files:

```text
assets/content/dashboards/index.js
assets/content/posts/index.js
```

## Local file opened directly does not work

Use:

```powershell
python -m http.server 8000
```

Do not double-click `index.html`.

## Clean URLs behave strangely

Use `.html` links locally and on the site if needed:

```text
/dashboards.html
/blog.html
/about.html
/contact.html
```

Do not re-add `_redirects` unless you intentionally need redirect rules.
