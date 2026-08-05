import { useState } from "react";
import { account, trades } from "../../data/mockData";
import type { Trade } from "../../types/trade";

import {
  calculateCurrentBalance,
  calculateRiskScore,
  calculateRiskStatus,
} from "../../utils";

import {
  TrendingUp,
  TrendingDown,
  ShieldCheck,
  ShieldAlert,
  ShieldX,
} from "lucide-react";

function ScenarioSimulator() {
  const [amount, setAmount] = useState(500);

  const simulatedTrades: Trade[] = [
    ...trades,
    {
      id: "simulation",
      asset: "Simulation",
      symbol: "SIM",
      quantity: 1,
      price: 0,
      timestamp: new Date(),
      pnl: amount,
      direction: amount >= 0 ? "Long" : "Short",
    },
  ];

  const balance = calculateCurrentBalance(
    account.startingBalance,
    simulatedTrades
  );

  const riskScore = calculateRiskScore(
    account,
    simulatedTrades
  );

  const riskStatus = calculateRiskStatus(
    account,
    simulatedTrades
  );

  const statusColor =
    riskStatus === "Safe"
      ? "text-green-500"
      : riskStatus === "Approaching Limit"
      ? "text-yellow-500"
      : "text-red-500";

  const progressColor =
    riskScore >= 70
      ? "bg-green-500"
      : riskScore >= 40
      ? "bg-yellow-500"
      : "bg-red-500";

  const StatusIcon =
    riskStatus === "Safe"
      ? ShieldCheck
      : riskStatus === "Approaching Limit"
      ? ShieldAlert
      : ShieldX;

  return (
    <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition-all dark:border-slate-700 dark:bg-slate-900">

      {/* Header */}

      <div className="mb-8 flex items-center justify-between">

        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Scenario Simulator
          </h2>

          <p className="text-slate-500 dark:text-slate-400">
            Simulate your next trade before taking it.
          </p>
        </div>

        <div
          className={`flex items-center gap-2 rounded-full border px-4 py-2 font-semibold ${statusColor}`}
        >
          <StatusIcon size={18} />
          {riskStatus}
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">

        {/* LEFT */}

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800">

          <label className="mb-4 block text-sm font-medium text-slate-500 dark:text-slate-400">
            Simulated Trade P&L
          </label>

          <input
            type="range"
            min={-2000}
            max={2000}
            step={100}
            value={amount}
            onChange={(e) =>
              setAmount(Number(e.target.value))
            }
            className="w-full accent-blue-500"
          />

          <div
            className={`mt-8 text-center text-5xl font-bold ${
              amount >= 0
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {amount >= 0 ? "+" : ""}
            ${amount.toLocaleString()}
          </div>

          <p className="mt-3 text-center text-sm text-slate-500 dark:text-slate-400">
            Estimated profit / loss
          </p>
        </div>

        {/* RIGHT */}

        <div className="space-y-5">

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800">

            <div className="flex items-center gap-3">

              <TrendingUp className="text-green-500" />

              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Projected Balance
                </p>

                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                  ${balance.toLocaleString()}
                </h3>
              </div>

            </div>

          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800">

            <div className="flex items-center gap-3">

              <TrendingDown className={statusColor} />

              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Risk Score
                </p>

                <h3 className={`text-3xl font-bold ${statusColor}`}>
                  {riskScore}%
                </h3>
              </div>

            </div>

            <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-300 dark:bg-slate-700">

              <div
                className={`${progressColor} h-full rounded-full transition-all duration-700`}
                style={{
                  width: `${riskScore}%`,
                }}
              />

            </div>

          </div>

          <div
            className={`rounded-xl border p-5 ${
              riskStatus === "Safe"
                ? "border-green-300 bg-green-50 dark:border-green-600/40 dark:bg-green-900/20"
                : riskStatus === "Approaching Limit"
                ? "border-yellow-300 bg-yellow-50 dark:border-yellow-600/40 dark:bg-yellow-900/20"
                : "border-red-300 bg-red-50 dark:border-red-600/40 dark:bg-red-900/20"
            }`}
          >

            <h3 className={`mb-2 font-semibold ${statusColor}`}>
              Recommendation
            </h3>

            <p className="leading-7 text-slate-600 dark:text-slate-300">

              {riskStatus === "Safe" &&
                "Your projected trade keeps the account comfortably within risk limits. You can continue trading while maintaining disciplined position sizing."}

              {riskStatus === "Approaching Limit" &&
                "This trade moves your account closer to the allowed drawdown. Consider reducing position size or waiting for a higher probability setup."}

              {riskStatus === "At Risk" &&
                "Executing this trade may violate funded account rules. Avoid opening additional positions until account risk improves."}

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ScenarioSimulator;