/*
  Website configuration.

  For most normal updates, edit this file only:
  - site name and tagline
  - navigation menu
  - dashboard library
  - blog post library
  - content pillars
*/

const SITE_CONFIG = {
  name: "Applied Analytics for Impact",
  shortName: "Impact Analytics",
  owner: "Shawn Gregory",
  tagline: "Python analytics for materials, factories, supply chains, finance, and everyday systems.",
  description:
    "Advanced analytics for impact: practical Python dashboards, models, and technical writing across materials science, factory physics, supply chain, gardening, finance, and decision support.",
  githubUrl: "https://github.com/gregoryshawn94",
  linkedinUrl: "#",
  email: "your-email@example.com"
};

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Dashboards", href: "/dashboards.html" },
  { label: "Blog", href: "/blog.html" },
  { label: "About", href: "/about.html" },
  { label: "Contact", href: "/contact.html", cta: true }
];

const CONTENT_PILLARS = [
  {
    title: "Factory physics",
    description:
      "Capacity, utilization, OEE, WIP, cycle time, bottlenecks, dispatching, and production-system behavior.",
    tags: ["OEE", "capacity", "Little's Law", "DES"]
  },
  {
    title: "Supply chain",
    description:
      "Part risk, supplier exposure, lead-time inference, procurement analytics, inventory health, and demand volatility.",
    tags: ["risk", "inventory", "procurement", "forecasting"]
  },
  {
    title: "Materials science",
    description:
      "Data-driven materials screening, structure-property relationships, processing windows, and experiment analytics.",
    tags: ["polymers", "screening", "DOE", "properties"]
  },
  {
    title: "Finance",
    description:
      "Personal finance analytics, portfolio tracking, cash-flow modeling, mortgage math, and scenario planning.",
    tags: ["portfolio", "budget", "cash flow", "scenarios"]
  },
  {
    title: "Gardening",
    description:
      "Small-scale garden planning, planting calendars, yield tracking, weather context, and harvest analytics.",
    tags: ["garden", "yield", "weather", "planning"]
  },
  {
    title: "Python workflows",
    description:
      "Reusable code patterns for pandas, Plotly, Streamlit, optimization, simulation, and analytics products.",
    tags: ["Python", "pandas", "Plotly", "apps"]
  }
];

export { SITE_CONFIG, NAV_ITEMS, CONTENT_PILLARS };
