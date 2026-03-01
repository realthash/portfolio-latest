"use client";

import { motion } from "framer-motion";

const skillsMap = [
    { category: "Languages", items: ["Python", "Java", "JavaScript", "TypeScript", "HTML5", "CSS3"] },
    { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "GSAP", "Three.js"] },
    { category: "Backend & Database", items: ["Node.js", "Express", "Firebase", "MongoDB", "SQL", "PostgreSQL"] },
    { category: "Tools & Others", items: ["Git", "Figma", "REST APIs", "Vercel", "Linux", "Docker"] },
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 relative overflow-hidden bg-white/5 dark:bg-black/20">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-16 text-center flex flex-col items-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">Technical Arsenal</h2>
                    <div className="w-20 h-1 bg-primary rounded-full mb-6" />
                    <p className="text-foreground/60 max-w-2xl text-lg">
                        A comprehensive overview of my technical skills, tools, and technologies I use to bring ideas to life.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {skillsMap.map((skillSet, idx) => (
                        <motion.div
                            key={skillSet.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="glass p-8 md:p-10 rounded-[2rem] border-white/5 hover:border-white/10 transition-colors"
                        >
                            <h3 className="text-2xl font-heading font-semibold mb-8 text-white">{skillSet.category}</h3>
                            <div className="flex flex-wrap gap-3">
                                {skillSet.items.map((item, itemIdx) => (
                                    <motion.div
                                        key={item}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.4,
                                            delay: idx * 0.1 + itemIdx * 0.05,
                                            type: "spring", stiffness: 200, damping: 10
                                        }}
                                        className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-foreground/80 hover:text-white hover:bg-primary/20 hover:border-primary/50 transition-all cursor-default shadow-sm"
                                    >
                                        {item}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
