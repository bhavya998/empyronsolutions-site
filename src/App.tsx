// App.tsx
import { Header } from './components/Header';
import { Hero } from './components/Hero/Hero';
import { Services } from './components/Services';
import { GlobalOperations } from './components/GlobalOperations';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-white bg-brand-dark min-h-screen">
      <Header />
      <Hero />
      <Services />
      <GlobalOperations />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
