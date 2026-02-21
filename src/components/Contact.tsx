import React, { useState } from 'react';
import { Send, MapPin, Mail } from 'lucide-react';

export const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitStatus, setSubmitStatus] = useState<'success' | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Sending message:', formData);

        // Show success message and clear form
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });

        // Hide success message after 5 seconds
        setTimeout(() => {
            setSubmitStatus(null);
        }, 5000);
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-gradient-to-b from-brand-dark to-black border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Info Side */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black mb-6">
                            Ready to <span className="text-gradient">Innovate?</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-10 max-w-lg font-light">
                            Connect with our data scientists and AI architects today. Let’s map out a strategy to future-proof your business.
                        </p>

                        <div className="space-y-6">
                            {[
                                { icon: <Mail className="text-cyan-500 w-6 h-6" />, text: 'bhavya@empyronsolutions.com' },
                                { icon: <MapPin className="text-cyan-500 w-6 h-6" />, text: 'Germany and India' },
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-4 text-gray-300">
                                    <div className="p-3 glass rounded-full">{item.icon}</div>
                                    <span className="font-medium">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Form Side */}
                    <form onSubmit={handleSubmit} className="glass p-8 md:p-10 rounded-2xl flex flex-col gap-6">
                        <h3 className="text-2xl font-bold mb-2">Send us a message</h3>

                        <div className="flex flex-col md:flex-row gap-6">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Full Name"
                                required
                                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-light"
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Work Email"
                                required
                                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-light"
                            />
                        </div>

                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="How can we help you achieve your goals?"
                            required
                            rows={5}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none font-light"
                        ></textarea>

                        <button
                            type="submit"
                            className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-shadow flex items-center justify-center gap-2"
                        >
                            <span>Initialize Contact</span>
                            <Send className="w-5 h-5" />
                        </button>

                        {/* Inline Success Message */}
                        {submitStatus === 'success' && (
                            <div className="mt-2 p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-center font-medium animate-pulse">
                                Request sent! A consultant will contact you shortly.
                            </div>
                        )}
                    </form>

                </div>
            </div>
        </section>
    );
};
