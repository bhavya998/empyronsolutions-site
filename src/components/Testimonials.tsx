"use client";

import { motion } from "framer-motion";
import { Star, CheckCircle2 } from "lucide-react";

const testimonials = [
    {
        name: "Dr. Sarah Chen",
        role: "CTO",
        company: "Nexus Health",
        content: "Empyron's autonomous agent network transformed our document processing pipeline. We achieved a 68% increase in throughput.",
        rating: 5,
        initials: "SC",
        gradient: "from-green-900 to-green-700",
    },
    {
        name: "Marcus Thorne",
        role: "VP Infrastructure",
        company: "Global Logistics",
        content: "The vertical LLM pipeline handled our proprietary logistics data with surgical precision. Zero data leakage, seamless integration.",
        rating: 5,
        initials: "MT",
        gradient: "from-green-800 to-emerald-900",
    },
    {
        name: "Elena Rodriguez",
        role: "Head of Eng",
        company: "FinTech Alpha",
        content: "For mission-critical financial systems, Empyron's infrastructure is the only choice. Sub-40ms edge inference is revolutionary.",
        rating: 5,
        initials: "ER",
        gradient: "from-emerald-900 to-green-800",
    }
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="relative py-24 md:py-40">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
                {/* Section Header */}
                <div className="flex flex-col items-center text-center mb-24 md:mb-40">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-900/10 border border-green-900/30 mb-8"
                    >
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span className="text-xs font-bold text-green-500 uppercase tracking-widest">Client Success</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 tracking-tight"
                    >
                        Trusted by <span className="text-green-500">Leaders</span>
                    </motion.h2>
                </div>

                {/* Testimonials Grid - FIXED ALIGNMENT */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
                    {testimonials.map((testimonial, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className="glass-card p-10 md:p-12 rounded-[2.5rem] flex flex-col border border-green-500/10 hover:border-green-500/30 transition-all duration-300 bg-black/40 min-h-[400px]"
                        >
                            {/* Top Content */}
                            <div className="flex-1">
                                {/* Stars */}
                                <div className="flex gap-1 mb-8 justify-start">
                                    {[...Array(testimonial.rating)].map((_, s) => (
                                        <Star key={s} className="w-5 h-5 fill-green-600 text-green-600" />
                                    ))}
                                </div>

                                {/* Quote */}
                                <blockquote className="text-slate-300 text-lg md:text-xl leading-relaxed font-medium">
                                    "{testimonial.content}"
                                </blockquote>
                            </div>

                            {/* Author - Fixed to Bottom */}
                            <div className="flex items-center gap-4 pt-10 mt-10 border-t border-green-900/20">
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${testimonial.gradient} p-[1px] shrink-0`}>
                                    <div className="w-full h-full bg-black rounded-2xl flex items-center justify-center">
                                        <span className="text-green-500 font-bold text-base">{testimonial.initials}</span>
                                    </div>
                                </div>

                                <div className="flex-1 min-w-0">
                                    <div className="font-bold text-slate-200 text-base truncate">{testimonial.name}</div>
                                    <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mt-1 truncate">{testimonial.role}</div>
                                    <div className="text-sm text-green-600 font-bold mt-1 truncate">{testimonial.company}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
