"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, ArrowRight, Sparkles, ExternalLink, Send } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative py-32 md:py-40 border-t border-green-500/10 bg-gradient-to-b from-black to-slate-950 overflow-hidden">
            {/* Decorative Gradient Orb */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-t from-green-600/10 via-emerald-600/5 to-transparent rounded-full blur-3xl" />

            <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
                {/* Newsletter Section - FIXED */}
                <div className="mb-32">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-600/10 border border-green-500/30 mb-10"
                        >
                            <Send className="w-4 h-4 text-green-400" />
                            <span className="text-xs font-bold text-green-400 uppercase tracking-wider">Stay Updated</span>
                        </motion.div>

                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight leading-tight">
                            Get <span className="text-gradient">AI Infrastructure</span> Insights
                        </h3>
                        <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
                            Join 10,000+ technical leaders receiving monthly deep-dives on autonomous agents,
                            LLM architecture, and enterprise AI deployment strategies.
                        </p>

                        {/* Newsletter Form - FIXED RESPONSIVE */}
                        <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                            <input
                                type="email"
                                placeholder="your.email@company.com"
                                className="flex-1 bg-green-500/5 border border-green-500/30 rounded-2xl px-6 md:px-8 py-5 md:py-6 text-base text-green-100 placeholder:text-slate-600 focus:outline-none focus:border-green-500/60 focus:bg-green-500/10 transition-all backdrop-blur-xl"
                            />
                            <button className="px-10 md:px-12 py-5 md:py-6 bg-gradient-to-r from-green-600 to-emerald-500 rounded-2xl font-bold text-black hover:scale-105 transition-transform shadow-lg shadow-green-500/30 hover:shadow-green-500/50 flex items-center justify-center gap-2 group whitespace-nowrap">
                                Subscribe
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent mb-24" />

                {/* Main Footer Grid - FIXED LAYOUT */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 md:gap-16 mb-20">
                    {/* Brand Column */}
                    <div className="lg:col-span-5">
                        <div className="flex items-center gap-4 mb-8 group">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-emerald-500 to-lime-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity" />
                                <div className="relative w-16 h-16 bg-gradient-to-br from-green-600 via-emerald-500 to-lime-600 rounded-3xl flex items-center justify-center shadow-lg">
                                    <Sparkles className="w-8 h-8 text-black" />
                                </div>
                            </div>
                            <span className="text-3xl font-black bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">EMPYRON</span>
                        </div>
                        <p className="text-slate-400 leading-relaxed mb-10 text-base">
                            Building the infrastructure layer for autonomous intelligence.
                            <span className="text-green-400 font-semibold"> Enterprise-grade AI systems </span>
                            designed for mission-critical operations at global scale.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            {[
                                { Icon: Twitter, href: "#", label: "Twitter", gradient: "from-green-400 to-emerald-400" },
                                { Icon: Linkedin, href: "#", label: "LinkedIn", gradient: "from-emerald-600 to-green-400" },
                                { Icon: Github, href: "#", label: "GitHub", gradient: "from-lime-400 to-green-500" },
                                { Icon: Mail, href: "#", label: "Email", gradient: "from-teal-500 to-emerald-500" }
                            ].map(({ Icon, href, label, gradient }, i) => (
                                <a
                                    key={i}
                                    href={href}
                                    aria-label={label}
                                    className="group relative w-14 h-14 rounded-2xl glass border border-green-500/20 flex items-center justify-center hover:scale-110 transition-all duration-300"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity`} />
                                    <Icon className="w-6 h-6 text-slate-400 group-hover:text-green-400 transition-colors relative z-10" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Solutions */}
                    <div className="lg:col-span-2">
                        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-green-100 mb-6">Solutions</h4>
                        <ul className="space-y-4">
                            {["Agent Networks", "Vertical LLMs", "RAG Systems", "Edge Inference", "Neural Search", "AI Orchestration"].map((item, i) => (
                                <li key={i}>
                                    <a href="#" className="group text-slate-400 hover:text-green-400 transition-colors text-sm flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-green-500 transition-colors" />
                                        <span>{item}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="lg:col-span-2">
                        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-green-100 mb-6">Company</h4>
                        <ul className="space-y-4">
                            {["About", "Research Lab", "Careers", "Partners", "Press Kit", "Contact"].map((item, i) => (
                                <li key={i}>
                                    <a href="#" className="group text-slate-400 hover:text-green-400 transition-colors text-sm flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-green-500 transition-colors" />
                                        <span>{item}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="lg:col-span-3">
                        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-green-100 mb-6">Resources</h4>
                        <ul className="space-y-4">
                            {[
                                { name: "Documentation", badge: "Live" },
                                { name: "API Reference", badge: "v2.0" },
                                { name: "System Status", badge: "99.99%" },
                                { name: "Security Portal", badge: "SOC 2" },
                                { name: "Developer Blog", badge: null },
                                { name: "Community", badge: "10k+" }
                            ].map((item, i) => (
                                <li key={i}>
                                    <a href="#" className="group text-slate-400 hover:text-green-400 transition-colors text-sm flex items-center gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-green-500 transition-colors shrink-0" />
                                        <span className="flex-1">{item.name}</span>
                                        {item.badge && (
                                            <span className="text-[9px] font-bold px-2.5 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/30 whitespace-nowrap">
                                                {item.badge}
                                            </span>
                                        )}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar - FIXED RESPONSIVE */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-green-500/10 gap-8">
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        {/* Live Status */}
                        <div className="flex items-center gap-3 px-5 py-3 rounded-full glass border border-green-500/30">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 shadow-lg shadow-green-500/50"></span>
                            </span>
                            <span className="text-xs font-bold text-green-400 uppercase tracking-wider whitespace-nowrap">All Systems Operational</span>
                        </div>

                        {/* Copyright */}
                        <div className="text-sm text-slate-600 uppercase tracking-wider font-semibold whitespace-nowrap">
                            © {currentYear} Empyron AI · All Rights Reserved
                        </div>
                    </div>

                    {/* Legal Links */}
                    <div className="flex gap-8 text-sm text-slate-600 uppercase tracking-wider font-semibold">
                        <a href="#" className="hover:text-green-400 transition-colors whitespace-nowrap">Privacy</a>
                        <a href="#" className="hover:text-green-400 transition-colors whitespace-nowrap">Terms</a>
                        <a href="#" className="hover:text-green-400 transition-colors whitespace-nowrap">Security</a>
                        <a href="#" className="hover:text-green-400 transition-colors flex items-center gap-1.5 whitespace-nowrap">
                            Status
                            <ExternalLink className="w-3 h-3" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
