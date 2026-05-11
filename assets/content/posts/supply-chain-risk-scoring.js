const post = {
  slug: "supply-chain-risk-scoring",
  title: "Supply chain risk scoring with imperfect data",
  date: "2026-05-13",
  category: "Supply chain",
  summary:
    "A practical approach to ranking part risk when you know receipts and consumption but do not have reliable lead-time data.",
  tags: ["supply chain", "inventory", "risk scoring", "pandas"],
  body: [
    { type: "heading", text: "The common problem" },
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
};

export default post;
