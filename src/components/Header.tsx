import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

const navItems = ['Home', 'Services', 'Work', 'About', 'Contact'];

export const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollYProgress } = useScroll();
    const progressScaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navHref = (item: string) => (item === 'Home' ? '/' : `#${item.toLowerCase()}`);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
            {/* Scroll progress indicator */}
            <motion.div
                style={{ scaleX: progressScaleX }}
                className="absolute top-0 left-0 right-0 h-0.5 origin-left bg-gradient-to-r from-brand to-brand-deep"
            />

            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                {/* Logo */}
                <a href="/" className="flex items-center gap-3 cursor-pointer z-50">
                    <img src="/logo.png" alt="Empyron Logo" className="w-8 h-8 object-contain" />
                    <span className="text-xl font-bold tracking-tight text-white mb-0.5">Empyron <span className="text-gradient">Solutions</span></span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a key={item} href={navHref(item)} className="text-gray-300 hover:text-brand transition-colors text-sm font-medium uppercase tracking-wider">
                            {item}
                        </a>
                    ))}
                    <a href="#contact" className="bg-gradient-to-r from-brand to-brand-deep text-white px-6 py-2.5 rounded-full font-medium hover:scale-105 transition-all flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark">
                        Start a Project
                    </a>
                </nav>

                {/* Mobile menu toggle */}
                <button
                    className="md:hidden z-50 text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                >
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
                                href={navHref(item)}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-2xl font-bold text-gray-300 hover:text-brand transition-colors"
                            >
                                {item}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="mt-4 bg-gradient-to-r from-brand to-brand-deep text-white px-8 py-3.5 rounded-full font-bold text-lg"
                        >
                            Start a Project
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
