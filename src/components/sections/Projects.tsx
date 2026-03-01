"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "Smart Fleet System",
        description: "The Smart Ambulance Tracking and Management System is a web and mobile-based platform that enables real-time GPS tracking of ambulances and centralized management through an admin dashboard. It uses secure authentication, cloud database integration, and API-based communication to ensure efficient driver assignment, route navigation, and live status monitoring.",
        image: "/logo-darkmode.PNG",
        tags: ["Typescript", "React", "Next.js", "Tailwind CSS", "Google map API", "Firebase DB", "Firebase API"],
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        title: "Clean and Water Sanitation",
        description: "Real-time financial analytics dashboard powered by AI. Features complex data visualizations and predictive modeling.",
        image: "/BlueSanctuary.PNG",
        tags: ["HTML5", "CSS"],
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        title: "Social Sphere",
        description: "A decentralized social network prototype focusing on privacy and content ownership using Web3 technologies.",
        image: "bg-gradient-to-br from-orange-600/20 to-red-600/20",
        tags: ["Solidity", "TypeScript", "Ethers.js"],
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        title: "Developer Tools UI Kit",
        description: "A premium open-source UI configuration tool and component library designed specifically for complex internal tools.",
        image: "bg-gradient-to-br from-primary/20 to-blue-800/20",
        tags: ["React", "Radix UI", "Tailwind CSS"],
        liveUrl: "#",
        githubUrl: "#",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-white">Featured Projects</h2>
                    <div className="w-20 h-1 bg-primary rounded-full mb-6" />
                    <p className="text-foreground/60 max-w-2xl text-lg">
                        A selection of my recent works highlighting my skills in frontend development, design, and performance optimization.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="group relative rounded-[2rem] overflow-hidden glass border border-white/5 hover:border-white/20 transition-all duration-500"
                        >
                            <div className={`w-full h-72 relative overflow-hidden flex items-center justify-center p-8`}>
                                {project.image.startsWith('bg-') ? (
                                    <div className={`absolute inset-0 ${project.image}`} />
                                ) : (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-contain"
                                    />
                                )}
                                <div className="absolute inset-0 bg-background/50 group-hover:bg-transparent transition-colors duration-700" />

                                {/* Simulated abstract visual for project image */}
                                <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 mix-blend-overlay flex items-center justify-center">
                                    <div className="w-32 h-32 rounded-full border border-white/50 animate-[spin_10s_linear_infinite]" />
                                    <div className="w-48 h-48 rounded-full border border-white/30 absolute animate-[spin_15s_linear_infinite_reverse]" />
                                </div>

                                <motion.div
                                    className="relative z-10 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 flex gap-4"
                                >
                                    <a href={project.liveUrl} target="_blank" className="p-4 bg-white text-black rounded-full hover:scale-110 transition-transform shadow-xl">
                                        <ExternalLink className="w-6 h-6" />
                                    </a>
                                    <a href={project.githubUrl} target="_blank" className="p-4 bg-black/50 text-white backdrop-blur-md rounded-full hover:scale-110 transition-transform shadow-xl border border-white/20">
                                        <Github className="w-6 h-6" />
                                    </a>
                                </motion.div>
                            </div>

                            <div className="p-8 md:p-10 relative">
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-background to-transparent opacity-50 pointer-events-none" />
                                <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4 text-white group-hover:text-primary transition-colors relative z-10">
                                    {project.title}
                                </h3>
                                <p className="text-foreground/70 mb-8 line-clamp-2 md:line-clamp-3 leading-relaxed relative z-10">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 relative z-10">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-sm font-medium px-4 py-1.5 glass rounded-full text-white tracking-wide">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
