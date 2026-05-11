const post = {
  slug: "capacity-planning-dashboard",
  title: "Capacity Planning Dashboard: demand to bottlenecks",
  date: "2026-05-10",
  category: "Factory physics",
  summary:
    "A practical walk-through of a capacity planning model that converts demand, routings, process times, and OEE into bottleneck decisions.",
  tags: ["capacity", "OEE", "Streamlit", "factory physics"],
  body: [
    { type: "heading", text: "Business question" },
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
        "Example PNG embedded in a blog post. Store PNG files in assets/images and reference them from the post file."
    },
    { type: "heading", text: "Model logic" },
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
};

export default post;
