import type { Metadata } from "next";
import "./globals.css";

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
        <html lang="en" className="dark scroll-smooth">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
            </head>
            <body className="antialiased">
                <div className="bg-grid" />
                <div className="bg-radial" />
                {children}
            </body>
        </html>
    );
}
