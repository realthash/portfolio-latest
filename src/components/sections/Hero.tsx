"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
    const [typedText, setTypedText] = useState("");
    const fullText = "Computer Science Undergraduate";

    useEffect(() => {
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < fullText.length) {
                setTypedText(fullText.slice(0, i + 1));
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, 70); // Slightly faster for better feel

        return () => clearInterval(typingInterval);
    }, []);

    return (
        <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background gradients */}
            <div className="absolute top-[10%] left-[10%] w-[30rem] h-[30rem] bg-primary/20 rounded-full blur-[120px] pointer-events-none opacity-60 mix-blend-screen" />
            <div className="absolute bottom-[10%] right-[10%] w-[40rem] h-[40rem] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none opacity-60 mix-blend-screen" />

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-4xl mx-auto flex flex-col items-center"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="px-5 py-2 rounded-full glass text-sm font-medium text-primary tracking-wide mb-8 inline-flex items-center gap-2"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Available for opportunities
                    </motion.div>

                    <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold font-heading tracking-tight mb-6 leading-tight">
                        Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60">Thash</span>
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
                            Developer & Designer
                        </span>
                    </h1>

                    <div className="h-8 md:h-12 mb-8 flex items-center justify-center">
                        <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 font-mono">
                            {typedText}
                            <span className="animate-pulse ml-1 inline-block w-2 bg-primary h-6 align-middle" />
                        </p>
                    </div>

                    <p className="max-w-2xl mx-auto text-foreground/60 text-lg md:text-xl leading-relaxed mb-12">
                        I craft ultra-modern, performant, and premium web experiences. Bridging the gap between
                        exceptional design and robust engineering to build the internet of tomorrow.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#projects"
                            className="group w-full sm:w-auto relative px-8 py-4 bg-white text-black rounded-full font-semibold overflow-hidden flex items-center justify-center gap-2"
                        >
                            <div className="absolute inset-0 bg-primary translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1]" />
                            <span className="relative z-10 group-hover:text-white transition-colors duration-300">View My Work</span>
                            <ArrowRight className="relative z-10 w-4 h-4 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="/resume.pdf"
                            target="_blank"
                            className="w-full sm:w-auto px-8 py-4 glass rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-white/5 border-white/10 transition-colors"
                        >
                            <span>Download Resume</span>
                            <Download className="w-4 h-4" />
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
