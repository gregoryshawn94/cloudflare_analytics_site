# Shawn Gregory Analytics - Cloudflare Pages Starter

A simple static website for Cloudflare Pages with:

- Home page
- Dashboards page with embedded Streamlit app
- Blog index
- About page
- Contact page
- Basic CSS styling
- Cloudflare `_headers` file
- Cloudflare `_redirects` file

## Local use

Open `index.html` directly in your browser, or use a simple local server:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Deploy to Cloudflare Pages

1. Create a new GitHub repo.
2. Push these files.
3. In Cloudflare, go to Workers & Pages → Create application → Pages.
4. Connect your GitHub repo.
5. Use:
   - Framework preset: None
   - Build command: leave blank
   - Build output directory: /
6. Deploy.
7. Add your custom domain in the Cloudflare Pages project settings.

## Important

Replace this placeholder in `dashboards.html`:

```text
https://YOUR-STREAMLIT-APP.streamlit.app/?embed=true
```

with your actual Streamlit app URL.
