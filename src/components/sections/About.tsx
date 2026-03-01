"use client";

import { motion } from "framer-motion";
import { User, Code2, Sparkles } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-primary rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6 text-foreground/70 text-lg leading-relaxed mix-blend-plus-lighter"
                    >
                        <p>
                            Hello! I&apos;m a passionate <strong className="text-white font-medium">Computer Science undergraduate</strong> with a deep love for creating
                            beautiful, functional, and performant digital experiences. My journey in tech started
                            with a curiosity about how things work on the internet, which quickly evolved into a
                            career-driven passion for frontend engineering.
                        </p>
                        <p>
                            I specialize in bridging the gap between design and engineering—ensuring that the
                            visual aesthetic is <strong className="text-white font-medium">pixel-perfect</strong> while the underlying code is robust, scalable,
                            and accessible to everyone.
                        </p>
                        <p>
                            When I&apos;m not coding, you can find me exploring new UI trends, contributing to
                            open-source projects, or optimizing algorithms for fun.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative"
                    >
                        {/* Background glow for cards */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 blur-[100px] pointer-events-none rounded-full" />

                        <div className="glass p-6 md:p-8 rounded-3xl flex flex-col gap-4 hover:-translate-y-2 transition-transform duration-300 relative z-10 border-white/10 dark:hover:border-primary/30">
                            <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center text-primary mb-2">
                                <Code2 className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-heading font-semibold text-white">Clean Code</h3>
                            <p className="text-foreground/60 text-sm leading-relaxed">Writing maintainable, scalable, and modular code is my priority.</p>
                        </div>

                        <div className="glass p-6 md:p-8 rounded-3xl flex flex-col gap-4 hover:-translate-y-2 transition-transform duration-300 sm:translate-y-8 relative z-10 border-white/10 dark:hover:border-purple-500/30">
                            <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center text-purple-400 mb-2">
                                <Sparkles className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-heading font-semibold text-white">Pixel Perfect</h3>
                            <p className="text-foreground/60 text-sm leading-relaxed">Every animation and layout is crafted with extreme attention to detail.</p>
                        </div>

                        <div className="glass p-6 md:p-8 rounded-3xl flex flex-col gap-4 hover:-translate-y-2 transition-transform duration-300 relative z-10 border-white/10 sm:col-span-2 md:col-span-1 dark:hover:border-blue-400/30 md:translate-x-1/2 md:-translate-y-0">
                            <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 mb-2">
                                <User className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-heading font-semibold text-white">User Centric</h3>
                            <p className="text-foreground/60 text-sm leading-relaxed">Designing experiences that delight and engage users effortlessly.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
