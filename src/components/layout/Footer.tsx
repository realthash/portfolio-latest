"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Dribbble, ArrowUp } from "lucide-react";

const links = [
    { name: "GitHub", icon: Github, url: "#" },
    { name: "LinkedIn", icon: Linkedin, url: "#" },
    { name: "Twitter", icon: Twitter, url: "#" },
    { name: "Dribbble", icon: Dribbble, url: "#" },
];

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="py-12 relative overflow-hidden bg-background border-t border-white/5 tracking-wide mt-10">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <p className="text-white font-heading font-bold text-xl tracking-tight">Thash.</p>
                    <p className="text-foreground/50 text-sm">
                        &copy; {new Date().getFullYear()} All rights reserved. Built with Next.js & Framer Motion.
                    </p>
                </div>

                <div className="flex gap-4 items-center">
                    {links.map((link) => (
                        <motion.a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            whileHover={{ y: -5, scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-10 h-10 rounded-full glass flex items-center justify-center text-foreground/80 hover:text-white hover:border-white/30 transition-colors"
                        >
                            <link.icon className="w-4 h-4" />
                        </motion.a>
                    ))}

                    <div className="w-px h-6 bg-white/10 mx-2 hidden sm:block" />

                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ y: -5, scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 rounded-full bg-primary/20 text-primary border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors hidden sm:flex"
                    >
                        <ArrowUp className="w-4 h-4" />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
}
