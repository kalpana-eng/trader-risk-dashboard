import {
  ShieldCheck,
  ShieldAlert,
  ShieldX,
} from "lucide-react";

import { useDashboardData } from "../../hooks/useDashboardData";
import RiskProgress from "./RiskProgress";

function RiskMonitor() {
  const data = useDashboardData();

  const getStatusColor = () => {
    switch (data.riskStatus) {
      case "Safe":
        return "text-green-500";

      case "Approaching Limit":
        return "text-yellow-500";

      case "At Risk":
        return "text-red-500";

      default:
        return "text-slate-500";
    }
  };

  const getStatusBg = () => {
    switch (data.riskStatus) {
      case "Safe":
        return "bg-green-100 dark:bg-green-500/15";

      case "Approaching Limit":
        return "bg-yellow-100 dark:bg-yellow-500/15";

      case "At Risk":
        return "bg-red-100 dark:bg-red-500/15";

      default:
        return "bg-slate-200 dark:bg-slate-700";
    }
  };

  const getStatusIcon = () => {
    switch (data.riskStatus) {
      case "Safe":
        return <ShieldCheck size={22} />;

      case "Approaching Limit":
        return <ShieldAlert size={22} />;

      case "At Risk":
        return <ShieldX size={22} />;

      default:
        return null;
    }
  };

  return (
    <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all dark:border-slate-700 dark:bg-slate-900">

      {/* Header */}

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Risk Monitor
          </h2>

          <p className="text-slate-500 dark:text-slate-400">
            Stay within your funded account rules.
          </p>

        </div>

        <div
          className={`flex items-center gap-2 rounded-full px-4 py-2 font-semibold ${getStatusBg()} ${getStatusColor()}`}
        >
          {getStatusIcon()}
          {data.riskStatus}
        </div>

      </div>

      {/* Risk Bars */}

      <div className="space-y-6">

        <RiskProgress
          title="Maximum Drawdown"
          used={data.currentDrawdown}
          limit={10000}
          color="bg-red-500"
        />

        <RiskProgress
          title="Daily Loss Limit"
          used={data.currentDayLoss}
          limit={5000}
          color="bg-yellow-500"
        />

      </div>

      {/* Health Score */}

      <div className="mt-10">

        <div className="mb-3 flex items-center justify-between">

          <h3 className="font-semibold text-slate-800 dark:text-white">
            Account Health
          </h3>

          <span
            className={`text-2xl font-bold ${getStatusColor()}`}
          >
            {data.riskScore}%
          </span>

        </div>

        <div className="h-4 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">

          <div
            className={`h-full rounded-full transition-all duration-700 ${
              data.riskScore >= 70
                ? "bg-green-500"
                : data.riskScore >= 40
                ? "bg-yellow-500"
                : "bg-red-500"
            }`}
            style={{
              width: `${data.riskScore}%`,
            }}
          />

        </div>

      </div>

      {/* Summary Cards */}

      <div className="mt-10 grid gap-5 md:grid-cols-2">

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800">

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Remaining Drawdown
          </p>

          <h3 className="mt-2 text-3xl font-bold text-green-500">
            ${data.remainingDrawdown.toLocaleString()}
          </h3>

        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800">

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Remaining Daily Loss
          </p>

          <h3 className="mt-2 text-3xl font-bold text-blue-500">
            ${data.remainingDailyLoss.toLocaleString()}
          </h3>

        </div>

      </div>

      {/* Recommendation */}

      <div
        className={`mt-10 rounded-xl border p-5 ${
          data.riskStatus === "Safe"
            ? "border-green-300 bg-green-50 dark:border-green-500/30 dark:bg-green-500/10"
            : data.riskStatus === "Approaching Limit"
            ? "border-yellow-300 bg-yellow-50 dark:border-yellow-500/30 dark:bg-yellow-500/10"
            : "border-red-300 bg-red-50 dark:border-red-500/30 dark:bg-red-500/10"
        }`}
      >

        <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
          Recommendation
        </h3>

        {data.riskStatus === "Safe" && (
          <p className="leading-7 text-slate-600 dark:text-slate-300">
            Your account is healthy and operating well within the funded
            trading rules. Continue following disciplined risk management and
            avoid unnecessary over-leveraging.
          </p>
        )}

        {data.riskStatus === "Approaching Limit" && (
          <p className="leading-7 text-slate-600 dark:text-slate-300">
            Your account is approaching the maximum allowed drawdown. Reduce
            position size, avoid revenge trading, and focus on protecting
            capital until your account recovers.
          </p>
        )}

        {data.riskStatus === "At Risk" && (
          <p className="leading-7 text-slate-600 dark:text-slate-300">
            Your account is very close to violating the funded account rules.
            Stop opening new positions, minimize exposure, and prioritize
            capital preservation.
          </p>
        )}

      </div>

    </section>
  );
}

export default RiskMonitor;