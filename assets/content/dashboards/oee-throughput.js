const dashboard = {
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
};

export default dashboard;
