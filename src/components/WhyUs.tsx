"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Users, Globe } from "lucide-react";

const features = [
    {
        title: "99.99% Uptime",
        desc: "Carrier-grade reliability with geographically distributed failover systems.",
        icon: Zap,
        gradient: "from-green-900 to-green-700",
    },
    {
        title: "24/7 Support",
        desc: "Direct access to our AI engineering team. No chatbots, no tickets.",
        icon: Users,
        gradient: "from-green-800 to-emerald-800",
    },
    {
        title: "SOC 2 Certified",
        desc: "Rigorous third-party audits ensure we meet the highest standards.",
        icon: Shield,
        gradient: "from-emerald-900 to-green-800",
    },
    {
        title: "Global Edge",
        desc: "200+ edge nodes across 6 continents delivering sub-28ms latency.",
        icon: Globe,
        gradient: "from-green-800 to-emerald-700",
    }
];

const certifications = [
    "SOC 2 Type II",
    "HIPAA Ready",
    "GDPR Compliant",
    "ISO 27001",
    "PCI DSS Level 1"
];

export default function WhyUs() {
    return (
        <section id="why-us" className="relative py-24 md:py-40">
            {/* Decorative Background */}
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-green-900/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-[120px]" />

            <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
                {/* Section Header */}
                <div className="flex flex-col items-center text-center mb-24 md:mb-40">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-900/10 border border-green-900/30 mb-8"
                    >
                        <Shield className="w-4 h-4 text-green-500" />
                        <span className="text-xs font-bold text-green-500 uppercase tracking-widest">Security & Trust</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 tracking-tighter"
                    >
                        Built for <span className="text-green-500">Precision</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 max-w-2xl text-lg md:text-xl leading-relaxed"
                    >
                        Our infrastructure is engineered for maximum uptime and military-grade security,
                        ensuring your AI assets are protected 24/7/365.
                    </motion.p>
                </div>

                {/* Features Grid - FIXED ALIGNMENT */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-32 md:mb-40">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-card p-8 md:p-10 rounded-[2rem] flex flex-col group hover:bg-green-900/10 transition-colors duration-500 border border-green-500/10 hover:border-green-500/20 min-h-[280px]"
                        >
                            {/* Icon - Centered */}
                            <div className="flex justify-center mb-8">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-[1px] group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-green-900/20`}>
                                    <div className="w-full h-full bg-black rounded-2xl flex items-center justify-center">
                                        <feature.icon className="w-8 h-8 text-green-500" />
                                    </div>
                                </div>
                            </div>

                            {/* Content - Centered */}
                            <div className="text-center flex-1 flex flex-col">
                                <h3 className="text-xl font-bold mb-4 text-slate-100">{feature.title}</h3>
                                <p className="text-slate-400 text-sm md:text-base leading-relaxed">{feature.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Compliance Section - FIXED LAYOUT */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-12 md:p-16 lg:p-20 rounded-[3rem] relative overflow-hidden border border-green-500/20"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-green-900/5 to-transparent" />

                    {/* Fixed Two-Column Layout */}
                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Text */}
                        <div>
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 tracking-tight leading-tight">
                                Compliance <span className="text-green-500">Status</span>
                            </h3>
                            <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                                Continuous monitoring across all security vectors ensures we maintain the highest
                                standards of compliance with global regulations.
                            </p>
                        </div>

                        {/* Right Side - Badges */}
                        <div className="flex flex-wrap gap-4 justify-start md:justify-end">
                            {certifications.map((cert, i) => (
                                <div
                                    key={i}
                                    className="px-6 md:px-7 py-3 md:py-3.5 rounded-2xl bg-black/40 border border-green-500/20 text-green-500 font-bold text-sm tracking-wide hover:border-green-500/40 transition-all cursor-default whitespace-nowrap"
                                >
                                    {cert}
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
