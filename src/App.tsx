import BranchBackground from './components/Background';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-dark selection:bg-neon-blue relative min-h-screen w-full text-white selection:text-black">
      {/* Background Animation */}
      <BranchBackground />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}

export default App;
