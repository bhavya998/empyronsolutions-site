import React from 'react';
import { Bot, Database, Gauge, SlidersHorizontal } from 'lucide-react';

const toolsets = [
    {
        number: '01',
        icon: <Bot className="h-5 w-5" aria-hidden="true" />,
        title: 'Agents & MCP',
        description: 'Connect models to business tools, APIs, and data with controlled, observable workflows.',
        tools: ['Model Context Protocol', 'OpenAI Agents SDK', 'LangGraph', 'Tool calling', 'Human approvals'],
    },
    {
        number: '02',
        icon: <Database className="h-5 w-5" aria-hidden="true" />,
        title: 'Hybrid retrieval',
        description: 'Combine semantic and exact-match search, fuse results, then rerank for relevance.',
        tools: ['Dense vectors', 'BM25 / sparse', 'RRF', 'Rerankers', 'Qdrant', 'OpenSearch', 'ChromaDB'],
    },
    {
        number: '03',
        icon: <SlidersHorizontal className="h-5 w-5" aria-hidden="true" />,
        title: 'LLM fine-tuning',
        description: 'Adapt open-weight models with parameter-efficient training, task-specific evaluation, and quantized delivery.',
        tools: ['Hugging Face', 'PEFT', 'TRL', 'LoRA / QLoRA', 'Qwen', 'Phi'],
    },
    {
        number: '04',
        icon: <Gauge className="h-5 w-5" aria-hidden="true" />,
        title: 'Inference & platform',
        description: 'Run models through hosted APIs or self-hosted serving, integrated with production data and software.',
        tools: ['vLLM', 'SGLang', 'llama.cpp', 'Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'n8n'],
    },
];

export const TechStack: React.FC = () => {
    return (
        <section id="stack" className="bg-[#17263d] py-20 text-white md:py-28">
            <div className="page-container">
                <div className="grid gap-8 border-b border-white/15 pb-10 md:grid-cols-[0.8fr_1.2fr] md:items-end md:gap-16">
                    <div>
                        <p className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-[#9fb5e8]">Technology stack</p>
                        <h2 className="max-w-xl text-4xl font-medium leading-[1.05] tracking-[-0.05em] sm:text-5xl">
                            Modern tools. Selected for the job.
                        </h2>
                    </div>
                    <p className="max-w-xl leading-7 text-[#c1cad7]">
                        From MCP and agent orchestration through hybrid search, fine-tuning, and inference. We choose
                        the smallest stack that meets your data, privacy, latency, and cost requirements.
                    </p>
                </div>

                <div className="grid gap-x-10 sm:grid-cols-2">
                    {toolsets.map((group) => (
                        <article key={group.number} className="border-b border-white/15 py-7 md:py-8">
                            <div className="flex items-center gap-3">
                                <span className="font-mono text-xs text-[#91a1b8]">{group.number}</span>
                                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-[#a9bfff]">
                                    {group.icon}
                                </span>
                                <h3 className="text-lg font-semibold tracking-tight">{group.title}</h3>
                            </div>
                            <p className="mt-4 max-w-xl text-sm leading-6 text-[#c1cad7]">{group.description}</p>
                            <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${group.title} technologies`}>
                                {group.tools.map((tool) => (
                                    <li key={tool} className="rounded-md border border-white/10 bg-white/[0.045] px-2.5 py-1.5 font-mono text-[0.68rem] text-[#dce4f0]">
                                        {tool}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>

                <p className="mt-7 text-xs leading-5 text-[#91a1b8]">
                    Technology examples, not a fixed bill of materials. Model, framework, and hosting choices are scoped to each project.
                </p>
            </div>
        </section>
    );
};
