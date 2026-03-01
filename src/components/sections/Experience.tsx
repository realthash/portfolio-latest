"use client";

import { motion } from "framer-motion";

const timeline = [
    {
        year: "2026 - Present",
        role: "Software Engineering Intern - pendning",
        company: "-",
        description: "",
    },

    {
        year: "2024 - Present",
        role: "B.S. Computer Science",
        company: "University of Technology",
        description: "Specializing in Human-Computer Interaction and Advanced Algorithms. Core member of the Web Development Society, mentoring junior developers.",
    },
    {
        year: "2013-2022",
        role: "Student",
        company: "Nalanda College",
        description: "A Nalandian who actively balances academics with sports. Through sports, discipline, teamwork, and time management are developed",
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 relative overflow-hidden bg-background/50">
            <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-20 text-center flex flex-col items-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-slate-900 dark:text-white">Experience & Education</h2>
                    <div className="w-20 h-1 bg-primary rounded-full mb-6" />
                </motion.div>

                <div className="relative border-l-2 border-primary/20 ml-6 md:ml-0 md:border-none space-y-16">
                    {/* Central line for desktop */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-purple-500/50 to-transparent -translate-x-1/2 rounded-full" />

                    {timeline.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: idx * 0.1, type: "spring", stiffness: 100 }}
                            className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""
                                } items-start md:items-center`}
                        >
                            {/* Timeline dot */}
                            <div className="absolute -left-[29px] top-8 md:top-auto md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-primary ring-4 ring-background z-10 shadow-[0_0_20px_rgba(59,130,246,0.8)]" />

                            <div className="w-full md:w-1/2 md:px-12 flex flex-col pl-4 md:pl-12">
                                <div className={`glass p-8 md:p-10 rounded-3xl relative hover:border-black/20 dark:hover:border-white/20 transition-all duration-300 group ${idx % 2 === 0 ? "md:text-right" : "md:text-left"} ${idx === timeline.length - 1 ? "" : "mb-2"}`}>
                                    <span className="text-primary font-mono text-sm md:text-base font-semibold tracking-wider block mb-3 group-hover:text-purple-400 transition-colors">{item.year}</span>
                                    <h3 className="text-2xl md:text-3xl font-bold font-heading text-slate-900 dark:text-white mb-2">{item.role}</h3>
                                    <h4 className="text-lg md:text-xl text-foreground/80 font-medium mb-5">{item.company}</h4>
                                    <p className="text-foreground/60 leading-relaxed text-sm md:text-base">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
