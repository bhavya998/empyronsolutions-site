import React from 'react';
import { Scene3D } from './Scene3D';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
    return (
        <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0">
                <Scene3D />
            </div>

            {/* Premium, borderless content overlay */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex items-center pointer-events-none h-full">
                <div className="max-w-3xl flex flex-col items-start text-left mt-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="inline-flex items-center mb-6 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-500 text-sm font-semibold tracking-[0.2em] uppercase backdrop-blur-md"
                    >
                        <span className="w-2 h-2 rounded-full bg-cyan-500 mr-3 animate-pulse"></span>
                        Next-Gen AI & Data
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-6xl md:text-8xl lg:text-[7rem] font-black leading-[1.05] tracking-tighter text-white mb-6"
                    >
                        Architecting <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 drop-shadow-[0_0_40px_rgba(0,240,255,0.5)]">
                            Intelligence.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="text-lg md:text-2xl text-white drop-shadow-[0_5px_15px_rgba(0,0,0,1)] bg-black/60 md:bg-black/20 backdrop-blur-md p-5 rounded-2xl border border-white/10 md:border-transparent mb-12 max-w-2xl font-semibold leading-relaxed"
                    >
                        Empowering your enterprise with cutting-edge AI models, predictive data analytics, and highly scalable technical architectures.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col sm:flex-row gap-6 pointer-events-auto"
                    >
                        <a href="#services" className="group relative px-8 py-5 bg-white text-slate-950 font-bold rounded-full overflow-hidden transition-all hover:scale-105 flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                            <span className="relative z-10 text-lg">Explore Services</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                        </a>
                        <a href="#contact" className="px-8 py-5 bg-transparent border border-slate-700 text-white font-bold rounded-full hover:bg-white/5 hover:border-slate-500 transition-all text-center text-lg shadow-[0_0_30px_rgba(0,0,0,0.5)] backdrop-blur-sm">
                            Transform your workforce with AI
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Soft fade out bottom edge */}
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent z-10 pointer-events-none"></div>
        </section>
    );
};
