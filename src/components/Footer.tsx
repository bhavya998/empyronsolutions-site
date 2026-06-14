import React from 'react';
import { Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-black py-16 border-t border-white/10">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start mb-10">
                    <div>
                        <a href="/" className="flex items-center gap-3">
                            <img src="/logo.png" alt="Empyron Logo" className="w-8 h-8 object-contain" />
                            <span className="text-xl font-bold tracking-tight text-white">Empyron <span className="text-gradient">Solutions</span></span>
                        </a>
                        <p className="text-gray-500 text-sm mt-4 max-w-xs leading-relaxed">
                            Independent Data &amp; AI consulting by Bhavya Shah. AI/ML, data engineering, and LLM solutions for startups and small businesses.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Navigation</h4>
                        <div className="flex flex-col gap-3">
                            <a href="#home" className="text-gray-400 hover:text-cyan-500 transition-colors text-sm">Home</a>
                            <a href="#services" className="text-gray-400 hover:text-cyan-500 transition-colors text-sm">Services</a>
                            <a href="#work" className="text-gray-400 hover:text-cyan-500 transition-colors text-sm">Work</a>
                            <a href="#about" className="text-gray-400 hover:text-cyan-500 transition-colors text-sm">About</a>
                            <a href="#contact" className="text-gray-400 hover:text-cyan-500 transition-colors text-sm">Contact</a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
                        <div className="flex flex-col gap-3">
                            <a href="mailto:bhavya@empyronsolutions.com" className="flex items-center gap-2 text-gray-400 hover:text-cyan-500 transition-colors text-sm">
                                bhavya@empyronsolutions.com
                            </a>
                            <p className="text-gray-400 text-sm">Koblenz, Germany</p>
                            <a href="https://www.linkedin.com/in/bhavya-ashvin-shah" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-cyan-500 transition-colors text-sm">
                                <Linkedin className="w-4 h-4" />
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm font-light">&copy; {new Date().getFullYear()} Empyron Solutions. All rights reserved.</p>
                    <p className="text-gray-600 text-xs">Independent Data &amp; AI Consulting — Koblenz, Germany</p>
                </div>
            </div>
        </footer>
    );
};
