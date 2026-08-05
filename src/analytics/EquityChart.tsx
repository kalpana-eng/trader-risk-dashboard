import {
  ResponsiveContainer,
  LineChart,
  Line,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const data = [
  { day: "Mon", equity: 100000 },
  { day: "Tue", equity: 101200 },
  { day: "Wed", equity: 100800 },
  { day: "Thu", equity: 102600 },
  { day: "Fri", equity: 103250 },
];

function EquityChart() {
  return (
    <section
      className="
      mt-8
      rounded-2xl
      border
      border-slate-200
      dark:border-slate-700
      bg-white
      dark:bg-slate-900
      p-6
      shadow-sm
      dark:shadow-none
      transition-all
      duration-300
    "
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Equity Curve
        </h2>

        <p className="text-slate-500 dark:text-slate-400">
          Account growth throughout the trading week.
        </p>
      </div>

      <div className="h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 20,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid
              strokeDasharray="4 4"
              stroke="#334155"
              opacity={0.35}
            />

            <XAxis
              dataKey="day"
              stroke="#94A3B8"
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              stroke="#94A3B8"
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) =>
                `$${(value / 1000).toFixed(0)}k`
              }
            />

            <Tooltip
              contentStyle={{
                background: "#0F172A",
                border: "1px solid #334155",
                borderRadius: "12px",
                color: "#fff",
              }}
              formatter={(value) => [
                `$${Number(value ?? 0).toLocaleString()}`,
                "Equity",
              ]}
            />

            <Line
              type="monotone"
              dataKey="equity"
              stroke="#22c55e"
              strokeWidth={4}
              dot={{
                r: 5,
                strokeWidth: 2,
                fill: "#22c55e",
                stroke: "#ffffff",
              }}
              activeDot={{
                r: 8,
              }}
              animationDuration={1500}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

export default EquityChart;