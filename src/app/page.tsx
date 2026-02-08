"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Hero3D from "@/components/Hero3D";
import ServicesSection from "@/components/ServicesSection";
import EnterpriseSection from "@/components/EnterpriseSection";
import ConnectSection from "@/components/ConnectSection";
import { ArrowRight } from "lucide-react";

export default function Home() {
    return (
        <main className="min-h-screen bg-[var(--color-slate-950)] selection:bg-[#b026ff]/30">
            {/* HERO SECTION - Premium Dark */}
            <section className="relative min-h-screen flex items-center overflow-hidden">
                {/* Background Atmosphere - Signal Palette */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(57,255,20,0.1),rgba(176,38,255,0.05),transparent_70%)] opacity-80" />

                <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left: Content */}
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >

                            <h1 className="text-6xl lg:text-8xl font-bold tracking-tighter text-white mb-8 leading-[1.1]">
                                Intelligence, <br />
                                <span className="text-gradient-accent italic font-serif">Unbound.</span>
                            </h1>

                            <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-lg">
                                We engineer the neural infrastructure for the next generation of autonomous enterprise systems. <br />
                                <span className="text-white font-medium block mt-2">Scalable. Secure. Verifiable.</span>
                            </p>

                            <div className="flex flex-wrap gap-4">
                                {/* Premium Glassmorphic Button */}
                                <Link href="/#connect" className="group relative px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:border-white/20 hover:shadow-[0_0_40px_-10px_rgba(176,38,255,0.5)] inline-flex items-center gap-3">
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#39ff14] via-[#00ffff] to-[#b026ff] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                                    <span className="relative z-10 flex items-center gap-3 text-white font-medium tracking-wide">
                                        Start Leveraging AI
                                        <ArrowRight className="w-4 h-4 text-[#39ff14] group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: 3D Visualization */}
                    <div className="h-[600px] w-full relative">
                        <Hero3D />
                    </div>
                </div>
            </section>

            {/* SERVICES SECTION */}
            <ServicesSection />

            {/* SPACER */}
            <div className="h-24 md:h-48 w-full" />

            {/* ENTERPRISE OPERATIONS SECTION */}
            <EnterpriseSection />

            {/* SPACER */}
            <div className="h-24 md:h-48 w-full" />

            {/* CONTACT / CONNECT SECTION */}
            <ConnectSection />

            {/* SPACER BEFORE FOOTER */}
            <div className="h-16 md:h-32 w-full" />
        </main>
    );
}
