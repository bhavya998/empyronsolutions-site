// App.tsx
import { Header } from './components/Header';
import { Hero } from './components/Hero/Hero';
import { Services } from './components/Services';
import { Stats } from './components/Stats';
import { HowIWork } from './components/HowIWork';
import { CaseStudies } from './components/CaseStudies';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-white bg-brand-dark min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Stats />
      <HowIWork />
      <CaseStudies />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
