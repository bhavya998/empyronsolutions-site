import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full py-12 border-t border-white/5 bg-black/50 backdrop-blur-xl relative z-40">
            <div className="container mx-auto px-6 flex flex-col items-center justify-center gap-6">

                {/* Copyright */}
                <div className="text-slate-500 text-sm font-medium tracking-wide">
                    &copy; {currentYear} Empyron Solutions. All rights reserved.
                </div>

                {/* Socials / Links (Minimal) */}
                <div className="flex items-center gap-8">
                    <Link href="#" className="text-slate-500 hover:text-white text-sm transition-colors">
                        Privacy Policy
                    </Link>
                    <Link href="#" className="text-slate-500 hover:text-white text-sm transition-colors">
                        Terms of Service
                    </Link>
                    <Link href="https://linkedin.com" target="_blank" className="text-slate-500 hover:text-[#00ffff] transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
