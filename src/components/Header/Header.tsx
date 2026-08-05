import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { useDashboardData } from "../../hooks/useDashboardData";

function Header() {
  const data = useDashboardData();

  const getStatusClasses = () => {
    switch (data.riskStatus) {
      case "Safe":
        return "bg-green-500/10 border-green-500/30 text-green-400";

      case "Approaching Limit":
        return "bg-yellow-500/10 border-yellow-500/30 text-yellow-400";

      case "At Risk":
        return "bg-red-500/10 border-red-500/30 text-red-400";

      default:
        return "bg-slate-500/10 border-slate-500/30 text-slate-400";
    }
  };

  return (
    <header
      className="
      flex flex-col
      gap-6
      lg:flex-row
      lg:items-center
      lg:justify-between
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
      {/* Left */}

      <div>
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
          Trader Risk Dashboard
        </h1>

        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Monitor your account health and trading performance.
        </p>
      </div>

      {/* Right */}

      <div className="flex items-center gap-4">
        <div
          className={`rounded-xl border px-5 py-3 text-center ${getStatusClasses()}`}
        >
          <p className="text-xs uppercase tracking-wider">
            Account Status
          </p>

          <h2 className="text-2xl font-bold">
            {data.riskStatus.toUpperCase()}
          </h2>
        </div>

        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;