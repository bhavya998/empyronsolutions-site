import React from 'react';
import { ArrowDownRight, ArrowRight, Boxes, Database, Workflow } from 'lucide-react';

const proofPoints = [
    { value: '7', label: 'projects delivered' },
    { value: '80%', label: 'client retention' },
    { value: '3–6 weeks', label: 'average delivery' },
];

export const Hero: React.FC = () => {
    return (
        <section id="home" className="relative overflow-hidden bg-[#f4f3ef] pb-14 pt-32 md:pb-20 md:pt-40">
            <div className="pointer-events-none absolute -right-48 -top-64 h-[38rem] w-[38rem] rounded-full border border-[#dfe4e9]" />
            <div className="pointer-events-none absolute -right-28 -top-44 h-[28rem] w-[28rem] rounded-full border border-[#e6e9ec]" />

            <div className="page-container relative">
                <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
                    <div className="max-w-2xl">
                        <p className="eyebrow mb-6 flex items-start gap-3 sm:items-center">
                            <span className="mt-[0.45em] h-px w-8 shrink-0 bg-[#315bd4] sm:mt-0" />
                            <span>Independent AI &amp; data engineering <span className="hidden sm:inline">·</span><br className="sm:hidden" /> Koblenz, Germany</span>
                        </p>

                        <h1 className="max-w-[13ch] text-[2.6rem] font-semibold leading-[0.98] tracking-[-0.065em] text-[#17212d] sm:text-6xl lg:text-[5.4rem]">
                            AI that works <span className="text-[#315bd4]">outside</span> the demo.
                        </h1>

                        <p className="mt-7 max-w-xl text-lg leading-8 text-[#536071] md:text-xl">
                            Empyron Solutions helps growing teams turn messy data and promising prototypes into
                            practical systems — document intelligence, machine learning, and automation built for
                            real workflows.
                        </p>

                        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                            <a href="#work" className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#315bd4] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#2448b0] sm:w-auto">
                                See selected work <ArrowRight className="h-4 w-4" aria-hidden="true" />
                            </a>
                            <a href="#contact" className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#cdd4dc] bg-white/60 px-5 py-3.5 text-sm font-semibold text-[#263448] transition-colors hover:border-[#315bd4] hover:bg-white sm:w-auto">
                                Talk through a problem <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
                            </a>
                        </div>

                        <p className="mt-5 text-sm text-[#697585]">Direct access to the engineer designing and building your system.</p>
                    </div>

                    <div className="relative mx-auto w-full max-w-xl">
                        <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full bg-[#dce6ff]" />
                        <div className="paper-grid relative rounded-[1.35rem] border border-[#d8dee5] p-3 shadow-[0_24px_70px_rgba(30,47,70,0.12)] sm:p-5">
                            <div className="rounded-[1rem] bg-[#17263d] p-6 text-white sm:p-8">
                                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                                    <div>
                                        <p className="text-[0.65rem] font-semibold tracking-[0.18em] text-[#a9b9d0]">SYSTEM MAP / 01</p>
                                        <h2 className="mt-1 font-display text-lg font-medium tracking-tight">From information to action</h2>
                                    </div>
                                    <span className="rounded-full border border-white/15 px-2.5 py-1 text-[0.6rem] uppercase tracking-wider text-[#bdc9d8]">Illustrative</span>
                                </div>

                                <div className="mt-6 grid grid-cols-1 items-stretch gap-2 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center sm:gap-3">
                                    <div className="min-h-0 rounded-xl border border-white/10 bg-white/[0.045] p-4 sm:min-h-32 sm:p-4">
                                        <p className="text-[0.6rem] font-semibold tracking-[0.14em] text-[#9fb0c6]">INPUTS</p>
                                        <div className="mt-4 space-y-2 text-xs text-[#e3e9f0]">
                                            <p className="flex items-center gap-2"><Database className="h-3.5 w-3.5 text-[#91adff]" /> Documents</p>
                                            <p className="flex items-center gap-2"><Boxes className="h-3.5 w-3.5 text-[#91adff]" /> Business data</p>
                                        </div>
                                    </div>
                                    <span className="mx-auto h-3 w-px bg-[#7185a1] sm:mx-0 sm:h-px sm:w-5" />
                                    <div className="min-h-0 rounded-xl border border-[#5775bc] bg-[#263a59] p-4 sm:min-h-32">
                                        <p className="text-[0.6rem] font-semibold tracking-[0.14em] text-[#b4c7ef]">ENGINEERING</p>
                                        <div className="mt-4 space-y-2 text-xs text-white">
                                            <p className="flex items-center gap-2"><Workflow className="h-3.5 w-3.5 text-[#a8bcff]" /> Retrieve</p>
                                            <p className="flex items-center gap-2"><Workflow className="h-3.5 w-3.5 text-[#a8bcff]" /> Predict</p>
                                        </div>
                                    </div>
                                    <span className="mx-auto h-3 w-px bg-[#7185a1] sm:mx-0 sm:h-px sm:w-5" />
                                    <div className="min-h-0 rounded-xl bg-[#e8eefb] p-4 text-[#17263d] sm:min-h-32">
                                        <p className="text-[0.6rem] font-semibold tracking-[0.14em] text-[#52637b]">IN USE</p>
                                        <div className="mt-4 space-y-2 text-xs font-medium">
                                            <p>Useful answers</p>
                                            <p>Clear signals</p>
                                        </div>
                                    </div>
                                </div>

                                <p className="mt-5 text-xs leading-relaxed text-[#9fb0c6]">
                                    The right system depends on the problem, the data, and where it needs to run.
                                </p>
                            </div>
                            <div className="flex items-center justify-between px-2 pb-1 pt-4 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[#748093]">
                                <span>Problem first</span><span className="h-px flex-1 mx-4 bg-[#dce1e6]" /><span>Production in mind</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-5 border-t border-[#d9dee3] pt-6 sm:grid-cols-3 sm:gap-8">
                    {proofPoints.map((point) => (
                        <div key={point.label} className="flex items-baseline gap-3">
                            <span className="font-display text-2xl font-semibold tracking-tight text-[#17212d] sm:text-3xl">{point.value}</span>
                            <span className="text-sm text-[#687484]">{point.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
