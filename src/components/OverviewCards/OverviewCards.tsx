import OverviewCard from "../OverviewCard/OverViewCard";
import { useDashboardData } from "../../hooks/useDashboardData";

export default function OverviewCards() {
  const data = useDashboardData();

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

      <OverviewCard
        title="Current Balance"
        value={`$${data.currentBalance.toLocaleString()}`}
        subtitle="Live Account Equity"
        positive
      />

      <OverviewCard
        title="Total P&L"
        value={`+$${data.totalPnL}`}
        subtitle="Across All Trades"
        positive={data.totalPnL > 0}
      />

      <OverviewCard
        title="Win Rate"
        value={`${data.winRate}%`}
        subtitle={`${data.winningTrades} Winning Trades`}
      />

      <OverviewCard
        title="Risk Status"
        value={data.riskStatus}
        subtitle="Current Account Health"
        positive={data.riskStatus === "Safe"}
      />

    </div>
  );
}