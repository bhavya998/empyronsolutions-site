import React from 'react';
import { ArrowUpRight, Bot, Braces, Database, Search, SlidersHorizontal } from 'lucide-react';

const capabilities = [
    {
        number: '01',
        icon: <Bot className="h-5 w-5" aria-hidden="true" />,
        title: 'Agentic systems & MCP',
        description: 'Agents that call the right tools, use your systems, and hand off sensitive actions for approval. We build MCP clients and servers around real business workflows.',
        detail: 'MCP · OpenAI Agents SDK · LangGraph · tool calling · human approval',
    },
    {
        number: '02',
        icon: <Search className="h-5 w-5" aria-hidden="true" />,
        title: 'Hybrid RAG & knowledge systems',
        description: 'Ground answers in your documents with semantic and keyword retrieval, metadata filters, reranking, citations, and evaluation against real queries.',
        detail: 'Dense vectors · BM25 · RRF · rerankers · retrieval evaluation',
    },
    {
        number: '03',
        icon: <SlidersHorizontal className="h-5 w-5" aria-hidden="true" />,
        title: 'LLM fine-tuning & adaptation',
        description: 'Adapt open-weight models when prompting is not enough. We prepare datasets, fine-tune adapters, measure quality, and package models for the target hardware.',
        detail: 'Hugging Face PEFT · TRL · LoRA · QLoRA · quantization',
    },
    {
        number: '04',
        icon: <Braces className="h-5 w-5" aria-hidden="true" />,
        title: 'Model serving & AI integration',
        description: 'Put hosted or self-hosted models behind reliable APIs, connect them to products, and tune inference for latency, privacy, and cost.',
        detail: 'OpenAI & Anthropic APIs · vLLM · SGLang · FastAPI',
    },
    {
        number: '05',
        icon: <Database className="h-5 w-5" aria-hidden="true" />,
        title: 'Data, ML & automation',
        description: 'Build the pipelines and workflow automation around AI: forecasting, classification, integrations, and the operational data foundations that keep systems useful.',
        detail: 'Python · PostgreSQL · Redis · Docker · n8n · predictive ML',
    },
];

export const Services: React.FC = () => {
    return (
        <section id="capabilities" className="border-t border-[#e1e4e7] bg-white py-20 md:py-28">
            <div className="page-container">
                <div className="grid gap-8 md:grid-cols-[0.78fr_1.22fr] md:gap-16">
                    <div className="max-w-md">
                        <p className="eyebrow mb-5">What we build</p>
                        <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-[#17212d] sm:text-5xl">
                            Applied AI, from model to production system.
                        </h2>
                        <p className="mt-6 leading-7 text-[#596575]">
                            We work across the full stack: connect models to tools, retrieve the right context, adapt
                            models when needed, and ship the software around them.
                        </p>
                        <a href="#contact" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#315bd4] hover:text-[#17263d]">
                            Tell us what you&apos;re solving <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                        </a>
                    </div>

                    <div className="divide-y divide-[#e3e6e9] border-y border-[#e3e6e9]">
                        {capabilities.map((item) => (
                            <article key={item.number} className="grid gap-4 py-6 sm:grid-cols-[3rem_1fr] sm:gap-5 md:py-7">
                                <div className="flex items-center gap-3 sm:block">
                                    <span className="font-mono text-xs text-[#7b8795]">{item.number}</span>
                                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#edf1f7] text-[#315bd4] sm:mt-3">
                                        {item.icon}
                                    </span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold tracking-tight text-[#17212d]">{item.title}</h3>
                                    <p className="mt-2 max-w-2xl text-sm leading-6 text-[#596575]">{item.description}</p>
                                    <p className="mt-3 text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-[#7c8795]">{item.detail}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="mt-12 flex flex-col gap-3 border-t border-[#e3e6e9] pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7c8795]">Experience across</p>
                    <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-[#344154]">
                        <li>E-commerce</li><li>SaaS</li><li>Legal</li><li>Logistics</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
