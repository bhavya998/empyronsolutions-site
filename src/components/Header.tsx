import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = ['Home', 'Services', 'About', 'Contact'];

export const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                {/* Logo */}
                <a href="/" className="flex items-center gap-3 cursor-pointer z-50">
                    <img src="/logo.png" alt="Empyron Logo" className="w-8 h-8 object-contain" />
                    <span className="text-xl font-bold tracking-tight text-white mb-0.5">Empyron <span className="text-gradient">Solutions</span></span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a key={item} href={item === 'Home' ? '/' : `#${item.toLowerCase()}`} className="text-gray-300 hover:text-cyan-500 transition-colors text-sm font-medium uppercase tracking-wider">
                            {item}
                        </a>
                    ))}
                    <a href="#contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2.5 rounded-full font-medium hover:scale-105 hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all flex items-center justify-center">
                        Get Started
                    </a>
                </nav>

                {/* Mobile menu toggle */}
                <button className="md:hidden z-50 text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-0 left-0 w-full h-screen bg-brand-dark/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
                    >
                        {navItems.map((item) => (
                            <a
                                key={item}
                                href={item === 'Home' ? '/' : `#${item.toLowerCase()}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-2xl font-bold text-gray-300 hover:text-cyan-500 transition-colors"
                            >
                                {item}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
