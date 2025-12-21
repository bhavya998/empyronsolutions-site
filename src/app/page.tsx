"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import FloatingShape from "@/components/FloatingShape";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { ArrowRight, Play, Sparkles, TrendingUp, Zap, Shield, Globe } from "lucide-react";
import { useRef } from "react";

export default function Home() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.95]);
    const y = useTransform(scrollYProgress, [0, 0.6], [0, 100]);

    return (
        <main className="relative min-h-screen selection:bg-green-500/30">
            <Navbar />

            {/* HERO SECTION */}
            <section ref={targetRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-20">
                {/* 3D Neural Field Background */}
                <div className="absolute inset-0 z-0">
                    <FloatingShape />
                </div>

                {/* Hero Content */}
                <motion.div
                    style={{ opacity, scale, y }}
                    className="relative z-10 w-full max-w-[90rem] mx-auto px-6 text-center"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col items-center"
                    >
                        {/* Premium Badge */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-green-500/10 border border-green-500/20 backdrop-blur-md mb-12 shadow-[0_0_20px_rgba(0,255,65,0.1)]"
                        >
                            <Sparkles className="w-4 h-4 text-green-400" />
                            <span className="text-sm font-bold text-green-300 uppercase tracking-widest">Next-Gen AI Infrastructure</span>
                        </motion.div>

                        {/* Headline */}
                        <h1 className="text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black mb-10 tracking-tighter leading-[0.9]">
                            <span className="block text-slate-100">Building the</span>
                            <span className="block shimmer text-green-500">Neural Future</span>
                        </h1>

                        {/* Subheadline */}
                        <p className="max-w-3xl mx-auto text-slate-400 text-xl md:text-2xl font-medium leading-relaxed mb-14">
                            Deploy <span className="text-green-400 font-semibold">autonomous agent networks</span> and
                            enterprise LLM infrastructure engineered for infinite scale.
                        </p>

                        {/* Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="flex flex-col sm:flex-row gap-6 mb-24"
                        >
                            <button className="group px-10 py-5 btn-primary text-base uppercase tracking-widest flex items-center justify-center gap-3 font-bold hover:scale-105 transition-transform">
                                Deploy Now
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="group px-10 py-5 btn-secondary text-base uppercase tracking-widest flex items-center justify-center gap-3 font-bold hover:scale-105 transition-transform">
                                <div className="w-8 h-8 rounded-full border border-green-500/50 flex items-center justify-center">
                                    <Play className="w-3 h-3 text-green-400 ml-0.5" />
                                </div>
                                Live Demo
                            </button>
                        </motion.div>

                        {/* Stats Grid */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto w-full border-t border-green-500/10 pt-12"
                        >
                            {[
                                { label: "Uptime SLA", val: "99.99%", icon: Zap },
                                { label: "Edge Nodes", val: "200+", icon: Globe },
                                { label: "Latency", val: "<28ms", icon: TrendingUp },
                                { label: "Compliance", val: "SOC 2", icon: Shield }
                            ].map((stat, i) => (
                                <div key={i} className="flex flex-col items-center gap-3 group">
                                    <stat.icon className="w-6 h-6 text-green-500/50 group-hover:text-green-400 transition-colors" />
                                    <div className="text-3xl font-black text-slate-200">{stat.val}</div>
                                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>

            {/* CONTENT SECTIONS - MAX SPACED */}
            <div className="relative z-10 bg-black/30 backdrop-blur-[2px]">

                {/* Spacer - Increased to h-40 */}
                <div className="h-32 md:h-40 bg-gradient-to-b from-transparent via-green-900/5 to-transparent" />

                <section className="relative">
                    <Services />
                </section>

                <div className="h-32 md:h-40" />

                <section className="relative">
                    <Projects />
                </section>

                <div className="h-32 md:h-40" />

                <section className="relative">
                    <WhyUs />
                </section>

                <div className="h-32 md:h-40" />

                <section className="relative">
                    <Testimonials />
                </section>

                <div className="h-32 md:h-40" />

                <section className="relative">
                    <CTA />
                </section>

                <Footer />

                {/* EPIC FINALE - Full Width Animation BELOW Footer */}
                <div className="w-full py-16 bg-black overflow-hidden border-t border-green-900/30">
                    <motion.div
                        className="flex whitespace-nowrap"
                        initial={{ x: 0 }}
                        animate={{ x: "-50%" }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    >
                        {[...Array(4)].map((_, i) => (
                            <h2
                                key={i}
                                className="text-[13vw] font-black uppercase text-transparent px-16 leading-none tracking-tighter"
                                style={{
                                    WebkitTextStroke: "1px #15803d",
                                    fontFamily: "var(--font-sans)"
                                }}
                            >
                                EMPYRON SOLUTIONS <span className="text-green-600/20">•</span>
                            </h2>
                        ))}
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
