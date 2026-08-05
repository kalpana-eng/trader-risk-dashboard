import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { trades } from "../data/mockData";

export function exportPDF() {
  const doc = new jsPDF();

  doc.setFontSize(18);

  doc.text("Trader Risk Dashboard", 14, 20);

  autoTable(doc, {
    startY: 30,

    head: [[
      "Asset",
      "Symbol",
      "Direction",
      "Qty",
      "Price",
      "PnL",
    ]],

    body: trades.map((trade) => [
      trade.asset,
      trade.symbol,
      trade.direction,
      trade.quantity,
      trade.price,
      trade.pnl,
    ]),
  });

  doc.save("TraderReport.pdf");
}