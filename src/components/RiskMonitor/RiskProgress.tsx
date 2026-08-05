type Props = {
  title: string;
  used: number;
  limit: number;
  color: string;
};

function RiskProgress({
  title,
  used,
  limit,
  color,
}: Props) {
  const percentage = Math.min((used / limit) * 100, 100);
  const remaining = Math.max(limit - used, 0);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 dark:border-slate-700 dark:bg-slate-800">

      {/* Header */}
      <div className="mb-3 flex items-center justify-between">

        <div>
          <h3 className="font-semibold text-slate-900 dark:text-white">
            {title}
          </h3>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            ${used.toLocaleString()} used of ${limit.toLocaleString()}
          </p>
        </div>

        <div
          className={`rounded-full px-3 py-1 text-sm font-semibold ${
            percentage >= 90
              ? "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
              : percentage >= 70
              ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
              : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
          }`}
        >
          {percentage.toFixed(0)}%
        </div>

      </div>

      {/* Progress Bar */}
      <div className="h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">

        <div
          className={`h-full rounded-full transition-all duration-700 ${color}`}
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

      {/* Footer */}
      <div className="mt-3 flex items-center justify-between text-sm">

        <span className="text-slate-500 dark:text-slate-400">
          Remaining
        </span>

        <span className="font-semibold text-slate-900 dark:text-white">
          ${remaining.toLocaleString()}
        </span>

      </div>
    </div>
  );
}

export default RiskProgress;