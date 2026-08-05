import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="
        relative
        flex
        h-12
        w-24
        items-center
        rounded-full
        border
        border-slate-300
        dark:border-slate-700
        bg-slate-100
        dark:bg-slate-800
        p-1
        transition-all
        duration-300
        shadow-md
        hover:scale-105
      "
    >
      {/* Sliding Circle */}
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 450,
          damping: 30,
        }}
        animate={{
          x: isDark ? 0 : 48,
        }}
        className="
          absolute
          h-10
          w-10
          rounded-full
          bg-yellow-400
          dark:bg-slate-900
          shadow-lg
        "
      />

      {/* Icons */}
      <div className="relative z-10 flex w-full justify-between px-2">
        <Moon
          size={18}
          className={
            isDark
              ? "text-white"
              : "text-slate-500"
          }
        />

        <Sun
          size={18}
          className={
            isDark
              ? "text-slate-500"
              : "text-yellow-700"
          }
        />
      </div>
    </button>
  );
}

export default ThemeToggle;