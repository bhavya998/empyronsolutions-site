import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { value: '7', label: 'Projects Delivered', desc: 'AI/ML solutions shipped for paying clients since mid-2024.' },
    { value: '6', label: 'Industries', desc: 'Fintech, ecommerce, logistics, legal, health, SaaS.' },
    { value: '80%', label: 'Client Retention', desc: 'Most clients return for additional projects and ongoing work.' },
    { value: '3-6', label: 'Weeks to Ship', desc: 'Average timeline from kickoff to production deployment.' },
];

export const Stats: React.FC = () => {
    return (
        <section id="stats" className="py-24 relative z-10 bg-brand-dark overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-6">Track <span className="text-gradient">Record</span></h2>
                    <p className="text-gray-400 text-lg">Solo practice. Real outcomes.</p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="glass p-8 rounded-2xl text-center"
                        >
                            <div className="text-5xl font-black text-gradient mb-3">{stat.value}</div>
                            <p className="text-white font-bold text-sm mb-2">{stat.label}</p>
                            <p className="text-gray-500 text-sm leading-relaxed">{stat.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
