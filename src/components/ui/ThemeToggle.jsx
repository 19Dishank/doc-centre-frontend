import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="cursor-pointer p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300 transition-colors focus:outline-none"
            aria-label="Toggle theme"
        >
            {theme === "dark" ? (
                <Sun className="size-5 text-amber-500 animate-pulse" />
            ) : (
                <Moon className="size-5 text-zinc-700" />
            )}
        </button>
    );
};

export default ThemeToggle;
