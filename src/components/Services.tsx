import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Database, BarChart3, ShieldCheck, Cpu, Network } from 'lucide-react';

const services = [
    {
        icon: <Brain className="w-8 h-8 text-cyan-500" />,
        title: 'Custom AI & ML Models',
        desc: 'Development and bespoke fine-tuning of machine learning algorithms mapped precisely to your industry requirements.',
    },
    {
        icon: <Network className="w-8 h-8 text-purple-500" />,
        title: 'Agentic RAG Pipelines',
        desc: 'Intelligent retrieval-augmented generation systems that securely query your proprietary manuals, docs, and datasets.',
    },
    {
        icon: <Cpu className="w-8 h-8 text-cyan-500" />,
        title: 'End-to-End AI Inferencing',
        desc: 'Full-scale AI model inferencing and seamless enterprise deployment utilizing state-of-the-art frontier models.',
    },
    {
        icon: <Database className="w-8 h-8 text-purple-500" />,
        title: 'Data Engineering',
        desc: 'Scalable, cloud-agnostic ETLs and robust architecture designed to integrate and unify diverse enterprise data sources.',
    },
    {
        icon: <BarChart3 className="w-8 h-8 text-cyan-500" />,
        title: 'Industrial Predictive Analytics',
        desc: 'Actionable forecasting and optimization models to drive operational efficiency, mitigate risks, and maximize ROI.',
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-purple-500" />,
        title: 'Cognitive Enterprise Automation',
        desc: 'Build PoCs and deploy resilient, autonomous AI agents orchestrating complex multi-step workflows across your business systems.',
    },
];

export const Services: React.FC = () => {
    return (
        <section id="services" className="py-24 relative z-10 bg-brand-dark overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 relative z-20">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-black mb-6">Capabilities & <span className="text-gradient">Innovations</span></h2>
                    <p className="text-gray-400 text-lg">
                        We architect intelligence into every facet of your business workflow.
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
