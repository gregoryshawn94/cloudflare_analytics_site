function normalizePath(pathname) {
  let path = pathname.replace(/\/index\.html$/, "/").replace(/\.html$/, "");
  if (path.length > 1 && path.endsWith("/")) path = path.slice(0, -1);
  return path || "/";
}

function getQueryParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

function slugLink(page, slug) {
  return `/${page}.html?slug=${encodeURIComponent(slug)}`;
}

function streamlitEmbedUrl(url) {
  if (!url) return "";
  const clean = url.replace(/\/$/, "");
  return `${clean}/?embed=true`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderHeader() {
  const header = document.querySelector("#site-header");
  if (!header) return;

  const current = normalizePath(window.location.pathname);

  const links = NAV_ITEMS.map((item) => {
    const itemPath = normalizePath(item.href);
    const isActive = current === itemPath || (itemPath !== "/" && current.startsWith(itemPath));
    const className = [
      isActive ? "active" : "",
      item.cta ? "nav-cta" : ""
    ].filter(Boolean).join(" ");

    return `<a class="${className}" href="${item.href}">${item.label}</a>`;
  }).join("");

  header.innerHTML = `
    <header class="site-header">
      <nav class="nav">
        <a class="brand" href="/">
          <span class="brand-mark">◆</span>
          <span>${SITE_CONFIG.shortName}</span>
        </a>
        <button class="menu-button" aria-label="Toggle navigation" aria-expanded="false">Menu</button>
        <div class="nav-links">${links}</div>
      </nav>
    </header>
  `;

  const button = header.querySelector(".menu-button");
  const navLinks = header.querySelector(".nav-links");

  button.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    button.setAttribute("aria-expanded", String(isOpen));
  });
}

function renderFooter() {
  const footer = document.querySelector("#site-footer");
  if (!footer) return;

  footer.innerHTML = `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div>
          <strong>${SITE_CONFIG.name}</strong>
          <p>${SITE_CONFIG.tagline}</p>
        </div>
        <div class="footer-links">
          <a href="${SITE_CONFIG.githubUrl}" target="_blank" rel="noopener">GitHub</a>
          <a href="${SITE_CONFIG.linkedinUrl}" target="_blank" rel="noopener">LinkedIn</a>
          <a href="mailto:${SITE_CONFIG.email}">Email</a>
        </div>
      </div>
      <div class="container footer-bottom">
        © ${new Date().getFullYear()} ${SITE_CONFIG.owner}. Built with Cloudflare Pages.
      </div>
    </footer>
  `;
}

function renderHome() {
  const heroTitle = document.querySelector("[data-site-title]");
  const heroTagline = document.querySelector("[data-site-tagline]");
  const pillars = document.querySelector("[data-content-pillars]");
  const featured = document.querySelector("[data-featured-dashboard]");
  const recentPosts = document.querySelector("[data-recent-posts]");

  if (heroTitle) heroTitle.textContent = SITE_CONFIG.name;
  if (heroTagline) heroTagline.textContent = SITE_CONFIG.description;

  if (pillars) {
    pillars.innerHTML = CONTENT_PILLARS.map((pillar) => `
      <article class="card">
        <h3>${pillar.title}</h3>
        <p>${pillar.description}</p>
        <div class="tag-list">
          ${pillar.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
      </article>
    `).join("");
  }

  if (featured) {
    const item = DASHBOARDS.find((dashboard) => dashboard.featured) || DASHBOARDS[0];
    featured.innerHTML = `
      <article class="card hero-card">
        <div class="card-kicker">${item.status}</div>
        <h3>${item.title}</h3>
        <p>${item.summary}</p>
        <div class="tag-list">
          ${item.tags.slice(0, 5).map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
        <div class="actions">
          <a class="button primary" href="${slugLink("dashboard", item.slug)}">Open dashboard</a>
        </div>
      </article>
    `;
  }

  if (recentPosts) {
    recentPosts.innerHTML = BLOG_POSTS.slice(0, 3).map(postCard).join("");
  }
}

function dashboardCard(dashboard) {
  return `
    <article class="card listing-card">
      <div class="listing-meta">
        <span>${dashboard.category}</span>
        <span class="status ${dashboard.status.toLowerCase().replaceAll(" ", "-")}">${dashboard.status}</span>
      </div>
      <h3>${dashboard.title}</h3>
      <p>${dashboard.subtitle}</p>
      <p>${dashboard.summary}</p>
      <div class="tag-list">
        ${dashboard.tags.slice(0, 5).map((tag) => `<span class="tag">${tag}</span>`).join("")}
      </div>
      <div class="actions">
        <a class="button secondary" href="${slugLink("dashboard", dashboard.slug)}">View details</a>
      </div>
    </article>
  `;
}

function postCard(post) {
  return `
    <a class="post-link card listing-card" href="${slugLink("post", post.slug)}">
      <div class="listing-meta">
        <span>${post.category}</span>
        <span>${post.date}</span>
      </div>
      <h3>${post.title}</h3>
      <p>${post.summary}</p>
      <div class="tag-list">
        ${post.tags.slice(0, 5).map((tag) => `<span class="tag">${tag}</span>`).join("")}
      </div>
    </a>
  `;
}

function renderDashboardList() {
  const container = document.querySelector("[data-dashboard-list]");
  if (!container) return;
  container.innerHTML = DASHBOARDS.map(dashboardCard).join("");
}

function renderBlogList() {
  const container = document.querySelector("[data-blog-list]");
  if (!container) return;
  container.innerHTML = BLOG_POSTS.map(postCard).join("");
}

function renderDashboardDetail() {
  const container = document.querySelector("[data-dashboard-detail]");
  if (!container) return;

  const slug = getQueryParam("slug") || DASHBOARDS[0].slug;
  const item = DASHBOARDS.find((dashboard) => dashboard.slug === slug);

  if (!item) {
    container.innerHTML = `
      <section class="card">
        <h1>Dashboard not found</h1>
        <p>The dashboard slug was not recognized.</p>
        <a class="button primary" href="/dashboards.html">Back to dashboards</a>
      </section>
    `;
    return;
  }

  const canEmbed = Boolean(item.streamlitUrl);

  container.innerHTML = `
    <section class="dashboard-header">
      <div class="eyebrow">${item.category} · ${item.status}</div>
      <h1>${item.title}</h1>
      <p>${item.summary}</p>
      <div class="tag-list">
        ${item.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
      </div>
      <div class="actions">
        ${canEmbed ? `<a class="button primary" href="${item.streamlitUrl}" target="_blank" rel="noopener">Open full-screen app</a>` : ""}
        <a class="button secondary" href="/dashboards.html">All dashboards</a>
      </div>
    </section>

    <section class="grid-2">
      <article class="card">
        <h3>Inputs</h3>
        <ul class="clean-list">
          ${item.inputs.map((x) => `<li>${x}</li>`).join("")}
        </ul>
      </article>
      <article class="card">
        <h3>Outputs</h3>
        <ul class="clean-list">
          ${item.outputs.map((x) => `<li>${x}</li>`).join("")}
        </ul>
      </article>
    </section>

    ${
      canEmbed
        ? `<section class="app-frame">
             <iframe src="${streamlitEmbedUrl(item.streamlitUrl)}" title="${item.title}" loading="lazy"></iframe>
           </section>`
        : `<section class="notice">
             This dashboard is marked as planned. Add a Streamlit URL in <code>assets/config.js</code> when it is ready.
           </section>`
    }
  `;
}

function renderPostBlock(block) {
  if (block.type === "heading") return `<h2>${block.text}</h2>`;
  if (block.type === "paragraph") return `<p>${block.text}</p>`;
  if (block.type === "image") {
    return `
      <figure class="article-figure">
        <img src="${block.src}" alt="${block.alt || ""}" loading="lazy" />
        ${block.caption ? `<figcaption>${block.caption}</figcaption>` : ""}
      </figure>
    `;
  }
  if (block.type === "code") {
    return `
      <div class="code-block">
        <div class="code-label">${block.language || "code"}</div>
        <pre><code>${escapeHtml(block.code)}</code></pre>
      </div>
    `;
  }
  if (block.type === "list") {
    return `
      <ul class="article-list">
        ${block.items.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    `;
  }
  if (block.type === "callout") return `<aside class="callout">${block.text}</aside>`;
  return "";
}

function renderPostDetail() {
  const container = document.querySelector("[data-post-detail]");
  if (!container) return;

  const slug = getQueryParam("slug") || BLOG_POSTS[0].slug;
  const post = BLOG_POSTS.find((item) => item.slug === slug);

  if (!post) {
    container.innerHTML = `
      <section class="card">
        <h1>Post not found</h1>
        <p>The post slug was not recognized.</p>
        <a class="button primary" href="/blog.html">Back to blog</a>
      </section>
    `;
    return;
  }

  container.innerHTML = `
    <article class="article">
      <div class="eyebrow">${post.category} · ${post.date}</div>
      <h1>${post.title}</h1>
      <p class="lede">${post.summary}</p>
      <div class="tag-list">
        ${post.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
      </div>

      <section class="article-section">
        ${post.body.map(renderPostBlock).join("")}
      </section>

      <div class="actions">
        <a class="button secondary" href="/blog.html">Back to blog</a>
      </div>
    </article>
  `;
}

function renderContact() {
  const container = document.querySelector("[data-contact-card]");
  if (!container) return;

  container.innerHTML = `
    <section class="card">
      <h3>Connect</h3>
      <p>Update these links in <code>assets/config.js</code>.</p>
      <p><strong>Email:</strong> <a href="mailto:${SITE_CONFIG.email}">${SITE_CONFIG.email}</a></p>
      <p><strong>GitHub:</strong> <a href="${SITE_CONFIG.githubUrl}" target="_blank" rel="noopener">${SITE_CONFIG.githubUrl}</a></p>
      <p><strong>LinkedIn:</strong> <a href="${SITE_CONFIG.linkedinUrl}" target="_blank" rel="noopener">${SITE_CONFIG.linkedinUrl}</a></p>
    </section>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  renderHome();
  renderDashboardList();
  renderBlogList();
  renderDashboardDetail();
  renderPostDetail();
  renderContact();
});
