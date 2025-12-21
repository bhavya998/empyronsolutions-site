"use client";

import { motion } from "framer-motion";
import { Brain, Network, Lock, Cpu, Zap, Database } from "lucide-react";

const services = [
    {
        title: "Autonomous Agent Networks",
        desc: "Deploy self-organizing swarms of AI agents capable of complex problem-solving and task execution without human intervention.",
        icon: Network,
        gradient: "from-green-900 to-green-700",
    },
    {
        title: "Vertical LLM Architecture",
        desc: "Custom-trained Large Language Models optimized for your specific industry vertical, ensuring maximum relevance and accuracy.",
        icon: Database,
        gradient: "from-green-800 to-emerald-800",
    },
    {
        title: "Zero-Trust AI Security",
        desc: "Military-grade encryption and behavioral monitoring systems designed specifically for protecting probabilistic AI workloads.",
        icon: Lock,
        gradient: "from-emerald-900 to-green-800",
    },
    {
        title: "Neural Search Systems",
        desc: "Next-generation semantic search infrastructure that understands intent and context beyond simple keyword matching.",
        icon: Brain,
        gradient: "from-green-800 to-green-700",
    },
    {
        title: "Edge Inference Nodes",
        desc: "Ultra-low latency inference deployment on edge devices, optimizing performance for real-time applications.",
        icon: Cpu,
        gradient: "from-emerald-800 to-teal-800",
    },
    {
        title: "RAG Pipelines",
        desc: "Retrieval-Augmented Generation systems that ground your AI in real-time enterprise data for hallucination-free output.",
        icon: Zap,
        gradient: "from-teal-800 to-emerald-800",
    }
];

export default function Services() {
    return (
        <section id="services" className="relative py-24 md:py-40">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">

                {/* Section Header */}
                <div className="flex flex-col items-center text-center mb-24 md:mb-40">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-900/10 border border-green-900/30 mb-8"
                    >
                        <Cpu className="w-4 h-4 text-green-500" />
                        <span className="text-xs font-bold text-green-500 uppercase tracking-widest">Core Capabilities</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 tracking-tighter"
                    >
                        Intelligent <span className="text-green-500">Infrastructure</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 max-w-2xl text-lg md:text-xl leading-relaxed"
                    >
                        A comprehensive suite of AI primitives designed to build, deploy, and scale
                        <span className="text-green-500 font-semibold"> autonomous systems</span> with enterprise-grade reliability.
                    </motion.p>
                </div>

                {/* Services Grid - FIXED ALIGNMENT & MIN-HEIGHT */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-card p-10 md:p-12 rounded-[2.5rem] flex flex-col group hover:bg-green-900/10 transition-all duration-500 border border-green-500/10 hover:border-green-500/30 shadow-lg min-h-[400px]"
                        >
                            {/* Icon - Fixed Center */}
                            <div className="flex justify-center mb-10">
                                <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${service.gradient} p-[1px] group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-green-900/20`}>
                                    <div className="w-full h-full bg-black rounded-3xl flex items-center justify-center">
                                        <service.icon className="w-10 h-10 text-green-500" />
                                    </div>
                                </div>
                            </div>

                            {/* Content - Centered */}
                            <div className="text-center flex-1 flex flex-col">
                                <h3 className="text-2xl md:text-2xl font-bold mb-6 text-slate-100 tracking-tight leading-tight">{service.title}</h3>
                                <p className="text-slate-400 text-base leading-relaxed">{service.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
