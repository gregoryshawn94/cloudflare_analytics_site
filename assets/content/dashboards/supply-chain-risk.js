const dashboard = {
  slug: "supply-chain-risk",
  title: "Supply Chain Part-Risk Dashboard",
  subtitle: "Consumption, receipts, recovery, and inventory exposure",
  category: "Supply chain",
  status: "Planned",
  streamlitUrl: "",
  summary:
    "A planned dashboard for identifying at-risk parts using consumption patterns, receipts, volatility, and end-of-month inventory health.",
  inputs: ["Part", "Site", "Month", "Receipts", "Consumption", "Inventory"],
  outputs: ["Risk score", "Coverage", "Recovery signal", "Shortage candidates"],
  tags: ["supply chain", "inventory", "risk", "procurement"],
  featured: false
};

export default dashboard;
