import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Briefcase, Linkedin } from 'lucide-react';

export const About: React.FC = () => {
    return (
        <section id="about" className="py-24 relative z-10 bg-gradient-to-b from-brand-dark to-black overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12 relative z-20 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-6">About <span className="text-gradient">Me</span></h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="glass p-10 rounded-3xl border border-white/10"
                >
                    <div className="flex flex-col md:flex-row gap-10 items-start">
                        <div className="flex-shrink-0">
                            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                                <User className="w-10 h-10 text-white" />
                            </div>
                        </div>

                        <div className="flex-1">
                            <h3 className="text-3xl font-bold text-white mb-2">Bhavya Shah</h3>
                            <p className="text-cyan-400 text-lg font-medium mb-6">Independent Data &amp; AI Engineer</p>

                            <p className="text-gray-300 leading-relaxed text-lg mb-8 font-light">
                                I&apos;m an independent Data &amp; AI Engineer operating under the Empyron Solutions brand
                                since mid-2024. I work directly with startups, small businesses, and solopreneurs
                                to build practical AI and data solutions — from RAG pipelines and ML models to
                                ETL workflows and LLM-powered applications.
                            </p>

                            <p className="text-gray-300 leading-relaxed text-lg mb-10 font-light">
                                I take a hands-on, project-based approach: you get direct access to the engineer
                                building your solution, not a layer of account managers. Every engagement is
                                tailored to your specific goals and budget.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4 text-gray-300">
                                    <div className="p-3 glass rounded-full">
                                        <MapPin className="w-5 h-5 text-cyan-500" />
                                    </div>
                                    <span className="font-medium">Based in Koblenz, Germany</span>
                                </div>
                                <div className="flex items-center gap-4 text-gray-300">
                                    <div className="p-3 glass rounded-full">
                                        <Briefcase className="w-5 h-5 text-purple-500" />
                                    </div>
                                    <span className="font-medium">Available for remote projects across Europe and India</span>
                                </div>
                                <div className="flex items-center gap-4 text-gray-300">
                                    <div className="p-3 glass rounded-full">
                                        <Linkedin className="w-5 h-5 text-cyan-500" />
                                    </div>
                                    <a
                                        href="https://www.linkedin.com/in/bhavya-ashvin-shah"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                                    >
                                        linkedin.com/in/bhavya-ashvin-shah
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
