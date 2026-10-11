import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, Linkedin, MapPin } from 'lucide-react';

export const Team: React.FC = () => {
    return (
        <section id="about" className="bg-[#f4f3ef] py-20 md:py-28">
            <div className="page-container">
                <div className="grid items-center gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
                    <div className="relative mx-auto aspect-[4/4.5] w-full max-w-md">
                        <div className="absolute -bottom-4 -left-4 h-28 w-28 bg-[#dce6ff]" />
                        <Image
                            src="/bhavya.jpg"
                            alt="Bhavya Shah, founder of Empyron Solutions"
                            fill
                            sizes="(max-width: 768px) 100vw, 40vw"
                            className="rounded-xl object-cover object-top"
                            loading="lazy"
                        />
                        <div className="absolute -bottom-3 right-4 rounded-lg border border-[#d9dee4] bg-white px-4 py-3 shadow-sm sm:right-[-1rem]">
                            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#17212d]">Bhavya Shah</p>
                            <p className="mt-1 text-xs text-[#687484]">Founder · Principal Engineer</p>
                        </div>
                    </div>

                    <div className="max-w-2xl pt-3 md:pt-0">
                        <p className="eyebrow mb-5">About Empyron</p>
                        <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-[#17212d] sm:text-5xl">
                            A small studio. Direct access to the builder.
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-[#536071]">
                            Empyron Solutions is an independent AI and data engineering studio founded by Bhavya Shah.
                            We work directly with startups and small businesses to solve practical problems with data,
                            machine learning, and language models.
                        </p>
                        <p className="mt-4 leading-7 text-[#687484]">
                            Before starting Empyron in 2024, Bhavya built production AI systems in enterprise settings.
                            Today, he stays involved from the first scoping conversation through implementation and
                            handoff — so the engineering stays connected to the problem.
                        </p>

                        <div className="mt-7 flex flex-col gap-3 text-sm text-[#536071] sm:flex-row sm:gap-6">
                            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-[#315bd4]" aria-hidden="true" /> Koblenz, Germany</span>
                            <a href="https://www.linkedin.com/in/bhavya-ashvin-shah" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-[#315bd4] hover:text-[#17263d]">
                                <Linkedin className="h-4 w-4" aria-hidden="true" /> Connect on LinkedIn <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
