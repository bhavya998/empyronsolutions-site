import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    {
        number: '01',
        sector: 'Legal · Document intelligence',
        title: 'Find the answer across 2,000+ case files.',
        description: 'A retrieval system for a German legal practice, built to search case files and contracts in natural language and return answers with citations.',
        outcomeValue: '2,000+',
        outcomeLabel: 'case files made searchable',
        impact: 'Searches that took an afternoon now take seconds.',
        stack: 'LangChain · ChromaDB · Hetzner VPS',
    },
    {
        number: '02',
        sector: 'E-commerce · Operations',
        title: 'Take repetitive order work off the team.',
        description: 'n8n workflows for a Shopify brand handling 200+ orders a day, covering order validation, customer-notification triage, and inventory alerts.',
        outcomeValue: '80%',
        outcomeLabel: 'of manual operations tasks automated',
        impact: 'Order validation, notification triage, and inventory alerts.',
        stack: 'n8n · LLM integrations · Shopify',
    },
    {
        number: '03',
        sector: 'E-commerce · Generative imagery',
        title: 'Create product imagery without a new shoot for every drop.',
        description: 'A Stable Diffusion XL model fine-tuned on a fashion catalogue, delivered through a lightweight app for the client team.',
        outcomeValue: '60%',
        outcomeLabel: 'lower photoshoot costs',
        impact: 'On-brand imagery generated from simple flat-lay photos.',
        stack: 'Stable Diffusion XL · Gradio',
    },
    {
        number: '04',
        sector: 'SaaS · In-product assistant',
        title: 'Run a focused support assistant on modest hardware.',
        description: 'A fine-tuned Phi-3-mini assistant using product support material, quantized to run under 2 GB of VRAM for low-cost inference.',
        outcomeValue: '70%',
        outcomeLabel: 'of Tier-1 queries handled without escalation',
        impact: 'A fine-tuned assistant deployed for a SaaS support workflow.',
        stack: 'Phi-3-mini · 4-bit quantization',
    },
];

export const CaseStudies: React.FC = () => {
    return (
        <section id="work" className="bg-[#e9edf2] py-20 md:py-28">
            <div className="page-container">
                <div className="mb-12 grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-end md:gap-16">
                    <div>
                        <p className="eyebrow mb-5">Selected work</p>
                        <h2 className="max-w-lg text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-[#17212d] sm:text-5xl">
                            Real problems. Useful systems.
                        </h2>
                    </div>
                    <p className="max-w-xl leading-7 text-[#596575]">
                        A few examples of the work Empyron has delivered across legal, e-commerce, and SaaS teams.
                        Client names are omitted here.
                    </p>
                </div>

                <div className="overflow-hidden rounded-2xl border border-[#d4dbe3] bg-white">
                    {projects.map((project, index) => (
                        <article key={project.number} className={`grid gap-5 p-6 sm:p-8 lg:grid-cols-[3.5rem_1fr_17rem] lg:gap-8 ${index < projects.length - 1 ? 'border-b border-[#e2e6eb]' : ''}`}>
                            <span className="font-mono text-xs text-[#8290a0]">{project.number}</span>
                            <div>
                                <p className="text-[0.68rem] font-bold uppercase tracking-[0.13em] text-[#315bd4]">{project.sector}</p>
                                <h3 className="mt-2 max-w-2xl text-xl font-semibold leading-snug tracking-tight text-[#17212d] sm:text-2xl">{project.title}</h3>
                                <p className="mt-3 max-w-2xl text-sm leading-6 text-[#596575]">{project.description}</p>
                                <p className="mt-4 text-xs text-[#7c8795]">{project.stack}</p>
                            </div>
                            <div className="flex flex-col justify-center border-t border-[#e2e6eb] pt-4 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
                                <span className="text-[0.65rem] font-bold uppercase tracking-[0.13em] text-[#8290a0]">Project outcome</span>
                                <p className="mt-2 font-display text-3xl font-semibold tracking-[-0.05em] text-[#315bd4] sm:text-4xl">{project.outcomeValue}</p>
                                <p className="mt-1 text-sm font-semibold leading-snug text-[#263448]">{project.outcomeLabel}</p>
                                <p className="mt-2 text-xs leading-5 text-[#778392]">{project.impact}</p>
                            </div>
                        </article>
                    ))}
                </div>

                <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#315bd4] hover:text-[#17263d]">
                    Have a similar challenge? Talk with us <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
            </div>
        </section>
    );
};
