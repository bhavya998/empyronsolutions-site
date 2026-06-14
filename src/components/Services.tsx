import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Database, BarChart3, ShieldCheck, Cpu, Network } from 'lucide-react';

const services = [
    {
        icon: <Brain className="w-8 h-8 text-cyan-500" />,
        title: 'Custom AI & ML Models',
        desc: 'Custom ML models built for your data and your problem — churn prediction, demand forecasting, classification, recommendation systems.',
    },
    {
        icon: <Network className="w-8 h-8 text-purple-500" />,
        title: 'Agentic RAG Pipelines',
        desc: 'Let users query your documents in plain English. I build RAG systems that turn PDFs, manuals, and knowledge bases into conversational intelligence.',
    },
    {
        icon: <Cpu className="w-8 h-8 text-cyan-500" />,
        title: 'End-to-End AI Inferencing',
        desc: 'Integrate GPT-4, Claude, or open-source models into your product. Fine-tuned for your domain, deployed at a cost that makes sense for your scale.',
    },
    {
        icon: <Database className="w-8 h-8 text-purple-500" />,
        title: 'Data Engineering',
        desc: 'Clean, reliable pipelines that actually run. I unify your messy data sources — CRMs, databases, APIs — into one trustworthy source of truth.',
    },
    {
        icon: <BarChart3 className="w-8 h-8 text-cyan-500" />,
        title: 'Industrial Predictive Analytics',
        desc: 'Stop guessing. Forecasting models that give you data-driven answers on revenue, customer churn, and demand — built for your specific business context.',
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-purple-500" />,
        title: 'Cognitive Enterprise Automation',
        desc: 'Automate repetitive work. AI agents that handle triage, data entry, and multi-step processes — freeing you to focus on decisions, not drudgery.',
    },
];

export const Services: React.FC = () => {
    return (
        <section id="services" className="py-24 relative z-10 bg-brand-dark overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 relative z-20">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-black mb-6">What I <span className="text-gradient">Build</span></h2>
                    <p className="text-gray-400 text-lg">
                        Practical AI and data solutions — no buzzwords, no black boxes.
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
