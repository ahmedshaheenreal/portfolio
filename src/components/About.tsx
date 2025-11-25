"use client";

import React from "react";
import { motion } from "framer-motion";

const skills = [
    "JavaScript", "TypeScript", "React.js", "Next.js",
    "Node.js", "Express.js", "PostgreSQL", "MySQL", "MongoDB",
    "Sequelize", "Prisma", "Docker", "AWS", "Git",
    "OOP", "Design Patterns", "Unit Testing", "Agile"
];

export default function About() {
    return (
        <section id="about" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center md:text-left">
                    About Me
                </h2>
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-8 text-neutral-400 text-lg leading-relaxed">
                        <div>
                            <p className="mb-4">
                                I am a Full Stack Developer with a Bachelor's degree in Software Engineering from Üsküdar University.
                                I have experience in both front-end and back-end development, with a strong focus on building user-friendly interfaces and optimizing application performance.
                            </p>
                            <p>
                                My passion lies in writing clean, maintainable code and delivering impactful solutions. I thrive in collaborative environments and am always eager to learn new technologies to solve complex problems.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-white">Education</h3>
                            <div className="glass p-6 rounded-xl border-l-4 border-primary">
                                <h4 className="text-white font-bold text-lg">Bachelor's Degree in Software Engineering</h4>
                                <p className="text-primary font-medium">Üsküdar University</p>
                                <p className="text-sm text-neutral-500 mt-1">Graduated Jul '24 • GPA: 3.5</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-6 text-white">Technical Skills</h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill, index) => (
                                <motion.span
                                    key={skill}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.03 }}
                                    whileHover={{ scale: 1.1, color: "#fff", backgroundColor: "rgba(255,255,255,0.1)" }}
                                    className="px-4 py-2 rounded-full glass text-sm text-neutral-300 cursor-default transition-colors border border-white/5 hover:border-primary/30"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
