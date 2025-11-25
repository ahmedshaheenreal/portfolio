"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
            {/* Aura Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] animate-[aura_10s_infinite_alternate]" />
                <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-secondary/20 rounded-full blur-[80px] animate-[aura_8s_infinite_alternate-reverse]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-10 text-center"
            >
                <h2 className="text-sm md:text-base font-medium tracking-widest text-neutral-400 mb-4 uppercase">
                    Full Stack Developer
                </h2>
                <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
                    Ahmed Shaheen
                </h1>
                <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Full Stack Developer specializing in building user-friendly interfaces and optimizing performance. Passionate about clean code and impactful solutions.
                </p>

                <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#projects"
                        className="px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-neutral-200 transition-colors"
                    >
                        View Work
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#contact"
                        className="px-8 py-3 glass text-white font-medium rounded-full hover:bg-white/10 transition-colors"
                    >
                        Contact Me
                    </motion.a>
                </div>
            </motion.div>
        </section>
    );
}
