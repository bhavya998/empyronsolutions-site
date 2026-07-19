import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

// Code-split the heavy three.js scene out of the initial bundle
const Scene3D = lazy(() => import('./Scene3D').then((module) => ({ default: module.Scene3D })));

export const Hero: React.FC = () => {
    return (
        <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            {/* 3D Background (lazy-loaded so three.js stays out of the critical path) */}
            <div className="absolute inset-0 z-0">
                <Suspense fallback={<div className="w-full h-full bg-brand-dark" />}>
                    <Scene3D />
                </Suspense>
            </div>

            {/* Premium, borderless content overlay */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex items-center pointer-events-none h-full">
                <div className="max-w-3xl flex flex-col items-start text-left mt-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="inline-flex items-center mb-6 px-4 py-2 rounded-full border border-brand/30 bg-brand/5 text-brand text-sm font-semibold tracking-[0.2em] uppercase backdrop-blur-md"
                    >
                        <span className="w-2 h-2 rounded-full bg-brand mr-3 animate-pulse"></span>
                        Independent Data &amp; AI Consulting
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-6xl md:text-8xl lg:text-[7rem] font-black leading-[1.05] tracking-tighter text-white mb-6"
                    >
                        Architecting <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-deep">
                            Intelligence.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="text-lg md:text-2xl text-white drop-shadow-[0_5px_15px_rgba(0,0,0,1)] bg-black/60 md:bg-black/20 backdrop-blur-md p-5 rounded-2xl border border-white/10 md:border-transparent mb-12 max-w-2xl font-semibold leading-relaxed"
                    >
                        I build AI and data solutions for startups, small businesses, and solopreneurs. No bloated teams, no inflated timelines — just an engineer who ships.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col sm:flex-row gap-6 pointer-events-auto"
                    >
                        <a href="#work" className="group relative px-8 py-5 bg-white text-slate-950 font-bold rounded-full overflow-hidden transition-all hover:scale-105 flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(255,255,255,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark">
                            <span className="relative z-10 text-lg">See My Work</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                            <div className="absolute inset-0 bg-gradient-to-r from-brand to-brand-deep opacity-0 group-hover:opacity-20 transition-opacity"></div>
                        </a>
                        <a href="#contact" className="px-8 py-5 bg-transparent border border-slate-700 text-white font-bold rounded-full hover:bg-white/5 hover:border-slate-500 transition-all text-center text-lg shadow-[0_0_30px_rgba(0,0,0,0.5)] backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark">
                            Start a Project
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Soft fade out bottom edge */}
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent z-10 pointer-events-none"></div>

            {/* Scroll indicator */}
            <motion.a
                href="#services"
                aria-label="Scroll to services"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-gray-400 hover:text-brand transition-colors pointer-events-auto"
            >
                <span className="text-xs font-medium tracking-[0.25em] uppercase">Scroll</span>
                <motion.span
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <ChevronDown className="w-5 h-5" />
                </motion.span>
            </motion.a>
        </section>
    );
};
