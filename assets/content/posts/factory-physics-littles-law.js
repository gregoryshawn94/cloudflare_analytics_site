const post = {
  slug: "factory-physics-littles-law",
  title: "Factory physics: using Little’s Law without overcomplicating it",
  date: "2026-05-11",
  category: "Factory physics",
  summary:
    "A short explanation of how WIP, throughput, and cycle time connect, and why the relationship is useful for production dashboards.",
  tags: ["Little's Law", "WIP", "cycle time", "throughput"],
  body: [
    { type: "heading", text: "The core relationship" },
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
    { type: "heading", text: "Dashboard use case" },
    {
      type: "paragraph",
      text:
        "A useful dashboard can show WIP, throughput, and implied cycle time by product, work center, or factory area. When implied cycle time drifts from actual cycle time, it often points to queueing, batching, rework, data quality issues, or a change in product mix."
    }
  ]
};

export default post;
