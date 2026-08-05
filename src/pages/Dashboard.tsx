import { useEffect, useState } from "react";

import Header from "../components/Header/Header";
import OverviewCards from "../components/OverviewCards/OverviewCards";
import AccountOverview from "../components/AccountOverview/AccountOverview";
import RiskMonitor from "../components/RiskMonitor/RiskMonitor";
import EquityChart from "../analytics/EquityChart";
import PerformanceChart from "../analytics/PerformanceChart";
import ScenarioSimulator from "../components/ScenerioSimulator/ScenarioSimulator";
import TradingPerformance from "../components/TradingPerformance/TradingPerformance";
import TradeTable from "../components/TradeTable/TradeTable";
import ExportButton from "../components/ExportButtons/ExportButtons";
import AnimatedSection from "../components/AnimatedSection/AnimatedSection";
import LoadingSkeleton from "../components/LoadingSkeleton/LoadingSkeleton";

function Dashboard() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Show Skeleton
  if (isLoading) {
    return (
      <main className="min-h-screen bg-slate-100 text-slate-900 dark:bg-[#0B1120] dark:text-white">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <LoadingSkeleton />
        </div>
      </main>
    );
  }

  // Actual Dashboard
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900 dark:bg-[#0B1120] dark:text-white">

      <div className="mx-auto max-w-7xl space-y-10 px-6 py-8">

        <AnimatedSection>
          <Header />
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <ExportButton />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <OverviewCards />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <AccountOverview />
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <RiskMonitor />
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <EquityChart />
        </AnimatedSection>

        <AnimatedSection delay={0.5}>
          <PerformanceChart />
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          <ScenarioSimulator />
        </AnimatedSection>

        <AnimatedSection delay={0.7}>
          <TradingPerformance />
        </AnimatedSection>

        <AnimatedSection delay={0.8}>
          <TradeTable />
        </AnimatedSection>

      </div>

    </main>
  );
}

export default Dashboard;