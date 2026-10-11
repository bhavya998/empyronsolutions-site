import React from 'react';
import { ArrowUpRight, Linkedin, Mail } from 'lucide-react';

const links = [
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Selected work', href: '#work' },
    { label: 'Approach', href: '#approach' },
    { label: 'About', href: '#about' },
];

export const Footer: React.FC = () => {
    return (
        <footer className="bg-[#111c2d] py-12 text-white">
            <div className="page-container">
                <div className="flex flex-col justify-between gap-10 border-b border-white/15 pb-10 md:flex-row">
                    <div className="max-w-sm">
                        <a href="#home" className="inline-flex items-center gap-3" aria-label="Empyron Solutions home">
                            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#315bd4] font-display text-xs font-bold tracking-wide text-white">ES</span>
                            <span className="flex flex-col leading-none">
                                <span className="font-display text-sm font-bold tracking-[0.12em]">EMPYRON</span>
                                <span className="mt-1 text-[0.58rem] font-semibold tracking-[0.25em] text-[#aeb9c8]">SOLUTIONS</span>
                            </span>
                        </a>
                        <p className="mt-4 text-sm leading-6 text-[#bac4d0]">
                            Independent AI and data engineering from Koblenz, Germany.
                        </p>
                    </div>

                    <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-7 gap-y-3">
                        {links.map((link) => (
                            <a key={link.label} href={link.href} className="text-sm text-[#bac4d0] transition-colors hover:text-white">{link.label}</a>
                        ))}
                        <a href="/impressum/" className="text-sm text-[#bac4d0] transition-colors hover:text-white">Impressum</a>
                        <a href="/datenschutz/" className="text-sm text-[#bac4d0] transition-colors hover:text-white">Datenschutz</a>
                    </nav>

                    <div className="flex flex-col gap-3">
                        <a href="mailto:bhavya@empyronsolutions.com" className="inline-flex items-center gap-2 text-sm text-[#bac4d0] hover:text-white">
                            <Mail className="h-4 w-4" aria-hidden="true" /> Email <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                        </a>
                        <a href="https://www.linkedin.com/in/bhavya-ashvin-shah" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-[#bac4d0] hover:text-white">
                            <Linkedin className="h-4 w-4" aria-hidden="true" /> LinkedIn <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col gap-2 pt-6 text-xs text-[#8f9bac] sm:flex-row sm:items-center sm:justify-between">
                    <p>&copy; {new Date().getFullYear()} Empyron Solutions</p>
                    <p>AI &amp; data engineering · Koblenz, Germany</p>
                </div>
            </div>
        </footer>
    );
};
