import React from 'react';
import { motion } from 'framer-motion';
import { FileText, BarChart3, Database } from 'lucide-react';

const cases = [
    {
        icon: <FileText className="w-7 h-7 text-cyan-500" />,
        tag: 'RAG Pipeline',
        title: 'Document Intelligence for a Legal Practice',
        desc: 'Built a retrieval-augmented generation system that lets a law firm query thousands of case files and contracts in natural language. Replaced hours of manual document search with instant, cited answers.',
        result: '80% reduction in document search time',
    },
    {
        icon: <BarChart3 className="w-7 h-7 text-purple-500" />,
        tag: 'ML Forecasting',
        title: 'Demand Forecasting for a D2C Brand',
        desc: 'Built a weekly SKU-level demand forecasting model for a direct-to-consumer ecommerce brand. Integrated predictions into their Shopify inventory workflow to reduce stockouts and overstock.',
        result: '30% reduction in inventory holding costs',
    },
    {
        icon: <Database className="w-7 h-7 text-cyan-500" />,
        tag: 'Data Engineering',
        title: 'Multi-Channel Analytics Pipeline',
        desc: 'Designed and deployed ETL pipelines unifying Shopify, Meta Ads, and Google Analytics data into a single reporting layer. Automated weekly dashboards that previously took 4+ hours of manual Excel work.',
        result: '4 hours/week saved, now real-time',
    },
];

export const CaseStudies: React.FC = () => {
    return (
        <section id="work" className="py-24 relative z-10 bg-gradient-to-b from-brand-dark to-black overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-6">Selected <span className="text-gradient">Work</span></h2>
                    <p className="text-gray-400 text-lg">Real projects. Real clients. Real results.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {cases.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            className="glass p-8 rounded-2xl flex flex-col group hover:border-white/20 transition-all"
                        >
                            <div className="mb-4 inline-block p-3 rounded-xl bg-white/5 border border-white/10">
                                {item.icon}
                            </div>
                            <span className="text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-3">{item.tag}</span>
                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">{item.desc}</p>
                            <div className="mt-auto pt-4 border-t border-white/10">
                                <p className="text-sm font-medium text-gradient">{item.result}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
