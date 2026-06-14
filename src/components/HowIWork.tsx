import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Search, Cpu, Rocket } from 'lucide-react';

const steps = [
    {
        icon: <MessageSquare className="w-7 h-7 text-cyan-500" />,
        step: '01',
        title: 'Discovery Call',
        desc: 'Free 30-minute call. You explain the problem, I assess the data, and I tell you honestly what\'s achievable — even if the answer is "AI isn\'t the right tool here."',
        badge: '30 min',
    },
    {
        icon: <Search className="w-7 h-7 text-purple-500" />,
        step: '02',
        title: 'Proposal & Scoping',
        desc: 'Clear scope, timeline, and pricing. Fixed-price or time-and-materials. No hidden costs, no scope creep without mutual agreement. You know exactly what you\'re getting before we start.',
        badge: '2-3 days',
    },
    {
        icon: <Cpu className="w-7 h-7 text-cyan-500" />,
        step: '03',
        title: 'Build & Iterate',
        desc: 'Weekly demos with real progress. Feedback incorporated immediately. No waiting weeks to discover we\'re misaligned. You see the system take shape in real time.',
        badge: '2-8 weeks',
    },
    {
        icon: <Rocket className="w-7 h-7 text-purple-500" />,
        step: '04',
        title: 'Ship & Support',
        desc: 'Production deployment with documentation, monitoring, and handoff. I stay available post-launch for fixes, tweaks, and future iterations. Not a one-and-done handoff.',
        badge: 'Ongoing',
    },
];

export const HowIWork: React.FC = () => {
    return (
        <section id="process" className="py-24 relative z-10 bg-brand-dark overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-6">How I <span className="text-gradient">Work</span></h2>
                    <p className="text-gray-400 text-lg">Transparent process. No black boxes, no surprises.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="glass p-8 rounded-2xl relative group hover:border-white/20 transition-all"
                        >
                            <div className="text-5xl font-black text-white/5 absolute top-4 right-6 select-none">{step.step}</div>
                            <div className="mb-5 inline-block p-3 rounded-xl bg-white/5 border border-white/10">{step.icon}</div>
                            <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">{step.desc}</p>
                            <span className="text-xs font-medium text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full">{step.badge}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
