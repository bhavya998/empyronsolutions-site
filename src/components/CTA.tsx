"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, MessageSquare } from "lucide-react";

export default function CTA() {
    return (
        <section className="relative py-24 md:py-40">
            {/* Decorative Gradients */}
            <div className="absolute -top-40 left-0 w-[600px] h-[600px] bg-green-900/10 rounded-full blur-[120px]" />
            <div className="absolute -bottom-40 right-0 w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-[120px]" />

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-16 md:p-32 rounded-[4rem] relative overflow-hidden group border border-green-500/20"
                >
                    {/* Subtle Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 via-black to-emerald-900/10 opacity-40" />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center text-center">
                        {/* Icons */}
                        <div className="flex items-center gap-8 mb-16 opacity-100">
                            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-green-800 to-green-600 border border-green-500/30 flex items-center justify-center shadow-lg shadow-green-900/20">
                                <Calendar className="w-10 h-10 text-white" />
                            </div>
                            <div className="w-2 h-2 rounded-full bg-green-500" />
                            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-emerald-800 to-emerald-600 border border-emerald-500/30 flex items-center justify-center shadow-lg shadow-emerald-900/20">
                                <MessageSquare className="w-10 h-10 text-white" />
                            </div>
                        </div>

                        {/* Headline */}
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-12 tracking-tighter leading-[0.9] max-w-5xl">
                            Ready to Deploy
                            <br />
                            <span className="text-green-500">Your Intelligence?</span>
                        </h2>

                        {/* Description */}
                        <p className="text-slate-400 text-xl md:text-2xl leading-relaxed mb-20 max-w-3xl">
                            Join the global infrastructure network architected for
                            <span className="text-green-500 font-semibold"> high-frequency autonomous operations</span>.
                            Let's engineer your competitive advantage.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-6 mb-16">
                            <button className="px-12 py-6 btn-primary text-base uppercase tracking-widest flex items-center justify-center gap-3 group font-bold hover:scale-105 transition-transform shadow-green-500/20">
                                Schedule Consultation
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-12 py-6 btn-secondary text-base uppercase tracking-widest flex items-center justify-center gap-3 font-bold hover:scale-105 transition-transform">
                                Talk to Engineering
                            </button>
                        </div>

                        {/* Status */}
                        <div className="flex items-center gap-3 text-sm px-6 py-3 rounded-full bg-green-900/20 border border-green-500/30">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-xs font-bold text-green-500 uppercase tracking-widest">Now Accepting Q1 2026 Engagements</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
