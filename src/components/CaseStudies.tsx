import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Workflow, Image, Cpu } from 'lucide-react';

const cases = [
    {
        icon: <FileText className="w-7 h-7 text-cyan-500" />,
        tag: 'RAG Pipeline',
        title: 'Document Intelligence for a Legal Practice',
        desc: 'Built a LangChain + ChromaDB RAG system for a small German law firm to query 2,000+ case files and contracts in natural language. Chunked and embedded legal documents, added citation tracking, and deployed on a Hetzner VPS. What used to take an afternoon of manual searching now takes seconds.',
        result: 'Hours of document search eliminated',
    },
    {
        icon: <Workflow className="w-7 h-7 text-purple-500" />,
        tag: 'n8n Automation',
        title: 'AI-Powered Operations for a D2C Brand',
        desc: 'Designed n8n workflows integrating LLM steps for a Shopify brand processing 200+ orders/day. Automated order validation, customer notification triage, and inventory alerts — replacing a patchwork of Zapier zaps and manual Slack messages that kept breaking.',
        result: '80% of manual ops tasks automated',
    },
    {
        icon: <Image className="w-7 h-7 text-cyan-500" />,
        tag: 'Stable Diffusion',
        title: 'Custom Product Imagery for Ecommerce',
        desc: 'Fine-tuned Stable Diffusion XL on a fashion brand\'s product catalog to generate on-brand lifestyle shots from simple flat-lay photos. Eliminated the need for costly photoshoots for new SKU drops. Deployed as a lightweight Gradio app the client\'s team uses directly.',
        result: 'Photoshoot costs cut by 60%',
    },
    {
        icon: <Cpu className="w-7 h-7 text-purple-500" />,
        tag: 'SLM Fine-Tuning',
        title: 'On-Device Chatbot for a SaaS Startup',
        desc: 'Fine-tuned Phi-3-mini on a SaaS company\'s support docs and chat logs to power their in-app assistant. Optimized with 4-bit quantization to run under 2GB VRAM, keeping inference costs near zero. Handles 70% of Tier-1 support queries without human escalation.',
        result: '70% of support queries resolved autonomously',
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {cases.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
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

                <div className="text-center mt-12">
                    <p className="text-gray-500 text-lg font-light">...and many more data &amp; AI/ML projects.</p>
                </div>
            </div>
        </section>
    );
};
