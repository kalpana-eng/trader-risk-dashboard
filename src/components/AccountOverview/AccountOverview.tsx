import OverviewCard from "../OverviewCard/OverViewCard";
import { useDashboardData } from "../../hooks/useDashboardData";

function AccountOverview() {
  const data = useDashboardData();

  return (
    <section className="space-y-6">

      <div>
        <h2 className="text-2xl font-bold text-white">
          Account Overview
        </h2>

        <p className="mt-1 text-slate-400">
          Get a quick summary of your account health and performance.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

        <OverviewCard
          title="Current Balance"
          value={`$${data.currentBalance.toLocaleString()}`}
          subtitle="Live Account Equity"
          positive
        />

        <OverviewCard
          title="Total P&L"
          value={`+$${data.totalPnL.toLocaleString()}`}
          subtitle="Across All Trades"
          positive={data.totalPnL > 0}
        />

        <OverviewCard
          title="Win Rate"
          value={`${data.winRate}%`}
          subtitle={`${data.winningTrades} Winning Trades`}
          positive
        />

        <OverviewCard
          title="Risk Status"
          value={data.riskStatus}
          subtitle="Current Account Health"
          positive={data.riskStatus === "Safe"}
        />

      </div>

    </section>
  );
}

export default AccountOverview;