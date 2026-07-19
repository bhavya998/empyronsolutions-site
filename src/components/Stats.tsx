import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';

const stats = [
    { value: '7', label: 'Projects Delivered', desc: 'AI/ML solutions shipped for paying clients since mid-2024.' },
    { value: '~3', label: 'Industries', desc: 'Ecommerce, SaaS, and logistics.' },
    { value: '80%', label: 'Client Retention', desc: 'Most clients return for additional projects and ongoing work.' },
    { value: '3-6', label: 'Weeks to Ship', desc: 'Average timeline from kickoff to production deployment.' },
];

/**
 * Splits a stat value into prefix / number / suffix (e.g. "~3", "80%", "3-6")
 * so the numeric part can be animated while decorations stay intact.
 */
const parseStatValue = (value: string): { prefix: string; target: number; suffix: string } => {
    const match = value.match(/^([^\d]*)(\d+)(.*)$/);
    if (!match) return { prefix: '', target: 0, suffix: value };
    return { prefix: match[1], target: parseInt(match[2], 10), suffix: match[3] };
};

const CountUp: React.FC<{ value: string }> = ({ value }) => {
    const spanRef = useRef<HTMLSpanElement>(null);
    const isInView = useInView(spanRef, { once: true, margin: '-50px' });
    const { prefix, target, suffix } = parseStatValue(value);

    useEffect(() => {
        if (!isInView) return;
        const controls = animate(0, target, {
            duration: 1.6,
            ease: 'easeOut',
            onUpdate: (latest) => {
                if (spanRef.current) {
                    spanRef.current.textContent = `${prefix}${Math.round(latest)}${suffix}`;
                }
            },
        });
        return () => controls.stop();
    }, [isInView, prefix, target, suffix]);

    return <span ref={spanRef}>{value}</span>;
};

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
                            <div className="text-5xl font-black text-gradient mb-3">
                                <CountUp value={stat.value} />
                            </div>
                            <p className="text-white font-bold text-sm mb-2">{stat.label}</p>
                            <p className="text-gray-500 text-sm leading-relaxed">{stat.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
