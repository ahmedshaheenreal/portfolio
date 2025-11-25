"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "E-Commerce System",
        description: "Designed and structured the database schema for efficient product and order handling. Developed secure JWT authentication and implemented backend logic for personalized product collections. Optimized database performance using Sequelize hooks.",
        tags: ["Node.js", "Sequelize", "MySQL", "JWT", "Backend"],
        link: "#",
        github: "#"
    },
    {
        title: "AskMe Q&A Application",
        description: "Full-stack secure Q&A platform allowing anonymous user interactions. Integrated NextAuth.js and Prisma for robust authentication and database management. Built a responsive UI with NextUI and Tailwind CSS.",
        tags: ["Next.js", "NextAuth.js", "Prisma", "Tailwind CSS", "NextUI"],
        link: "#",
        github: "#"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-12 text-center"
            >
                Featured Projects
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -10 }}
                        className="glass p-8 rounded-2xl group relative overflow-hidden flex flex-col"
                    >
                        {/* Hover Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10 flex-1 flex flex-col">
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-neutral-400 mb-6 leading-relaxed flex-1">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs font-medium px-2 py-1 rounded bg-white/5 text-neutral-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                <a href={project.link} className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                                    <ExternalLink size={16} /> Live Demo
                                </a>
                                <a href={project.github} className="flex items-center gap-2 text-sm font-medium hover:text-white transition-colors text-neutral-400">
                                    <Github size={16} /> Code
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
