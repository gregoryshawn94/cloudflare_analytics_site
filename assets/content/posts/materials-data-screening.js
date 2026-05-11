const post = {
  slug: "materials-data-screening",
  title: "Materials data screening: turning experiments into decisions",
  date: "2026-05-12",
  category: "Materials science",
  summary:
    "How to structure experimental materials data so Python can help rank candidates, visualize tradeoffs, and identify promising process windows.",
  tags: ["materials science", "screening", "DOE", "Python"],
  body: [
    { type: "heading", text: "From experiment table to decision table" },
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
      alt: "Example materials screening chart",
      caption:
        "Example PNG showing a materials screening comparison. Replace this with your own experiment or model output."
    },
    {
      type: "callout",
      text:
        "Most materials problems are multi-objective. A useful dashboard should show tradeoffs rather than only a single score."
    }
  ]
};

export default post;
