"use client";

import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Loader2, Mail, Send } from 'lucide-react';

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;
const CONTACT_EMAIL = 'bhavya@empyronsolutions.com';

type SubmitStatus = 'idle' | 'sending' | 'success' | 'mailto' | 'error';

export const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
    const [status, setStatus] = useState<SubmitStatus>('idle');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
        if (status !== 'sending') setStatus('idle');
    };

    const openMailto = () => {
        const subject = encodeURIComponent(`Project inquiry — ${formData.name}`);
        const body = encodeURIComponent(
            `${formData.message}\n\n${formData.name}${formData.company ? ` · ${formData.company}` : ''}\n${formData.email}`
        );
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
        setStatus('mailto');
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (status === 'sending') return;

        if (!FORMSPREE_ID) {
            openMailto();
            return;
        }

        setStatus('sending');
        try {
            const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({ ...formData, _subject: `Website inquiry — ${formData.name}` }),
            });
            if (!response.ok) throw new Error('Form submission failed');
            setStatus('success');
            setFormData({ name: '', email: '', company: '', message: '' });
        } catch {
            setStatus('error');
        }
    };

    const fieldClass = 'field mt-2';

    return (
        <section id="contact" className="bg-[#e9edf2] py-20 md:py-28">
            <div className="page-container">
                <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
                    <div className="max-w-md">
                        <p className="eyebrow mb-5">Contact</p>
                        <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-[#17212d] sm:text-5xl">
                            Tell us what you&apos;re trying to solve.
                        </h2>
                        <p className="mt-6 leading-7 text-[#596575]">
                            Share a little context about the problem, the data, and what a good outcome would look like.
                            We&apos;ll reply to discuss whether and how we can help.
                        </p>
                        <a href={`mailto:${CONTACT_EMAIL}`} className="mt-7 inline-flex items-center gap-2 font-semibold text-[#315bd4] hover:text-[#17263d]">
                            <Mail className="h-4 w-4" aria-hidden="true" /> {CONTACT_EMAIL} <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </a>
                        <p className="mt-8 border-t border-[#d5dce4] pt-5 text-xs leading-5 text-[#778392]">
                            Based in Koblenz, Germany · Available for remote work across Europe and India.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="rounded-2xl border border-[#d9dfe6] bg-white p-6 shadow-[0_12px_40px_rgba(30,47,70,0.06)] sm:p-8">
                        <div className="grid gap-5 sm:grid-cols-2">
                            <div>
                                <label htmlFor="contact-name" className="text-sm font-semibold text-[#263448]">Name</label>
                                <input id="contact-name" name="name" type="text" autoComplete="name" required value={formData.name} onChange={handleChange} className={fieldClass} />
                            </div>
                            <div>
                                <label htmlFor="contact-email" className="text-sm font-semibold text-[#263448]">Work email</label>
                                <input id="contact-email" name="email" type="email" autoComplete="email" required value={formData.email} onChange={handleChange} className={fieldClass} />
                            </div>
                        </div>

                        <div className="mt-5">
                            <label htmlFor="contact-company" className="text-sm font-semibold text-[#263448]">Company <span className="font-normal text-[#7b8795]">(optional)</span></label>
                            <input id="contact-company" name="company" type="text" autoComplete="organization" value={formData.company} onChange={handleChange} className={fieldClass} />
                        </div>

                        <div className="mt-5">
                            <label htmlFor="contact-message" className="text-sm font-semibold text-[#263448]">What would you like to solve?</label>
                            <textarea id="contact-message" name="message" required rows={5} value={formData.message} onChange={handleChange} className={`${fieldClass} resize-y`} />
                        </div>

                        <button type="submit" disabled={status === 'sending'} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#315bd4] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#2448b0] disabled:cursor-wait disabled:opacity-60 sm:w-auto">
                            {status === 'sending' ? <><Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> Sending</> : <>Send enquiry <Send className="h-4 w-4" aria-hidden="true" /></>}
                        </button>

                        <div aria-live="polite" aria-atomic="true" className="mt-4 min-h-5 text-sm">
                            {status === 'success' && <p className="flex items-center gap-2 text-[#246b48]"><CheckCircle2 className="h-4 w-4" aria-hidden="true" /> Thanks — your message has been sent.</p>}
                            {status === 'mailto' && <p className="text-[#536071]">Your email app should open with a draft. If it didn&apos;t, <a className="font-semibold text-[#315bd4] underline" href={`mailto:${CONTACT_EMAIL}`}>email us directly</a>.</p>}
                            {status === 'error' && <p className="text-[#a43131]">We couldn&apos;t send that just now. Please <a className="font-semibold underline" href={`mailto:${CONTACT_EMAIL}`}>email us directly</a>.</p>}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};
