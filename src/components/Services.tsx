import React from 'react';
import { ArrowUpRight, BarChart3, Database, FileSearch, Workflow } from 'lucide-react';

const capabilities = [
    {
        number: '01',
        icon: <FileSearch className="h-5 w-5" aria-hidden="true" />,
        title: 'Document intelligence',
        description: 'Search and ask questions across internal documents, manuals, and case files. We build retrieval systems with source citations and a clear path to verify answers.',
        detail: 'RAG · knowledge search · LLM applications',
    },
    {
        number: '02',
        icon: <BarChart3 className="h-5 w-5" aria-hidden="true" />,
        title: 'Machine learning & forecasting',
        description: 'Use your historical data to forecast demand, understand churn, classify information, or support better day-to-day decisions.',
        detail: 'Forecasting · classification · model evaluation',
    },
    {
        number: '03',
        icon: <Database className="h-5 w-5" aria-hidden="true" />,
        title: 'Data engineering',
        description: 'Make fragmented data usable. We connect sources, build reliable pipelines, and give your models and teams a sound foundation.',
        detail: 'Pipelines · APIs · data preparation',
    },
    {
        number: '04',
        icon: <Workflow className="h-5 w-5" aria-hidden="true" />,
        title: 'Workflow automation',
        description: 'Reduce repetitive operational work with carefully scoped automations that connect the tools and processes your team already uses.',
        detail: 'Operations · triage · system integrations',
    },
];

export const Services: React.FC = () => {
    return (
        <section id="capabilities" className="border-t border-[#e1e4e7] bg-white py-20 md:py-28">
            <div className="page-container">
                <div className="grid gap-8 md:grid-cols-[0.78fr_1.22fr] md:gap-16">
                    <div className="max-w-md">
                        <p className="eyebrow mb-5">What we do</p>
                        <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-[#17212d] sm:text-5xl">
                            Applied AI, from data to deployment.
                        </h2>
                        <p className="mt-6 leading-7 text-[#596575]">
                            We start with the workflow and the data, then choose tools that fit. Sometimes that means
                            an LLM. Sometimes it means a better pipeline.
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
