"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none",
                scrolled ? "py-4" : "py-8"
            )}
        >
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 flex justify-center pointer-events-auto">
                <nav
                    className={cn(
                        "flex items-center gap-6 sm:gap-8 px-6 sm:px-8 py-3 rounded-full transition-all duration-500",
                        scrolled
                            ? "glass shadow-lg shadow-black/5 dark:shadow-white/5"
                            : "bg-transparent"
                    )}
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-foreground hover:text-white transition-colors relative group"
                        >
                            <span className="relative z-10">{link.name}</span>
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full rounded-full" />
                        </a>
                    ))}
                </nav>
            </div>
        </motion.header>
    );
}
