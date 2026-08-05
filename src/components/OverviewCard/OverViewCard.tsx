import { ArrowDownRight, ArrowUpRight } from "lucide-react";

type Props = {
  title: string;
  value: string | number;
  subtitle?: string;
  positive?: boolean;
};

function OverviewCard({
  title,
  value,
  subtitle,
  positive,
}: Props) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg transition-all hover:border-slate-700">

      <p className="text-sm text-slate-400">
        {title}
      </p>

      <div className="mt-4 flex items-center gap-3">

        {positive !== undefined && (
          positive ? (
            <ArrowUpRight className="text-green-500" />
          ) : (
            <ArrowDownRight className="text-red-500" />
          )
        )}

        <h2 className="text-3xl font-bold text-white">
          {value}
        </h2>

      </div>

      {subtitle && (
        <p className="mt-3 text-sm text-slate-500">
          {subtitle}
        </p>
      )}

    </div>
  );
}

export default OverviewCard;