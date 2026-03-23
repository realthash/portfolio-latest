"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar, Building2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const certifications = [
    {
        title: "Hult Prize On-Campus Committee",
        issuer: "Informatics Institute of Technology",
        date: "2026",
        link: "/hult.png",
        image: "/hult.png",
        description: "The Hult Prize is the world’s largest student-led social entrepreneurship competition. Member of the On-Campus Committee, empowering students to create impactful solutions to global challenges through social entrepreneurship."
    }
];

export default function Certifications() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <section id="certifications" className="py-24 relative overflow-hidden bg-background/50">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-slate-900 dark:text-white">Certifications</h2>
                    <div className="w-20 h-1 bg-primary rounded-full mb-6" />
                    <p className="text-foreground/60 max-w-2xl text-lg">
                        Professional milestones and specialized training that demonstrate my commitment to continuous learning and technical excellence.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {certifications.map((cert, idx) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-20px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group glass p-0 rounded-[2rem] border border-black/5 dark:border-white/5 hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-300 flex flex-col h-full overflow-hidden will-change-transform"
                        >
                            {/* Certificate Image/Header */}
                            <div className="relative h-48 w-full bg-primary/5 flex items-center justify-center overflow-hidden">
                                {cert.image ? (
                                    <>
                                        <Image
                                            src={cert.image}
                                            alt={cert.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                                    </>
                                ) : (
                                    <div className="flex flex-col items-center gap-2 text-primary/30">
                                        <Award className="w-16 h-16" />
                                        <span className="text-xs font-medium tracking-widest uppercase">Professional Certification</span>
                                    </div>
                                )}

                                <div className="absolute top-4 right-4 z-10">
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-primary transition-colors shadow-lg"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex-grow">
                                    <h3 className="text-xl font-bold font-heading mb-3 text-slate-900 dark:text-white group-hover:text-primary transition-colors leading-snug">
                                        {cert.title}
                                    </h3>

                                    <div className="space-y-2 mb-6 text-sm">
                                        <div className="flex items-center gap-2 text-foreground/60">
                                            <Building2 className="w-4 h-4" />
                                            <span>{cert.issuer}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-foreground/60">
                                            <Calendar className="w-4 h-4" />
                                            <span>{cert.date}</span>
                                        </div>
                                    </div>

                                    <p className="text-foreground/60 line-clamp-3 text-sm leading-relaxed">
                                        {cert.description}
                                    </p>
                                </div>

                                <div className="mt-8 pt-6 border-t border-black/5 dark:border-white/5">
                                    <span className="text-xs font-semibold tracking-widest uppercase text-primary/50 group-hover:text-primary transition-colors">
                                        Verified Credential
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
