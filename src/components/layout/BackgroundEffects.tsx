"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function BackgroundEffects() {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const currentTheme = theme === "system" ? resolvedTheme : theme;

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Background Base */}
            <div className="absolute inset-0 bg-background transition-colors duration-700" />
            
            {/* Animated Orbs - Reduced for mobile performance */}
            <div className="absolute inset-0 overflow-hidden opacity-30 dark:opacity-20 blur-[60px] md:blur-[100px]">
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 150, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/40 dark:bg-primary/30"
                />
                <motion.div
                    animate={{
                        x: [0, -150, 0],
                        y: [0, 80, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute top-[20%] -right-[10%] w-[45%] h-[45%] rounded-full bg-blue-400/30 dark:bg-blue-600/20"
                />
                {/* Hide third orb on mobile to save GPU cycles */}
                <motion.div
                    animate={{
                        x: [0, 120, 0],
                        y: [0, -100, 0],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="hidden md:block absolute -bottom-[10%] left-[20%] w-[55%] h-[55%] rounded-full bg-indigo-500/20 dark:bg-indigo-700/10"
                />
            </div>

            {/* Mesh Gradient Texture overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0)_0%,var(--background)_100%)] opacity-50" />
        </div>
    );
}
