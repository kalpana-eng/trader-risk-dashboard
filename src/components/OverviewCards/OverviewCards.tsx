import OverviewCard from "../OverviewCard/OverViewCard";
import { useDashboardData } from "../../hooks/useDashboardData";

function OverviewCards() {
  const data = useDashboardData();

  const cards = [
    {
      title: "Current Balance",
      value: `$${data.currentBalance.toLocaleString()}`,
      subtitle: "Live Account Equity",
      positive: true,
    },
    {
      title: "Total P&L",
      value: `${data.totalPnL >= 0 ? "+" : ""}$${data.totalPnL.toLocaleString()}`,
      subtitle: "Across All Trades",
      positive: data.totalPnL >= 0,
    },
    {
      title: "Win Rate",
      value: `${data.winRate}%`,
      subtitle: `${data.winningTrades} Winning Trades`,
    },
    {
      title: "Risk Status",
      value: data.riskStatus,
      subtitle: "Current Account Health",
      positive: data.riskStatus === "Safe",
    },
  ];

  return (
    <section className="mt-8">

      <div className="mb-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          Account Status
        </h2>

        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Monitor your account health and trading performance.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <OverviewCard
            key={card.title}
            title={card.title}
            value={card.value}
            subtitle={card.subtitle}
            positive={card.positive}
          />
        ))}
      </div>

    </section>
  );
}

export default OverviewCards;