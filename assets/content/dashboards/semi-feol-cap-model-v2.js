const dashboard = {
  slug: "semi-feol-cap-model",
  title: "Semiconductor Front End of Line Capacity Model",
  subtitle: "Demand, routing, workload, capacity, and utilization",
  category: "Factory Physics",
  status: "Live",
  streamlitUrl: "https://semi-feol-cap-model.streamlit.app",
  summary:
    "Capacity model, scenario analysis, optimization, and bottleneck identification for semiconductor front end of line manufacturing.",
  inputs: ["Demand", "Routing", "Process time", "Tool count", "Available hours", "OEE assumptions"],
  outputs: ["Required load", "Available capacity", "Utilization", "Capacity gap", "Bottleneck status"],
  tags: ["capacity", "OEE", "manufacturing", "Streamlit", "factory physics"],
  featured: True
};

export default dashboard;
