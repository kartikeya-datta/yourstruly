'use client';
import { motion } from 'framer-motion';
import Menuitems from './menu-items';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';
import React from 'react';
import SocialLinks from './sociallinks';


const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
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
                                <img src="/logo.png" alt="Logo" className="h-10 w-9 object-contain" />
                            </div>
                        </div>
                        <span className="text-lg font-semibold text-content/90 group-hover:text-primary transition-colors">
                            M Kartikeya Datta
                        </span>
                    </motion.div>

                    {/* Desktop Navbar */}
                    <div className="hidden md:flex items-center gap-6">
                        <div className="flex items-center gap-6 bg-background/60 rounded-full px-4 py-2 border border-white/15 shadow-lg shadow-white/2">
                            {navItems.map((items, i) => (
                                <Menuitems key={items.name} index={i} href={items.href}>
                                    {items.name}
                                </Menuitems>
                            ))}
                        </div>
                        <div className="h-6 w-px bg-white/20 mx-2"></div>
                        <SocialLinks />
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
                        className="md:hidden flex flex-col gap-4 mt-4 pb-4 space-y-4"
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
                        <SocialLinks />
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
}
