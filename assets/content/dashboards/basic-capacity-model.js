const dashboard = {
  slug: "basic-capacity-model",
  title: "Basic Capacity Model",
  subtitle: "Demand, routing, workload, capacity, and utilization",
  category: "Factory physics",
  status: "Live",
  streamlitUrl: "https://basic-capacity-model.streamlit.app",
  summary:
    "A live capacity planning dashboard that translates demand and operating assumptions into workload, available capacity, utilization, bottleneck flags, and capacity gaps.",
  inputs: ["Demand", "Routing", "Process time", "Tool count", "Available hours", "OEE assumptions"],
  outputs: ["Required load", "Available capacity", "Utilization", "Capacity gap", "Bottleneck status"],
  tags: ["capacity", "OEE", "manufacturing", "Streamlit", "factory physics"],
  featured: false
};

export default dashboard;
