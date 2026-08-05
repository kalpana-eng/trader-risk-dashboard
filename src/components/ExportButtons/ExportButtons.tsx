import { Download, FileText } from "lucide-react";
import { exportCSV } from "../../utils/exportCSV";
import { exportPDF } from "../../utils/exportPDF";

function ExportButtons() {
  return (
    <section className="flex flex-wrap justify-end gap-4">

      <button
        onClick={exportCSV}
        className="flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-medium text-white transition hover:bg-emerald-700"
      >
        <Download size={18} />
        Export CSV
      </button>

      <button
        onClick={exportPDF}
        className="flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 font-medium text-white transition hover:bg-red-700"
      >
        <FileText size={18} />
        Export PDF
      </button>

    </section>
  );
}

export default ExportButtons;