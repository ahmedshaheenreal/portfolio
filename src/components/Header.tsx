"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Header() {
    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 glass"
        >
            <Link href="/" className="text-xl font-bold tracking-tighter hover:text-primary transition-colors">
                AS
            </Link>

            <nav className="hidden md:flex gap-8">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>

            <button className="md:hidden text-white">
                {/* Mobile Menu Icon Placeholder */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
        </motion.header>
    );
}
