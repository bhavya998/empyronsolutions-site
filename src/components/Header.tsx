"use client";

import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Approach', href: '#approach' },
    { label: 'About', href: '#about' },
];

export const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (!isMobileMenuOpen) return;
        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setIsMobileMenuOpen(false);
        };
        window.addEventListener('keydown', closeOnEscape);
        return () => window.removeEventListener('keydown', closeOnEscape);
    }, [isMobileMenuOpen]);

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-[#dfe2e6] bg-[#f4f3ef]/95 backdrop-blur-md">
            <div className="page-container flex h-[4.75rem] items-center justify-between">
                <a href="#home" className="flex items-center gap-3" aria-label="Empyron Solutions home">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#17263d] font-display text-xs font-bold tracking-wide text-white">ES</span>
                    <span className="flex flex-col leading-none">
                        <span className="font-display text-sm font-bold tracking-[0.12em] text-[#17212d]">EMPYRON</span>
                        <span className="mt-1 text-[0.58rem] font-semibold tracking-[0.25em] text-[#687484]">SOLUTIONS</span>
                    </span>
                </a>

                <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="text-sm font-medium text-[#536071] transition-colors hover:text-[#315bd4]"
                        >
                            {item.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 rounded-lg bg-[#315bd4] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#2448b0]"
                    >
                        Discuss a project
                        <ArrowUpRight className="h-4 w-4" />
                    </a>
                </nav>

                <button
                    className="rounded-lg p-2 text-[#17212d] lg:hidden"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isMobileMenuOpen}
                    aria-controls="mobile-navigation"
                >
                    {isMobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
                </button>
            </div>

            <nav id="mobile-navigation" aria-label="Mobile navigation" hidden={!isMobileMenuOpen} className="border-t border-[#dfe2e6] bg-[#f4f3ef] px-4 pb-5 pt-3 lg:hidden">
                    <div className="page-container flex flex-col">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="border-b border-[#e3e6e9] py-3.5 text-sm font-medium text-[#344154]"
                            >
                                {item.label}
                            </a>
                        ))}
                        <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 rounded-lg bg-[#315bd4] px-4 py-3 text-center text-sm font-semibold text-white">
                            Discuss a project
                        </a>
                    </div>
            </nav>
        </header>
    );
};
