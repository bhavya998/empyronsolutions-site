"use client";

import { motion } from "framer-motion";
import {
    Bot,
    Database,
    Cpu,
    AppWindow,
    FlaskConical,
    Cloud,
    ArrowUpRight
} from "lucide-react";

const services = [
    {
        title: "Custom AI Agents",
        description: "Autonomous agents tailored to your business workflows, capable of reasoning, planning, and executing complex tasks with minimal supervision.",
        icon: Bot,
        gradient: "from-[#39ff14] to-[#00ffff]"
    },
    {
        title: "RAG Systems",
        description: "Retrieval-Augmented Generation pipelines that securely connect LLMs to your proprietary data for accurate, context-aware insights.",
        icon: Database,
        gradient: "from-[#00ffff] to-[#b026ff]"
    },
    {
        title: "Fine-Tuning & Quantization",
        description: "Optimize open-source models (Llama, Mistral) for domain specificity while reducing inference latency and operational costs.",
        icon: Cpu,
        gradient: "from-[#b026ff] to-[#ff00ff]"
    },
    {
        title: "AI-Native Software",
        description: "End-to-end development of scalable web and mobile applications with deeply integrated generative AI capabilities and modern UI/UX.",
        icon: AppWindow,
        gradient: "from-[#39ff14] to-[#b026ff]"
    },
    {
        title: "PoC Builder",
        description: "Rapid prototyping to validate AI feasibility. Go from abstract idea to functional MVP in weeks, minimizing risk and maximizing learning.",
        icon: FlaskConical,
        gradient: "from-[#00ffff] to-[#39ff14]"
    },
    {
        title: "Multi-Cloud Deployment",
        description: "Infrastructure-agnostic deployment strategies. Run your AI solutions seamlessly across AWS, Azure, GCP, or on-premise hardware.",
        icon: Cloud,
        gradient: "from-[#b026ff] to-[#00ffff]"
    }
];

export default function ServicesSection() {
    return (
        <section id="services" className="py-20 md:py-40 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />

            <div className="container mx-auto px-6">
                <div className="mb-24 max-w-7xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold mb-8"
                    >
                        Engineering the <span className="text-gradient-accent">Future of Intelligence</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-slate-400 py-6"
                    >
                        We build robust, scalable AI infrastructure designed for enterprise deployment. From custom agents to full-stack integration.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative h-full"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl -z-10 transition-all duration-500 group-hover:opacity-100 opacity-50" />
                            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-2xl -z-10 border border-white/5 group-hover:border-white/10 transition-colors duration-300" />

                            {/* Hover Gradient Glow */}
                            <div className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500`} />

                            <div className="p-10 h-full flex flex-col items-center text-center">
                                <div className="mb-6 relative">
                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} p-[1px] flex items-center justify-center`}>
                                        <div className="w-full h-full bg-black rounded-[11px] flex items-center justify-center">
                                            <service.icon className="w-7 h-7 text-white" />
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#39ff14] transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
