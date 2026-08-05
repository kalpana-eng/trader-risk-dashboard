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
    <div
      className="
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
      {/* Title */}
      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
        {title}
      </p>

      {/* Value */}
      <div className="mt-4 flex items-center gap-3">
        {positive !== undefined &&
          (positive ? (
            <div className="rounded-full bg-green-100 p-2 dark:bg-green-900/30">
              <ArrowUpRight className="h-5 w-5 text-green-500" />
            </div>
          ) : (
            <div className="rounded-full bg-red-100 p-2 dark:bg-red-900/30">
              <ArrowDownRight className="h-5 w-5 text-red-500" />
            </div>
          ))}

        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          {value}
        </h2>
      </div>

      {/* Subtitle */}
      {subtitle && (
        <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default OverviewCard;