import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';

type LegalPageProps = {
    title: string;
    children: React.ReactNode;
};

export const LegalPage: React.FC<LegalPageProps> = ({ title, children }) => (
    <div className="min-h-screen bg-[#f4f3ef] font-sans text-[#17212d]">
        <a className="skip-link" href="#legal-content">Zum Inhalt springen</a>
        <Header />
        <main id="legal-content" lang="de" className="page-container py-28 md:py-36">
            <a href="/" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#315bd4] hover:text-[#17263d]">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Zur Startseite
            </a>
            <p className="eyebrow mb-4">Empyron Solutions · Rechtliches</p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-[#17212d] sm:text-5xl">{title}</h1>
            <div className="legal-copy mt-10 max-w-3xl border-t border-[#d9dee3] pt-8">
                {children}
            </div>
        </main>
        <Footer />
    </div>
);
