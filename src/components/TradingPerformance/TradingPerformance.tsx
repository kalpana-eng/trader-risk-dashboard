import {
  TrendingUp,
  TrendingDown,
  Trophy,
  CircleX,
} from "lucide-react";

import { useDashboardData } from "../../hooks/useDashboardData";

function TradingPerformance() {
  const data = useDashboardData();

  const cards = [
    {
      title: "Winning Trades",
      value: data.winningTrades,
      subtitle: "Profitable Positions",
      icon: TrendingUp,
      iconColor: "text-green-500",
      valueColor: "text-green-500",
    },
    {
      title: "Losing Trades",
      value: data.losingTrades,
      subtitle: "Loss Making Positions",
      icon: TrendingDown,
      iconColor: "text-red-500",
      valueColor: "text-red-500",
    },
    {
      title: "Largest Winner",
      value: `$${data.largestWinner?.pnl.toLocaleString() ?? 0}`,
      subtitle: `${data.largestWinner?.asset ?? "-"} • ${
        data.largestWinner?.direction ?? "-"
      }`,
      icon: Trophy,
      iconColor: "text-emerald-500",
      valueColor: "text-emerald-500",
    },
    {
      title: "Largest Loser",
      value: `$${Math.abs(
        data.largestLoser?.pnl ?? 0
      ).toLocaleString()}`,
      subtitle: `${data.largestLoser?.asset ?? "-"} • ${
        data.largestLoser?.direction ?? "-"
      }`,
      icon: CircleX,
      iconColor: "text-rose-500",
      valueColor: "text-rose-500",
    },
    {
      title: "Average Winning Trade",
      value: `$${data.averageWinningTrade.toLocaleString()}`,
      subtitle: "Average Profit",
      icon: TrendingUp,
      iconColor: "text-green-500",
      valueColor: "text-green-500",
    },
    {
      title: "Average Losing Trade",
      value: `$${Math.abs(
        data.averageLosingTrade
      ).toLocaleString()}`,
      subtitle: "Average Loss",
      icon: TrendingDown,
      iconColor: "text-red-500",
      valueColor: "text-red-500",
    },
  ];

  return (
    <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors dark:border-slate-700 dark:bg-slate-900">

      {/* Heading */}

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Trading Performance
        </h2>

        <p className="mt-1 text-slate-500 dark:text-slate-400">
          Key statistics from all completed trades.
        </p>
      </div>

      {/* Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800"
            >
              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {card.title}
                  </p>

                  <h3
                    className={`mt-4 text-3xl font-bold ${card.valueColor}`}
                  >
                    {card.value}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                    {card.subtitle}
                  </p>

                </div>

                <div className="rounded-xl bg-slate-200 p-3 dark:bg-slate-700">

                  <Icon
                    size={26}
                    className={card.iconColor}
                  />

                </div>

              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}

export default TradingPerformance;