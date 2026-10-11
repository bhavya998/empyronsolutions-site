import { Header } from '../components/Header';
import { Hero } from '../components/Hero/Hero';
import { Services } from '../components/Services';
import { TechStack } from '../components/TechStack';
import { CaseStudies } from '../components/CaseStudies';
import { HowIWork } from '../components/HowIWork';
import { Team } from '../components/Team';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export default function HomePage() {
    return (
        <div className="min-h-screen bg-[#f4f3ef] font-sans text-[#17212d]">
            <a className="skip-link" href="#main">Skip to content</a>
            <Header />
            <main id="main">
                <Hero />
                <Services />
                <TechStack />
                <CaseStudies />
                <HowIWork />
                <Team />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
