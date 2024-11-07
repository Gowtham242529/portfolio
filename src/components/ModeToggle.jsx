// import { Moon, Sun } from "lucide-react";
import { LuMoon as Moon, LuSun as Sun } from "react-icons/lu";
import { useTheme } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";
import { motion } from 'framer-motion'

export function ModeToggle({className}) {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <motion.button
      whileTap={{
        scale: 0.7,
        rotate: 360,
        transition: { duration: 0.2 },
      }}
      whileHover={{ scale: 1.2 }}
      className={cn("bg-transparent ml-1 mr-1 h-8 w-8 border-none", className)}
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <Moon className="h-8 w-8" />
      ) : (
        <Sun className="h-8 w-8" />
      )}
      <span className="sr-only">Toggle theme</span>
    </motion.button>
  );
}
