const post = {
  slug: "garden-analytics",
  title: "Garden analytics: tracking yield, timing, and lessons learned",
  date: "2026-05-14",
  category: "Gardening",
  summary:
    "How a simple garden dataset can help compare crops, planting dates, harvest timing, and seasonal performance.",
  tags: ["gardening", "yield", "seasonality", "tracking"],
  body: [
    { type: "heading", text: "Why track the garden?" },
    {
      type: "paragraph",
      text:
        "Gardening is full of small decisions: when to start seeds, when to transplant, how many plants to grow, and which varieties are worth repeating."
    },
    {
      type: "paragraph",
      text:
        "A lightweight dataset can turn subjective memory into a simple seasonal learning system."
    },
    {
      type: "list",
      items: [
        "Crop and variety",
        "Seed-start date",
        "Transplant date",
        "First harvest date",
        "Total yield",
        "Pest pressure",
        "Weather notes",
        "Subjective quality rating"
      ]
    }
  ]
};

export default post;
