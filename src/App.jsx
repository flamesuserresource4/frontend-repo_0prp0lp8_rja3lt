import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="scroll-smooth bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-black/60 py-8 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Flames.Blue — Built with love, motion, and 3D.
      </footer>
    </div>
  );
}

export default App;
