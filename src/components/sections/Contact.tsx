"use client";

import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setFormState({ name: "", email: "", message: "" });
            setTimeout(() => setIsSuccess(false), 3000);
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-16 text-center flex flex-col items-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-white">Let&apos;s Connect</h2>
                    <div className="w-20 h-1 bg-primary rounded-full mb-6" />
                    <p className="text-foreground/60 max-w-2xl text-lg">
                        Have a project in mind or just want to chat? Feel free to reach out. I&apos;m currently open to new opportunities.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="flex items-start gap-5 group cursor-default">
                            <div className="min-w-14 w-14 h-14 rounded-full glass flex items-center justify-center text-primary mt-1 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-heading font-semibold text-white mb-2">Email</h3>
                                <p className="text-foreground/70">hello@thash.dev</p>
                                <p className="text-foreground/70">thash.work@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-5 group cursor-default">
                            <div className="min-w-14 w-14 h-14 rounded-full glass flex items-center justify-center text-purple-400 mt-1 group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-heading font-semibold text-white mb-2">Location</h3>
                                <p className="text-foreground/70">San Francisco, CA</p>
                                <p className="text-foreground/70">Available for Remote Friendly Work</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-5 group cursor-default">
                            <div className="min-w-14 w-14 h-14 rounded-full glass flex items-center justify-center text-blue-400 mt-1 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-heading font-semibold text-white mb-2">Phone</h3>
                                <p className="text-foreground/70">+1 (555) 123-4567</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        onSubmit={handleSubmit}
                        className="glass p-8 md:p-10 rounded-[2rem] flex flex-col gap-6 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

                        <div className="relative z-10">
                            <input
                                type="text"
                                id="name"
                                value={formState.name}
                                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-primary/50 text-white peer placeholder-transparent transition-all hover:border-white/20"
                                placeholder=" "
                                required
                            />
                            <label htmlFor="name" className="absolute left-5 top-4 text-foreground/50 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary peer-focus:bg-background peer-focus:px-2 -top-2.5 text-xs text-primary bg-background px-2 z-10 cursor-text pointer-events-none rounded">
                                Your Name
                            </label>
                        </div>

                        <div className="relative z-10">
                            <input
                                type="email"
                                id="email"
                                value={formState.email}
                                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-primary/50 text-white peer placeholder-transparent transition-all hover:border-white/20"
                                placeholder=" "
                                required
                            />
                            <label htmlFor="email" className="absolute left-5 top-4 text-foreground/50 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary peer-focus:bg-background peer-focus:px-2 -top-2.5 text-xs text-primary bg-background px-2 z-10 cursor-text pointer-events-none rounded">
                                Email Address
                            </label>
                        </div>

                        <div className="relative z-10">
                            <textarea
                                id="message"
                                value={formState.message}
                                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-primary/50 text-white peer placeholder-transparent transition-all min-h-[160px] resize-none hover:border-white/20"
                                placeholder=" "
                                required
                            />
                            <label htmlFor="message" className="absolute left-5 top-4 text-foreground/50 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary peer-focus:bg-background peer-focus:px-2 -top-2.5 text-xs text-primary bg-background px-2 z-10 cursor-text pointer-events-none rounded">
                                Your Message
                            </label>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            disabled={isSubmitting || isSuccess}
                            className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all relative z-10 ${isSuccess ? "bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)]" : "bg-primary text-white hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                                }`}
                        >
                            {isSubmitting ? (
                                <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                            ) : isSuccess ? (
                                <span>Message Sent successfully!</span>
                            ) : (
                                <>
                                    <span>Send Message</span>
                                    <Send className="w-4 h-4 ml-1" />
                                </>
                            )}
                        </motion.button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
