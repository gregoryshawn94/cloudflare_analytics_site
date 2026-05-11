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

/*
  Add dashboards here.

  Pattern:
  - slug controls the URL: dashboard.html?slug=your-slug
  - streamlitUrl is the normal app URL without ?embed=true
  - layout.js automatically adds ?embed=true for embedded views
*/
const DASHBOARDS = [
  {
    slug: "sag-test-1",
    title: "SAG Test Dashboard",
    subtitle: "Interactive Streamlit analytics demo",
    category: "Python analytics",
    status: "Live",
    streamlitUrl: "https://sag-test1.streamlit.app",
    summary:
      "A live Streamlit analytics dashboard embedded into the website. This demo can be renamed and repositioned once the final business use case is defined.",
    inputs: [
      "Interactive user selections",
      "Dashboard data",
      "Filter assumptions"
    ],
    outputs: [
      "Interactive charts",
      "Calculated metrics",
      "Exploratory analytics views"
    ],
    tags: ["Streamlit", "Python", "analytics", "demo"],
    featured: true
  },
  {
    slug: "basic-capacity-model",
    title: "Basic Capacity Model",
    subtitle: "Demand, routing, workload, capacity, and utilization",
    category: "Factory physics",
    status: "Live",
    streamlitUrl: "https://basic-capacity-model.streamlit.app",
    summary:
      "A live capacity planning dashboard that translates demand and operating assumptions into workload, available capacity, utilization, bottleneck flags, and capacity gaps.",
    inputs: [
      "Demand",
      "Routing",
      "Process time",
      "Tool count",
      "Available hours",
      "OEE assumptions"
    ],
    outputs: [
      "Required load",
      "Available capacity",
      "Utilization",
      "Capacity gap",
      "Bottleneck status"
    ],
    tags: ["capacity", "OEE", "manufacturing", "Streamlit", "factory physics"],
    featured: false
  },
  {
    slug: "oee-throughput",
    title: "OEE and Throughput Dashboard",
    subtitle: "Availability, performance, quality, and throughput trends",
    category: "Manufacturing performance",
    status: "Planned",
    streamlitUrl: "",
    summary:
      "A planned dashboard for OEE decomposition, throughput by equipment group, downtime waterfalls, and operating trends.",
    inputs: ["Equipment state", "Output", "Downtime", "Quality loss", "Calendar"],
    outputs: ["OEE", "Throughput", "Availability", "Loss waterfall", "Trend alerts"],
    tags: ["OEE", "throughput", "downtime", "manufacturing"],
    featured: false
  },
  {
    slug: "materials-screening",
    title: "Materials Screening Dashboard",
    subtitle: "Composition, processing, properties, and ranking",
    category: "Materials science",
    status: "Planned",
    streamlitUrl: "",
    summary:
      "A planned dashboard for comparing materials, processing conditions, and property tradeoffs across experiments.",
    inputs: ["Composition", "Processing", "Property data", "Test conditions"],
    outputs: ["Rankings", "Tradeoff plots", "Screening map", "Candidate shortlist"],
    tags: ["materials", "DOE", "screening", "polymers"],
    featured: false
  }
];

/*
  Add blog posts here.

  Supported body block types:
  - heading
  - paragraph
  - image
  - code
  - list
  - callout
*/
const BLOG_POSTS = [
  {
    slug: "capacity-planning-dashboard",
    title: "Capacity Planning Dashboard: demand to bottlenecks",
    date: "2026-05-10",
    category: "Factory physics",
    summary:
      "A practical walk-through of a capacity planning model that converts demand, routings, process times, and OEE into bottleneck decisions.",
    tags: ["capacity", "OEE", "Streamlit", "factory physics"],
    body: [
      {
        type: "heading",
        text: "Business question"
      },
      {
        type: "paragraph",
        text:
          "Can the current work-center capacity support the planned weekly product mix? That is the central question behind the capacity planning dashboard."
      },
      {
        type: "paragraph",
        text:
          "The model is intentionally simple: demand creates routed workload, workload consumes available capacity, and utilization reveals where the system is constrained."
      },
      {
        type: "image",
        src: "/assets/images/capacity-utilization-example.png",
        alt: "Example capacity utilization chart",
        caption:
          "Example PNG embedded in a blog post. Store PNG files in assets/images and reference them from config.js."
      },
      {
        type: "heading",
        text: "Model logic"
      },
      {
        type: "code",
        language: "python",
        code: `required_load_hours = weekly_demand_units * process_time_min_per_unit / 60

available_capacity_hours = (
    tool_count * hours_per_tool_per_week * target_oee
)

utilization = required_load_hours / available_capacity_hours

capacity_gap_hours = available_capacity_hours - required_load_hours`
      },
      {
        type: "callout",
        text:
          "A simple capacity model is often enough to start a useful operating conversation before building a full discrete-event simulation or optimization model."
      },
      {
        type: "list",
        items: [
          "Separate demand problems from capacity problems.",
          "Identify bottleneck work centers.",
          "Stress-test demand, OEE, and tool-count assumptions.",
          "Create a starting point for more advanced simulation or optimization."
        ]
      }
    ]
  },
  {
    slug: "factory-physics-littles-law",
    title: "Factory physics: using Little’s Law without overcomplicating it",
    date: "2026-05-11",
    category: "Factory physics",
    summary:
      "A short explanation of how WIP, throughput, and cycle time connect, and why the relationship is useful for production dashboards.",
    tags: ["Little's Law", "WIP", "cycle time", "throughput"],
    body: [
      {
        type: "heading",
        text: "The core relationship"
      },
      {
        type: "paragraph",
        text:
          "Little’s Law connects work in process, throughput, and cycle time. In factory analytics, it gives a quick sanity check for whether measured WIP and throughput are consistent with observed cycle time."
      },
      {
        type: "code",
        language: "python",
        code: `wip = 210
throughput_per_week = 35

cycle_time_weeks = wip / throughput_per_week

print(cycle_time_weeks)`
      },
      {
        type: "image",
        src: "/assets/images/littles-law-example.png",
        alt: "Example Little's Law trend",
        caption:
          "An example trend of implied cycle time calculated from WIP divided by throughput."
      },
      {
        type: "heading",
        text: "Dashboard use case"
      },
      {
        type: "paragraph",
        text:
          "A useful dashboard can show WIP, throughput, and implied cycle time by product, work center, or factory area. When implied cycle time drifts from actual cycle time, it often points to queueing, batching, rework, data quality issues, or a change in product mix."
      }
    ]
  },
  {
    slug: "materials-data-screening",
    title: "Materials data screening: turning experiments into decisions",
    date: "2026-05-12",
    category: "Materials science",
    summary:
      "How to structure experimental materials data so Python can help rank candidates, visualize tradeoffs, and identify promising process windows.",
    tags: ["materials science", "screening", "DOE", "Python"],
    body: [
      {
        type: "heading",
        text: "From experiment table to decision table"
      },
      {
        type: "paragraph",
        text:
          "Materials datasets often combine composition, processing conditions, test methods, and measured properties. The first analytics challenge is not modeling; it is making the table decision-ready."
      },
      {
        type: "code",
        language: "python",
        code: `import pandas as pd

df = pd.DataFrame({
    "material": ["A", "B", "C"],
    "processing_temp_c": [120, 140, 160],
    "conductivity_s_cm": [1.2, 3.4, 2.1],
    "stability_hours": [80, 55, 120],
})

df["screening_score"] = (
    0.6 * df["conductivity_s_cm"].rank(pct=True)
    + 0.4 * df["stability_hours"].rank(pct=True)
)

df.sort_values("screening_score", ascending=False)`
      },
      {
        type: "image",
        src: "/assets/images/materials-screening-example.png",
        alt: "Example materials screening scatter plot",
        caption:
          "Example PNG showing a materials screening relationship between processing severity and measured property."
      },
      {
        type: "callout",
        text:
          "Most materials problems are multi-objective. A useful dashboard should show tradeoffs rather than only a single score."
      }
    ]
  },
  {
    slug: "supply-chain-risk-scoring",
    title: "Supply chain risk scoring with imperfect data",
    date: "2026-05-13",
    category: "Supply chain",
    summary:
      "A practical approach to ranking part risk when you know receipts and consumption but do not have reliable lead-time data.",
    tags: ["supply chain", "inventory", "risk scoring", "pandas"],
    body: [
      {
        type: "heading",
        text: "The common problem"
      },
      {
        type: "paragraph",
        text:
          "Many teams do not have clean lead-time data, but they do have receipts, consumption, and monthly inventory snapshots."
      },
      {
        type: "paragraph",
        text:
          "That is enough to build useful risk indicators: consumption volatility, receipt gaps, inventory drawdown, recovery signals, and months of coverage."
      },
      {
        type: "code",
        language: "python",
        code: `df["coverage_months"] = df["eom_inventory"] / df["avg_monthly_consumption"]

df["inventory_drawdown"] = (
    df.groupby("part")["eom_inventory"]
      .diff()
      .fillna(0)
)

df["risk_score"] = (
    2.0 * (df["coverage_months"] < 2).astype(int)
    + 1.0 * (df["inventory_drawdown"] < 0).astype(int)
    + 1.0 * (df["receipt_gap_months"] >= 2).astype(int)
)

df.sort_values("risk_score", ascending=False)`
      }
    ]
  }
];
