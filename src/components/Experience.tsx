"use client";

import React from "react";
import { motion } from "framer-motion";

const experiences = [
    {
        role: "Back end Trainee",
        company: "TAP",
        location: "Amsterdam, Netherlands (Remote)",
        period: "Sep '24 - Dec '24",
        description: [
            "Worked on an e-commerce backend using Node.js, Sequelize, and MySQL, developing and debugging APIs.",
            "Participated in sprint retrospectives and worked with mentors to troubleshoot issues in staging and development environments.",
            "Used database queries and logs to identify and resolve bugs, contributing to cleaner releases.",
            "Helped document backend issues and their solutions to improve team knowledge sharing."
        ]
    },
    {
        role: "Front end Intern",
        company: "trustangle",
        location: "Gaza, Palestine",
        period: "Aug '23 - Oct '23",
        description: [
            "Built and tested front-end components, using developer tools and browser logs to fix rendering bugs.",
            "Participated in issue tracking and documentation of recurring bugs during QA and handover phases.",
            "Utilized modern frameworks to improve performance and maintainability of web applications."
        ]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-12 text-center"
            >
                Work Experience
            </motion.h2>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-neutral-800 before:to-transparent">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                    >
                        {/* Icon */}
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-black shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-primary">
                            <div className="w-3 h-3 bg-current rounded-full" />
                        </div>

                        {/* Card */}
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-colors">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                                <div>
                                    <h3 className="font-bold text-lg text-white">{exp.role}</h3>
                                    <p className="text-primary font-medium">{exp.company}</p>
                                </div>
                                <time className="text-xs font-medium text-neutral-500 uppercase tracking-wide">{exp.period}</time>
                            </div>
                            <p className="text-sm text-neutral-500 mb-4">{exp.location}</p>
                            <ul className="space-y-2">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="text-neutral-400 text-sm leading-relaxed flex items-start gap-2">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-600 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
