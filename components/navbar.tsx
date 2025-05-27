'use client';
import { motion } from 'framer-motion';
import Menuitems from './menu-items';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';
import React from 'react';
import { GithubIcon, LinkedInIcon } from './social-icons';
import Image from "next/image";


const socialLinks = {
    github: "https://github.com/kartikeya-datta",
    linkedin: "https://www.linkedin.com/in/kartikeya-datta-749b0214a/",
    resume: "https://docs.google.com/document/d/1ZY8xYntH1yc-rAGl1sADe5pa3U_RHidd/edit?usp=sharing&ouid=108079403905750124098&rtpof=true&sd=true"
};

const navItems = [
    { name: "About", href: "#about" },
    { name: "Qualifications", href: "#Qualifications" },
    { name: "Experience", href: "#Career" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
]; 

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed w-full z-50 bg-background/50 backdrop-blur-2xl transition-all duration-300 ease-out"
        >
            <div className="max-w-7xl mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
                    <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2 group">
                        <div className="relative h-12 w-12 rounded-full overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-tertiary animate-spin-slow [mask-image:linear-gradient(transparent,white)]"></div>
                            <div className="absolute inset-[2px] bg-background rounded-full flex items-center justify-center">
                                <Image src="/logo.png" width={36} height={40} alt="Logo" className="h-10 w-9 object-contain" />
                            </div>
                        </div>
                        <span className="text-lg font-semibold text-content/90 group-hover:text-primary transition-colors">
                            M Kartikeya Datta
                        </span>
                    </motion.div>

                    {/* Desktop Navbar */}
                    <div className="hidden md:flex items-center gap-6">
                        <div className="flex items-center gap-6 bg-gradient-to-r from-white/10 to-white/20 backdrop-blur-md rounded-full px-4 py-1.5 border border-white/15 shadow-lg shadow-white/10">
                            {navItems.map((items, i) => (
                                <Menuitems key={items.name} index={i} href={items.href}>
                                    {items.name}
                                </Menuitems>
                            ))}
                        </div>

                        <div className="h-6 w-px bg-white/20 mx-2"></div>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            <a
                                className="p-2 rounded-lg bg-white/5 hover:bg-primary/50 transition-colors group"
                                href={socialLinks.github}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <GithubIcon className="h-5 w-5 text-content/80 group-hover:text-primary transition-colors" />
                            </a>
                            <a
                                className="p-2 rounded-lg bg-white/5 hover:bg-primary/50 transition-colors group"
                                href={socialLinks.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <LinkedInIcon className="h-5 w-5 text-content/80 group-hover:text-primary transition-colors" />
                            </a>

                            {/* Resume Link moved to the right */}
                            <motion.a
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 0 20px 0 rgba(0,0,0,0.1)",
                                    transition: { duration: 0.1 },
                                }}
                                onHoverEnd={(e) => {
                                    if (e.target) {
                                        (e.target as HTMLElement).style.transform = "scale(1)";
                                    }
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="relative overflow-hidden px-3 py-2 rounded-full bg-surface border border-white/10 hover:border-primary/30 transition-all group ml-auto"
                                href={socialLinks.resume}
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                            >
                                <span className="text-content/90 group-hover:text-primary transition-colors font-bold font-mono">
                                    Resume
                                </span>
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 to-tertiary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.a>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-lg bg-white/5 hover:bg-primary transition-colors"
                    >
                        {isMenuOpen ? (
                            <XMarkIcon className="h-6 w-6 text-content/80" />
                        ) : (
                            <Bars3Icon className="h-6 w-6 text-content/80" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden flex flex-col gap-4 mt-4 pb-4 space-y-4 bg-gradient-to-b from-white/10 to-white/30 backdrop-blur-md rounded-lg shadow-lg shadow-white/10 p-4"
                    >
                        {navItems.map((items) => (
                            <a
                                key={items.name}
                                href={items.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-4 py-2 text-content/80 hover:text-primary hover:bg-white/5 rounded-lg transition-colors"
                            >
                                {items.name}
                            </a>
                        ))}
                        <div className="flex gap-4">
                            <a
                                className="p-2 rounded-lg bg-white/5 hover:bg-primary/50 transition-colors group"
                                href={socialLinks.github}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <GithubIcon className="h-5 w-5 text-content/80 group-hover:text-primary transition-colors" />
                            </a>
                            <a
                                className="p-2 rounded-lg bg-white/5 hover:bg-primary/50 transition-colors group"
                                href={socialLinks.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <LinkedInIcon className="h-5 w-5 text-content/80 group-hover:text-primary transition-colors" />
                            </a>
                            <motion.a
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 0 20px 0 rgba(0,0,0,0.1)",
                                    transition: { duration: 0.1 },
                                }}
                                onHoverEnd={(e) => {
                                    if (e.target) {
                                        (e.target as HTMLElement).style.transform = "scale(1)";
                                    }
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="relative overflow-hidden px-5 py-2 rounded-full bg-surface border border-white/10 hover:border-primary/30 transition-all group"
                                href={socialLinks.resume}
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                            >
                                <span className="text-content/90 group-hover:text-primary transition-colors font-bold font-mono">
                                    Resume
                                </span>
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 to-tertiary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
}
