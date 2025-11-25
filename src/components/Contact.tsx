"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github } from "lucide-react";

import ContactForm from "./ContactForm";

export default function Contact() {
    return (
        <section id="contact" className="py-20 px-6 md:px-12 max-w-7xl mx-auto mb-20">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="glass rounded-3xl p-8 md:p-16 overflow-hidden relative"
            >
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

                <div className="grid md:grid-cols-2 gap-12 relative z-10">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Connect</h2>
                        <p className="text-neutral-400 mb-8 text-lg">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-neutral-300">
                                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-neutral-500">Email</p>
                                    <a href="mailto:ahmedshaheenwork@gmail.com" className="font-medium hover:text-white transition-colors">ahmedshaheenwork@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-neutral-300">
                                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-secondary">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-neutral-500">Phone</p>
                                    <a href="tel:+905340537088" className="font-medium hover:text-white transition-colors">+90 534 053 70 88</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-neutral-300">
                                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-accent">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-neutral-500">Location</p>
                                    <p className="font-medium">Istanbul, Turkey</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-neutral-300">
                                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-white">
                                    <Github size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-neutral-500">GitHub</p>
                                    <a href="https://github.com/ahmedshaheenreal" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-white transition-colors">github.com/ahmedshaheenreal</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ContactForm />
                </div>
            </motion.div>
        </section>
    );
}
