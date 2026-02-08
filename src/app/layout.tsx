import type { Metadata } from "next";
import { Space_Grotesk, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-sans",
    display: "swap",
});

const fraunces = Fraunces({
    subsets: ["latin"],
    variable: "--font-serif",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Empyron AI Solutions | Enterprise-Grade AI Infrastructure",
    description: "Architecting autonomous intelligence with custom LLM pipelines, agentic networks, and scalable AI infrastructure for mission-critical enterprise operations.",
    keywords: ["AI Infrastructure", "Autonomous Agents", "Enterprise AI", "Custom LLMs", "Machine Learning", "AI Engineering"],
    authors: [{ name: "Empyron AI Solutions" }],
    openGraph: {
        title: "Empyron AI Solutions | Enterprise AI Infrastructure",
        description: "Deploy autonomous agent networks and vertical LLM pipelines designed for enterprise scale.",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Empyron AI Solutions | Enterprise AI Infrastructure",
        description: "Autonomous intelligence for the modern enterprise.",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${spaceGrotesk.variable} ${fraunces.variable} dark scroll-smooth`}>
            <body className="antialiased">
                <div className="bg-grid" />
                <div className="bg-aurora" />
                <div className="bg-noise" />
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
