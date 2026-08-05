import {
  Wallet,
  DollarSign,
  ShieldAlert,
  AlertTriangle,
} from "lucide-react";

import { account } from "../../data/mockData";
import { useDashboardData } from "../../hooks/useDashboardData";

export default function AccountOverview() {
  const data = useDashboardData();

  const cards = [
    {
      title: "Starting Balance",
      value: `$${account.startingBalance.toLocaleString()}`,
      icon: Wallet,
      color: "text-blue-500",
    },
    {
      title: "Current Balance",
      value: `$${data.currentBalance.toLocaleString()}`,
      icon: DollarSign,
      color: "text-green-500",
    },
    {
      title: "Maximum Drawdown",
      value: `$${account.maximumDrawdown.toLocaleString()}`,
      icon: ShieldAlert,
      color: "text-orange-500",
    },
    {
      title: "Daily Loss Limit",
      value: `$${account.dailyLossLimit.toLocaleString()}`,
      icon: AlertTriangle,
      color: "text-red-500",
    },
  ];

  return (
    <section className="mt-12">

      {/* Heading */}

      <div className="mb-8">

        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          Account Overview
        </h2>

        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Account rules and current funded account information.
        </p>

      </div>

      {/* Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="
                group
                rounded-2xl
                border
                border-slate-200
                dark:border-slate-700
                bg-white
                dark:bg-slate-900
                p-6
                shadow-sm
                dark:shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
                hover:border-indigo-500
              "
            >
              {/* Header */}

              <div className="flex items-center justify-between">

                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  {card.title}
                </span>

                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-slate-100
                    dark:bg-slate-800
                    transition
                    group-hover:scale-110
                  "
                >
                  <Icon className={`h-6 w-6 ${card.color}`} />
                </div>

              </div>

              {/* Value */}

              <h3 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                {card.value}
              </h3>

            </div>
          );
        })}

      </div>

    </section>
  );
}