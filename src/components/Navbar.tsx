"use client";

import { motion } from "framer-motion";
import { Menu, X, Sparkles, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Solutions", href: "#services" },
        { name: "Case Studies", href: "#projects" },
        { name: "Security", href: "#why-us" },
        { name: "Clients", href: "#testimonials" }
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled
                    ? "py-4 bg-black/80 backdrop-blur-3xl border-b border-green-500/20 shadow-2xl shadow-green-500/10"
                    : "py-8 bg-transparent"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between max-w-7xl">
                {/* Logo - Green Theme */}
                <a href="#" className="flex items-center gap-4 group">
                    <div className="relative">
                        {/* Animated Glow Ring */}
                        <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-emerald-500 to-lime-600 rounded-3xl blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
                        <div className="relative w-14 h-14 bg-gradient-to-br from-green-600 via-emerald-500 to-lime-600 rounded-3xl flex items-center justify-center shadow-lg shadow-green-500/40 group-hover:shadow-green-500/60 transition-all duration-500 group-hover:scale-105">
                            <Sparkles className="w-7 h-7 text-black" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">EMPYRON</span>
                        <span className="text-[9px] font-bold tracking-[0.3em] text-green-500 uppercase">AI Infrastructure</span>
                    </div>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-2">
                    {navLinks.map((link, i) => (
                        <a
                            key={i}
                            href={link.href}
                            className="group relative px-6 py-3 text-sm font-semibold text-slate-400 hover:text-green-400 transition-all duration-300"
                        >
                            <span className="relative z-10">{link.name}</span>
                            <div className="absolute inset-0 bg-green-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                    ))}
                </div>

                {/* CTA & Mobile Toggle */}
                <div className="flex items-center gap-4">
                    <div className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-green-600/15 to-emerald-600/15 border border-green-500/30">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 shadow-lg shadow-green-500/50"></span>
                        </span>
                        <span className="text-[10px] font-bold text-green-400 uppercase tracking-wider">Live</span>
                    </div>

                    <button className="hidden md:flex px-8 py-3.5 btn-primary text-xs uppercase tracking-wider items-center gap-2 font-bold group">
                        Start Building
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button
                        className="lg:hidden text-slate-400 hover:text-green-400 p-3 rounded-2xl hover:bg-green-500/10 transition-all"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="lg:hidden absolute top-full left-4 right-4 mt-4 glass-card rounded-3xl overflow-hidden shadow-2xl border border-green-500/20"
                >
                    <div className="p-10 flex flex-col gap-8">
                        {navLinks.map((link, i) => (
                            <a
                                key={i}
                                href={link.href}
                                className="text-xl font-bold text-slate-300 hover:text-green-400 transition-colors flex items-center justify-between group"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                                <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                            </a>
                        ))}
                        <button className="w-full py-5 btn-primary text-sm uppercase tracking-widest font-bold mt-4">
                            Start Building
                        </button>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}
