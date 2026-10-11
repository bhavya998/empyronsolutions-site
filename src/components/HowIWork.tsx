import React from 'react';
import { ArrowRight, MessageCircle, PencilRuler, Code2, CircleCheck } from 'lucide-react';

const steps = [
    {
        number: '01',
        icon: <MessageCircle className="h-5 w-5" aria-hidden="true" />,
        title: 'Understand the problem',
        description: 'A free 30-minute call to understand the workflow, the data, and what a useful outcome would look like.',
        timing: 'First conversation',
    },
    {
        number: '02',
        icon: <PencilRuler className="h-5 w-5" aria-hidden="true" />,
        title: 'Scope the work',
        description: 'We define the deliverables, timeline, assumptions, and written scope before any build begins.',
        timing: 'Usually 2–3 days',
    },
    {
        number: '03',
        icon: <Code2 className="h-5 w-5" aria-hidden="true" />,
        title: 'Build and review',
        description: 'Short feedback cycles and regular demos keep the build aligned with the problem you need solved.',
        timing: 'Often 2–8 weeks',
    },
    {
        number: '04',
        icon: <CircleCheck className="h-5 w-5" aria-hidden="true" />,
        title: 'Deploy and hand over',
        description: 'We ship with documentation and a practical handoff, then agree what support makes sense for the system.',
        timing: 'Support by agreement',
    },
];

export const HowIWork: React.FC = () => {
    return (
        <section id="approach" className="bg-[#17263d] py-20 text-white md:py-28">
            <div className="page-container">
                <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
                    <div>
                        <p className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-[#9fb5e8]">How we work</p>
                        <h2 className="max-w-md text-4xl font-medium leading-[1.05] tracking-[-0.05em] sm:text-5xl">
                            Clear steps. No black box.
                        </h2>
                        <p className="mt-6 max-w-sm leading-7 text-[#c1cad7]">
                            The work is collaborative: we agree on the problem and scope first, then show progress as
                            the system takes shape.
                        </p>
                        <a href="#contact" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#b8c9f1]">
                            Start a conversation <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </a>
                    </div>

                    <ol className="grid gap-0 sm:grid-cols-2">
                        {steps.map((step, index) => (
                            <li key={step.number} className={`border-t border-white/15 py-6 sm:px-5 sm:py-7 ${index % 2 === 1 ? 'sm:border-l sm:border-l-white/15' : 'sm:pl-0'} ${index < 2 ? 'sm:border-b sm:border-b-white/15' : ''}`}>
                                <div className="flex items-center justify-between">
                                    <span className="font-mono text-xs text-[#9fb5e8]">{step.number}</span>
                                    <span className="text-[#9fb5e8]">{step.icon}</span>
                                </div>
                                <h3 className="mt-5 text-lg font-semibold tracking-tight text-white">{step.title}</h3>
                                <p className="mt-2 text-sm leading-6 text-[#c1cad7]">{step.description}</p>
                                <p className="mt-4 text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-[#91a1b8]">{step.timing}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
};
