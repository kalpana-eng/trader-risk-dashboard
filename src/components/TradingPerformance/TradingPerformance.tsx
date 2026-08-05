import {
  TrendingUp,
  TrendingDown,
  Trophy,
  CircleX,
} from "lucide-react";

import { useDashboardData } from "../../hooks/useDashboardData";

function TradingPerformance() {
  const data = useDashboardData();

  return (
    <section className="mt-8 rounded-2xl border border-slate-700 bg-slate-900 p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">
          Trading Performance
        </h2>

        <p className="text-slate-400">
          Key statistics from all completed trades.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

        {/* Winning Trades */}
        <div className="rounded-xl bg-slate-800 p-5">
          <TrendingUp className="mb-3 text-green-400" />
          <p className="text-slate-400">Winning Trades</p>

          <h3 className="mt-2 text-3xl font-bold">
            {data.winningTrades}
          </h3>
        </div>

        {/* Losing Trades */}
        <div className="rounded-xl bg-slate-800 p-5">
          <TrendingDown className="mb-3 text-red-400" />
          <p className="text-slate-400">Losing Trades</p>

          <h3 className="mt-2 text-3xl font-bold">
            {data.losingTrades}
          </h3>
        </div>

        {/* Largest Winner */}
        <div className="rounded-xl bg-slate-800 p-5">
          <Trophy className="mb-3 text-green-400" />

          <p className="text-slate-400">
            Largest Winner
          </p>

          <h3 className="mt-2 text-2xl font-bold text-green-400">
            ${data.largestWinner?.pnl ?? 0}
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            {data.largestWinner?.asset} {data.largestWinner?.direction}
          </p>
        </div>

        {/* Largest Loser */}
        <div className="rounded-xl bg-slate-800 p-5">
          <CircleX className="mb-3 text-red-400" />

          <p className="text-slate-400">
            Largest Loser
          </p>

          <h3 className="mt-2 text-2xl font-bold text-red-400">
            ${data.largestLoser?.pnl ?? 0}
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            {data.largestLoser?.asset} {data.largestLoser?.direction}
          </p>
        </div>

        {/* Average Winner */}
        <div className="rounded-xl bg-slate-800 p-5">
          <p className="text-slate-400">
            Average Winning Trade
          </p>

          <h3 className="mt-2 text-3xl font-bold text-green-400">
            ${data.averageWinningTrade}
          </h3>
        </div>

        {/* Average Loser */}
        <div className="rounded-xl bg-slate-800 p-5">
          <p className="text-slate-400">
            Average Losing Trade
          </p>

          <h3 className="mt-2 text-3xl font-bold text-red-400">
            ${data.averageLosingTrade}
          </h3>
        </div>

      </div>
    </section>
  );
}

export default TradingPerformance;