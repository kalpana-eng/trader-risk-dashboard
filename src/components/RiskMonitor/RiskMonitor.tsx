import { ShieldCheck, ShieldAlert, ShieldX } from "lucide-react";
import { useDashboardData } from "../../hooks/useDashboardData";

function RiskMonitor() {
  const data = useDashboardData();

  const getStatusColor = () => {
    switch (data.riskStatus) {
      case "Safe":
        return "text-green-400";
      case "Approaching Limit":
        return "text-yellow-400";
      case "At Risk":
        return "text-red-400";
      default:
        return "text-white";
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
    <section className="mt-8 rounded-2xl border border-slate-700 bg-slate-900 p-6">

      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Risk Monitor</h2>
          <p className="text-sm text-slate-400">
            Stay within your funded account rules.
          </p>
        </div>

        <div className={`flex items-center gap-2 font-semibold ${getStatusColor()}`}>
          {getStatusIcon()}
          {data.riskStatus}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">

        <div className="rounded-xl bg-slate-800 p-5">
          <p className="text-slate-400">Current Drawdown</p>
          <h3 className="mt-2 text-3xl font-bold">
            ${data.currentDrawdown.toLocaleString()}
          </h3>
        </div>

        <div className="rounded-xl bg-slate-800 p-5">
          <p className="text-slate-400">Remaining Drawdown</p>
          <h3 className="mt-2 text-3xl font-bold text-green-400">
            ${data.remainingDrawdown.toLocaleString()}
          </h3>
        </div>

        <div className="rounded-xl bg-slate-800 p-5">
          <p className="text-slate-400">Today's Loss</p>
          <h3 className="mt-2 text-3xl font-bold text-red-400">
            ${data.currentDayLoss.toLocaleString()}
          </h3>
        </div>

        <div className="rounded-xl bg-slate-800 p-5">
          <p className="text-slate-400">Remaining Daily Loss</p>
          <h3 className="mt-2 text-3xl font-bold text-green-400">
            ${data.remainingDailyLoss.toLocaleString()}
          </h3>
        </div>

      </div>

      <div className="mt-8">

        <div className="mb-2 flex justify-between">
          <span className="text-slate-400">Risk Score</span>
          <span className="font-semibold">
            {data.riskScore}%
          </span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-slate-700">
          <div
            className="h-full rounded-full bg-green-500 transition-all duration-500"
            style={{ width: `${data.riskScore}%` }}
          />
        </div>

      </div>

    </section>
  );
}

export default RiskMonitor;