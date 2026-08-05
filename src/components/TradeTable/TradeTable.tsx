import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { trades } from "../../data/mockData";

function TradeTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Latest");

  const filteredTrades = useMemo(() => {
    let data = [...trades];

    // Search
    if (searchTerm.trim() !== "") {
      data = data.filter(
        (trade) =>
          trade.asset.toLowerCase().includes(searchTerm.toLowerCase()) ||
          trade.symbol.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter
    if (filter !== "All") {
      data = data.filter((trade) => trade.asset === filter);
    }

    // Sort
    if (sortBy === "Highest Profit") {
      data.sort((a, b) => b.pnl - a.pnl);
    }

    if (sortBy === "Highest Loss") {
      data.sort((a, b) => a.pnl - b.pnl);
    }

    return data;
  }, [searchTerm, filter, sortBy]);

  return (
    <section className="mt-8 rounded-2xl border border-slate-700 bg-slate-900 p-6">

      {/* Header */}
      <div className="mb-6 flex items-center justify-between">

        <div>
          <h2 className="text-2xl font-bold">
            Trade History
          </h2>

          <p className="text-slate-400">
            Complete list of executed trades.
          </p>
        </div>

        <div className="rounded-lg bg-green-900/30 px-4 py-2 text-green-400">
          Showing {filteredTrades.length} Trades
        </div>

      </div>

      {/* Toolbar */}
      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div className="relative w-full lg:w-80">

          <Search
            size={18}
            className="absolute left-3 top-3 text-slate-500"
          />

          <input
            type="text"
            placeholder="Search Asset..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-lg border border-slate-700 bg-slate-800 py-2 pl-10 pr-3 outline-none"
          />

        </div>

        <div className="flex gap-3">

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="rounded-lg bg-slate-800 px-4 py-2"
          >
            <option>All</option>
            <option>BTC</option>
            <option>ETH</option>
            <option>SOL</option>
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-lg bg-slate-800 px-4 py-2"
          >
            <option>Latest</option>
            <option>Highest Profit</option>
            <option>Highest Loss</option>
          </select>

        </div>

      </div>

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="w-full border-collapse">

          <thead>

            <tr className="border-b border-slate-700 text-left text-slate-400">

              <th className="py-4">Asset</th>
              <th>Direction</th>
              <th>Quantity</th>
              <th>Entry Price</th>
              <th>P&L</th>

            </tr>

          </thead>

          <tbody>

            {filteredTrades.length === 0 ? (

              <tr>

                <td
                  colSpan={5}
                  className="py-10 text-center text-slate-500"
                >
                  No trades found.
                </td>

              </tr>

            ) : (

              filteredTrades.map((trade) => (

                <tr
                  key={trade.id}
                  className="border-b border-slate-800 transition-all duration-300 hover:bg-slate-800 hover:scale-[1.01]"
                >

                  <td className="py-5">

                    <div className="font-semibold">
                      {trade.asset}
                    </div>

                    <div className="text-xs text-slate-500">
                      {trade.symbol}
                    </div>

                  </td>

                  <td>

                    <span
                      className={`rounded-full px-3 py-1 text-sm font-medium ${
                        trade.direction === "Long"
                          ? "bg-green-900 text-green-300"
                          : "bg-red-900 text-red-300"
                      }`}
                    >
                      {trade.direction}
                    </span>

                  </td>

                  <td>{trade.quantity}</td>

                  <td>${trade.price.toLocaleString()}</td>

                  <td
                    className={`font-bold ${
                      trade.pnl >= 0
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {trade.pnl >= 0 ? "🟢 +" : "🔴 -"}$
                    {Math.abs(trade.pnl).toLocaleString()}
                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </section>
  );
}

export default TradeTable;