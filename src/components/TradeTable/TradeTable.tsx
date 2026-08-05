import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { trades } from "../../data/mockData";

function TradeTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Latest");

  const assets = [
    "All",
    ...new Set(trades.map((trade) => trade.asset)),
  ];

  const filteredTrades = useMemo(() => {
    let data = [...trades];

    // Search
    if (searchTerm.trim()) {
      data = data.filter(
        (trade) =>
          trade.asset
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          trade.symbol
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
      );
    }

    // Filter
    if (filter !== "All") {
      data = data.filter((trade) => trade.asset === filter);
    }

    // Sort
    switch (sortBy) {
      case "Highest Profit":
        data.sort((a, b) => b.pnl - a.pnl);
        break;

      case "Highest Loss":
        data.sort((a, b) => a.pnl - b.pnl);
        break;

      default:
        break;
    }

    return data;
  }, [searchTerm, filter, sortBy]);

  return (
    <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition-colors dark:border-slate-700 dark:bg-slate-900">

      {/* Header */}

      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Trade History
          </h2>

          <p className="text-slate-500 dark:text-slate-400">
            Complete history of executed trades.
          </p>

        </div>

        <div className="rounded-xl bg-green-100 px-4 py-2 text-sm font-semibold text-green-700 dark:bg-green-500/20 dark:text-green-400">
          {filteredTrades.length} Trades
        </div>

      </div>

      {/* Toolbar */}

      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        {/* Search */}

        <div className="relative w-full lg:w-80">

          <Search
            size={18}
            className="absolute left-3 top-3 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search asset..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-xl border border-slate-300 bg-white py-2 pl-10 pr-4 text-slate-900 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />

        </div>

        <div className="flex flex-wrap gap-3">

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          >
            {assets.map((asset) => (
              <option key={asset}>{asset}</option>
            ))}
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          >
            <option>Latest</option>
            <option>Highest Profit</option>
            <option>Highest Loss</option>
          </select>

        </div>

      </div>

      {/* Table */}

      <div className="overflow-x-auto rounded-xl">

        <table className="w-full">

          <thead>

            <tr className="border-b border-slate-200 text-left text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400">

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
                  className="py-12 text-center text-slate-500 dark:text-slate-400"
                >
                  No trades found.
                </td>

              </tr>

            ) : (

              filteredTrades.map((trade) => (

                <tr
                  key={trade.id}
                  className="border-b border-slate-100 transition hover:bg-slate-100 dark:border-slate-800 dark:hover:bg-slate-800/60"
                >

                  <td className="py-5">

                    <div className="font-semibold text-slate-900 dark:text-white">
                      {trade.asset}
                    </div>

                    <div className="text-xs text-slate-500">
                      {trade.symbol}
                    </div>

                  </td>

                  <td>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        trade.direction === "Long"
                          ? "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400"
                          : "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400"
                      }`}
                    >
                      {trade.direction}
                    </span>

                  </td>

                  <td className="text-slate-700 dark:text-slate-300">
                    {trade.quantity}
                  </td>

                  <td className="text-slate-700 dark:text-slate-300">
                    ${trade.price.toLocaleString()}
                  </td>

                  <td>

                    <span
                      className={`rounded-lg px-3 py-2 text-sm font-bold ${
                        trade.pnl >= 0
                          ? "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400"
                          : "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400"
                      }`}
                    >
                      {trade.pnl >= 0 ? "+" : "-"}$
                      {Math.abs(trade.pnl).toLocaleString()}
                    </span>

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