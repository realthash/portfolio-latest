"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button className="w-10 h-10 rounded-full glass flex items-center justify-center text-foreground/80 cursor-default opacity-0">
                <span className="sr-only">Toggle theme</span>
            </button>
        );
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-foreground/80 hover:text-slate-900 dark:hover:text-white transition-colors relative overflow-hidden group"
            aria-label="Toggle theme"
        >
            <div className="relative w-5 h-5 flex items-center justify-center">
                <motion.div
                    initial={false}
                    animate={{
                        scale: theme === "dark" ? 1 : 0,
                        opacity: theme === "dark" ? 1 : 0,
                        rotate: theme === "dark" ? 0 : -90,
                    }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <Moon className="w-5 h-5 absolute" />
                </motion.div>

                <motion.div
                    initial={false}
                    animate={{
                        scale: theme === "light" ? 1 : 0,
                        opacity: theme === "light" ? 1 : 0,
                        rotate: theme === "light" ? 0 : 90,
                    }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <Sun className="w-5 h-5 absolute" />
                </motion.div>
            </div>
        </button>
    );
}
