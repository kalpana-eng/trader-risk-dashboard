import Header from "../components/Header/Header";
import OverviewCard from "../components/OverviewCard/OverViewCard";

import { useDashboardData } from "../hooks/useDashboardData";

function Dashboard() {
  const data = useDashboardData();

  return (
    <main className="min-h-screen bg-[#0B1120] text-white">
      <div className="mx-auto max-w-7xl px-6 py-8">

        <Header />

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

          <OverviewCard
            title="Current Balance"
            value={`$${data.currentBalance.toLocaleString()}`}
            subtitle="Live account equity"
            positive
          />

          <OverviewCard
            title="Total P&L"
            value={`$${data.totalPnL}`}
            subtitle="Across all trades"
            positive={data.totalPnL > 0}
          />

          <OverviewCard
            title="Win Rate"
            value={`${data.winRate}%`}
            subtitle="Winning trades"
          />

          <OverviewCard
            title="Risk Status"
            value={data.riskStatus}
            subtitle="Current account health"
            positive={data.riskStatus === "Safe"}
          />

        </div>

      </div>
    </main>
  );
}

export default Dashboard;