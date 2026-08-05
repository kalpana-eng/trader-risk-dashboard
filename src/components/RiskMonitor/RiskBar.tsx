type RiskBarProps = {
  title: string;
  used: number;
  limit: number;
  color: string;
};

function RiskBar({
  title,
  used,
  limit,
  color,
}: RiskBarProps) {
  const percentage = Math.min((used / limit) * 100, 100);
  const remaining = Math.max(limit - used, 0);

  return (
    <div className="rounded-xl bg-slate-800 p-5">

      <div className="mb-4 flex items-center justify-between">

        <h3 className="font-semibold">
          {title}
        </h3>

        <span className="text-sm text-slate-400">
          {percentage.toFixed(0)}%
        </span>

      </div>

      <div className="mb-3 h-3 overflow-hidden rounded-full bg-slate-700">

        <div
          className={`h-full rounded-full ${color}`}
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

      <div className="flex justify-between text-sm">

        <div>
          <p className="text-slate-400">Used</p>
          <p className="font-semibold">
            ${used.toLocaleString()}
          </p>
        </div>

        <div className="text-right">
          <p className="text-slate-400">Remaining</p>
          <p className="font-semibold text-green-400">
            ${remaining.toLocaleString()}
          </p>
        </div>

      </div>

    </div>
  );
}

export default RiskBar;