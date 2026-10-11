import type { Metadata, Viewport } from 'next';
import { DM_Sans, Space_Grotesk } from 'next/font/google';
import '../index.css';

const dmSans = DM_Sans({
    variable: '--font-dm-sans',
    subsets: ['latin'],
    display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
    variable: '--font-space-grotesk',
    subsets: ['latin'],
    display: 'swap',
});

const siteUrl = 'https://www.empyronsolutions.com';
const description = 'Empyron Solutions builds production AI systems in Koblenz, Germany: MCP-connected agents, hybrid RAG, fine-tuned LLMs, and data pipelines for growing teams.';

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: 'Empyron Solutions — Applied AI & Data Engineering',
        template: '%s | Empyron Solutions',
    },
    description,
    applicationName: 'Empyron Solutions',
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        url: siteUrl,
        siteName: 'Empyron Solutions',
        title: 'Empyron Solutions — Applied AI & Data Engineering',
        description,
        images: [{ url: '/logo.png', width: 512, height: 512, alt: 'Empyron Solutions' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Empyron Solutions — Applied AI & Data Engineering',
        description,
        images: ['/logo.png'],
    },
    icons: {
        icon: '/logo.png',
    },
};

export const viewport: Viewport = {
    themeColor: '#f4f3ef',
};

const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': siteUrl,
    name: 'Empyron Solutions',
    description,
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    foundingDate: '2024',
    email: 'bhavya@empyronsolutions.com',
    founder: {
        '@type': 'Person',
        name: 'Bhavya Shah',
        jobTitle: 'Founder & Principal AI Engineer',
        sameAs: ['https://www.linkedin.com/in/bhavya-ashvin-shah'],
    },
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Koblenz',
        addressCountry: 'DE',
    },
    areaServed: ['Europe', 'India'],
    knowsAbout: [
        'Artificial Intelligence',
        'Machine Learning',
        'Model Context Protocol',
        'AI Agents',
        'Hybrid Retrieval-Augmented Generation',
        'LLM Fine-Tuning',
        'Data Engineering',
    ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={`${dmSans.variable} ${spaceGrotesk.variable}`}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, '\\u003c') }}
                />
                {children}
            </body>
        </html>
    );
}
