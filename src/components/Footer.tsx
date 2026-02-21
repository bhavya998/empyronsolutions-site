import React from 'react';
import { Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-black py-12 border-t border-white/10">
            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">

                <a href="/" className="flex items-center gap-3 cursor-pointer">
                    <img src="/logo.png" alt="Empyron Logo" className="w-8 h-8 object-contain" />
                    <span className="text-xl font-bold tracking-tight text-white mb-0.5">Empyron <span className="text-gradient">Solutions</span></span>
                </a>

                <p className="text-gray-500 text-sm font-light text-center md:text-left">
                    &copy; {new Date().getFullYear()} Empyron Solutions. All rights reserved. Architecting the future.
                </p>

                <div className="flex items-center gap-6">
                    <a href="https://www.linkedin.com/in/bhavya-ashvin-shah" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-500 hover:scale-110 transition-all w-8 h-8 flex justify-center items-center">
                        <Linkedin className="w-6 h-6" />
                    </a>
                </div>

            </div>
        </footer>
    );
};
