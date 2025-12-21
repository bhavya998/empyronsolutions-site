"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Users, DollarSign, Database, Zap } from "lucide-react";

const projects = [
    {
        category: "Legal Infrastructure",
        title: "Autonomous Legal Discovery",
        company: "Tier-1 Law Firm",
        desc: "Deployed a multi-agent RAG system processing 18M+ legal documents with cryptographic verification.",
        metrics: [
            { label: "Reduction", value: "78%", icon: TrendingUp },
            { label: "Savings", value: "$15M", icon: DollarSign },
            { label: "Compliance", value: "100%", icon: Users },
        ],
        gradient: "from-green-800 to-green-600",
        stats: ["18M+ Docs", "Zero Leakage", "Real-time"],
    },
    {
        category: "Supply Chain",
        title: "Predictive Logistics",
        company: "Global Manufacturing",
        desc: "Built a distributed agent network managing 4,200+ nodes across 3 continents. Real-time demand forecasting.",
        metrics: [
            { label: "Efficiency", value: "42%", icon: TrendingUp },
            { label: "Impact", value: "$280M", icon: DollarSign },
            { label: "Nodes", value: "4.2k+", icon: Users },
        ],
        gradient: "from-emerald-800 to-teal-700",
        stats: ["3 Continents", "Real-time", "99.98% SLA"],
    },
];

export default function Projects() {
    return (
        <section id="projects" className="relative py-24 md:py-40">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">

                {/* Section Header */}
                <div className="flex flex-col items-center text-center mb-32 md:mb-48">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-900/10 border border-green-900/30 mb-8"
                    >
                        <span className="text-xs font-bold text-green-500 uppercase tracking-widest">Major Deployments</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-black mb-10 tracking-tighter"
                    >
                        Enterprise <span className="shimmer">Impact</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl"
                    >
                        Mission-critical AI infrastructure deployed at organizations where
                        precision and reliability are the only acceptable standards.
                    </motion.p>
                </div>

                {/* Projects - FIXED LAYOUT */}
                <div className="space-y-32 md:space-y-64">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
                        >
                            {/* Content Side */}
                            <div className={`space-y-8 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                                {/* Category Badge */}
                                <div>
                                    <span className="inline-block text-sm font-bold text-green-500 uppercase tracking-widest border-l-2 border-green-600 pl-4">{project.category}</span>
                                </div>

                                {/* Title */}
                                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter leading-tight text-white">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-slate-400 text-lg md:text-xl leading-relaxed border-b border-green-900/30 pb-8">
                                    {project.desc}
                                </p>

                                {/* Metrics Grid */}
                                <div className="grid grid-cols-3 gap-6">
                                    {project.metrics.map((metric, m) => (
                                        <div key={m} className="flex flex-col">
                                            <div className="text-3xl md:text-4xl font-black text-green-400 mb-2">{metric.value}</div>
                                            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">{metric.label}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA Button */}
                                <button className="group flex items-center gap-3 text-green-400 font-bold uppercase tracking-wider text-sm hover:gap-4 transition-all mt-4">
                                    Read Case Study
                                    <ArrowUpRight className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Visual Card Side */}
                            <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                                <div className="glass-card rounded-[3rem] p-12 md:p-16 aspect-[4/3] relative overflow-hidden group border border-green-500/10 hover:border-green-500/20 transition-all">
                                    {/* Subtle Background */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10`} />

                                    {/* Fixed Content Layout */}
                                    <div className="relative z-10 flex flex-col justify-between h-full">
                                        {/* Company Badge - Top */}
                                        <div>
                                            <div className="inline-flex px-5 py-2.5 rounded-full bg-black/60 border border-green-500/30 text-xs font-bold text-green-400 uppercase tracking-wide">
                                                {project.company}
                                            </div>
                                        </div>

                                        {/* Stats Badges - Bottom */}
                                        <div className="grid grid-cols-3 gap-3">
                                            {project.stats.map((stat, s) => (
                                                <div key={s} className="px-3 py-2.5 rounded-xl bg-black/60 backdrop-blur-md border border-green-500/20 text-center">
                                                    <div className="text-[10px] md:text-xs font-bold text-green-400 uppercase tracking-wider whitespace-nowrap">{stat}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Watermark Icon */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04]">
                                        {i === 0 ? (
                                            <Database className="w-80 h-80 text-green-500" />
                                        ) : (
                                            <Zap className="w-80 h-80 text-green-500" />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
