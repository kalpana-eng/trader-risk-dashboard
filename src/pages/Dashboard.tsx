import Header from "../components/Header/Header";
import AccountOverview from "../components/AccountOverview/AccountOverview";
import OverviewCards from "../components/OverviewCards/OverviewCards";
import RisMonitor from "../components/RiskMonitor/RiskMonitor"
import TradingPerformance from "../components/TradingPerformance/TradingPerformance";
import TradeTable from "../components/TradeTable/TradeTable";

function Dashboard() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-white">

      <div className="mx-auto max-w-7xl space-y-10 px-6 py-8">

        <Header />

        <div className="mt-8">
          <OverviewCards />
        </div>

        <div>
          <AccountOverview />
        </div>

        <div className="mt-8">
          <RisMonitor />
        </div>

        <div className="mt-8">
          <TradingPerformance />
        </div>

        <div className="mt-8">
          <TradeTable />
        </div>

      </div>

    </main>
  );
}

export default Dashboard;