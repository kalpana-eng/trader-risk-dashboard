import { trades } from "../data/mockData";

export function exportCSV() {
  const headers = [
    "Asset",
    "Symbol",
    "Direction",
    "Quantity",
    "Price",
    "PnL",
  ];

  const rows = trades.map((trade) => [
    trade.asset,
    trade.symbol,
    trade.direction,
    trade.quantity,
    trade.price,
    trade.pnl,
  ]);

  const csv = [
    headers.join(","),
    ...rows.map((row) => row.join(",")),
  ].join("\n");

  const blob = new Blob([csv], {
    type: "text/csv",
  });

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");

  a.href = url;
  a.download = "trade-report.csv";

  a.click();

  URL.revokeObjectURL(url);
}