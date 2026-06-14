import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Database, BarChart3, ShieldCheck, Cpu, Network } from 'lucide-react';

const services = [
    {
        icon: <Brain className="w-8 h-8 text-cyan-500" />,
        title: 'Custom AI & ML Models',
        desc: 'Custom development and fine-tuning of ML models to solve real problems — from churn prediction to recommendation engines.',
    },
    {
        icon: <Network className="w-8 h-8 text-purple-500" />,
        title: 'Agentic RAG Pipelines',
        desc: 'Retrieval-augmented generation systems that let you chat with your own documents, manuals, and knowledge bases.',
    },
    {
        icon: <Cpu className="w-8 h-8 text-cyan-500" />,
        title: 'End-to-End AI Inferencing',
        desc: 'Deploy and integrate state-of-the-art LLMs and AI models into your existing workflows and products.',
    },
    {
        icon: <Database className="w-8 h-8 text-purple-500" />,
        title: 'Data Engineering',
        desc: 'Clean, reliable ETL pipelines and data architecture to unify your data sources and make them analysis-ready.',
    },
    {
        icon: <BarChart3 className="w-8 h-8 text-cyan-500" />,
        title: 'Industrial Predictive Analytics',
        desc: 'Forecasting and optimization models that help you make data-driven decisions and reduce operational risk.',
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-purple-500" />,
        title: 'Cognitive Enterprise Automation',
        desc: 'Build proofs-of-concept and deploy AI agents that automate repetitive multi-step tasks across your tools and systems.',
    },
];

export const Services: React.FC = () => {
    return (
        <section id="services" className="py-24 relative z-10 bg-brand-dark overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 relative z-20">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-black mb-6">Capabilities & <span className="text-gradient">Innovations</span></h2>
                    <p className="text-gray-400 text-lg">
                        I build practical AI and data solutions tailored to your business needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="glass p-8 rounded-2xl relative group overflow-hidden"
                        >
                            {/* Subtle hover gradient background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="mb-6 inline-block p-4 rounded-xl bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed font-light">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
