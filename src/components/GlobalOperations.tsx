import React from 'react';
import { motion } from 'framer-motion';
import { Building, ShieldCheck, Globe } from 'lucide-react';

export const GlobalOperations: React.FC = () => {
    return (
        <section id="global" className="py-24 relative z-10 bg-gradient-to-b from-brand-dark to-black overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12 relative z-20">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-black mb-6">Global Enterprise <span className="text-gradient">Operations</span></h2>
                    <p className="text-white text-lg font-medium leading-relaxed drop-shadow-md">
                        Mission-critical AI infrastructure serving enterprise clients across North America, Europe, and Asia.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {/* North America */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="glass p-10 rounded-3xl relative group overflow-hidden border border-white/10 flex flex-col items-center text-center"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="p-4 bg-cyan-500/5 rounded-2xl border border-cyan-500/30 mb-6 relative z-10 inline-block">
                            <Building className="w-8 h-8 text-cyan-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-white tracking-tight mb-4 relative z-10">North America</h3>

                        <p className="text-gray-300 leading-relaxed font-light text-base relative z-10">
                            Driving AI adoption with scalable, high-throughput autonomous agents tailored for modern enterprise sectors.
                        </p>
                    </motion.div>

                    {/* Europe */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="glass p-10 rounded-3xl relative group overflow-hidden border border-white/10 flex flex-col items-center text-center"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="p-4 bg-purple-500/5 rounded-2xl border border-purple-500/30 mb-6 relative z-10 inline-block">
                            <ShieldCheck className="w-8 h-8 text-purple-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-white tracking-tight mb-4 relative z-10">Europe (EMEA)</h3>

                        <p className="text-gray-300 leading-relaxed font-light text-base relative z-10">
                            Delivering strictly GDPR-compliant AI pipelines designed for sovereign data handling and robust governance.
                        </p>
                    </motion.div>

                    {/* Asia */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="glass p-10 rounded-3xl relative group overflow-hidden border border-white/10 flex flex-col items-center text-center"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="p-4 bg-cyan-500/5 rounded-2xl border border-cyan-500/30 mb-6 relative z-10 inline-block">
                            <Globe className="w-8 h-8 text-cyan-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-white tracking-tight mb-4 relative z-10">Asia (APAC)</h3>

                        <p className="text-gray-300 leading-relaxed font-light text-base relative z-10">
                            Scaling rapid AI proofs-of-concept and end-to-end models into production for fast-growing global markets.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
