import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Cell,
  LabelList,
} from "recharts";

import { useDashboardData } from "../hooks/useDashboardData";
import { useTheme } from "../hooks/useTheme";

function PerformanceChart() {
  const data = useDashboardData();
  const { theme } = useTheme();

  const dark = theme === "dark";

  const chartData = [
    {
      name: "Winning",
      value: data.winningTrades,
      color: "#22c55e",
    },
    {
      name: "Losing",
      value: data.losingTrades,
      color: "#ef4444",
    },
    {
      name: "Avg Win",
      value: data.averageWinningTrade,
      color: "#3b82f6",
    },
    {
      name: "Avg Loss",
      value: Math.abs(data.averageLosingTrade),
      color: "#f59e0b",
    },
  ];

  return (
    <section
      className={`mt-8 rounded-2xl border p-6 transition-colors duration-300 ${
        dark
          ? "border-slate-700 bg-slate-900 text-white"
          : "border-slate-200 bg-white text-slate-900 shadow"
      }`}
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold">
          Trading Performance
        </h2>

        <p
          className={
            dark ? "text-slate-400" : "text-slate-500"
          }
        >
          Compare wins, losses and average trade outcomes.
        </p>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{
              top: 20,
              right: 20,
              left: 0,
              bottom: 10,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke={dark ? "#334155" : "#E2E8F0"}
            />

            <XAxis
              dataKey="name"
              stroke={dark ? "#94A3B8" : "#475569"}
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              stroke={dark ? "#94A3B8" : "#475569"}
              tickLine={false}
              axisLine={false}
            />

            <Tooltip
              cursor={{
                fill: dark ? "#1E293B" : "#F1F5F9",
              }}
              contentStyle={{
                background: dark ? "#0F172A" : "#FFFFFF",
                border: `1px solid ${
                  dark ? "#334155" : "#CBD5E1"
                }`,
                borderRadius: "12px",
                color: dark ? "#FFFFFF" : "#0F172A",
              }}
            />

            <Bar
              dataKey="value"
              radius={[8, 8, 0, 0]}
              animationDuration={1200}
            >
              <LabelList
                dataKey="value"
                position="top"
                fill={dark ? "#ffffff" : "#0f172a"}
              />

              {chartData.map((entry) => (
                <Cell
                  key={entry.name}
                  fill={entry.color}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

export default PerformanceChart;