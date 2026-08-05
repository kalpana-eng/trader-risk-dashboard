import { Wallet, DollarSign, ShieldAlert, AlertTriangle } from "lucide-react";
import { account } from "../../data/mockData";
import { useDashboardData } from "../../hooks/useDashboardData";

export default function AccountOverview() {
  const data = useDashboardData();

  const cards = [
    {
      title: "Starting Balance",
      value: `$${account.startingBalance.toLocaleString()}`,
      icon: Wallet,
      color: "text-blue-400",
    },
    {
      title: "Current Balance",
      value: `$${data.currentBalance.toLocaleString()}`,
      icon: DollarSign,
      color: "text-green-400",
    },
    {
      title: "Maximum Drawdown",
      value: `$${account.maximumDrawdown.toLocaleString()}`,
      icon: ShieldAlert,
      color: "text-orange-400",
    },
    {
      title: "Daily Loss Limit",
      value: `$${account.dailyLossLimit.toLocaleString()}`,
      icon: AlertTriangle,
      color: "text-red-400",
    },
  ];

  return (
    <section className="mt-12">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white">
          Account Overview
        </h2>

        <p className="text-gray-400">
          Account rules and current account status.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-lg transition-all duration-300 hover:border-indigo-500 hover:shadow-indigo-500/20"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">
                  {card.title}
                </span>

                <Icon className={`h-6 w-6 ${card.color}`} />
              </div>

              <h3 className="mt-5 text-3xl font-bold text-white">
                {card.value}
              </h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}