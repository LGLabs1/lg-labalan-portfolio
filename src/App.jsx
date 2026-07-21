import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4">
        <section id="home" className="py-24">
          <Hero />
        </section>
        <section id="about" className="py-24">
          <About />
        </section>
        <section id="projects" className="py-24">
          <Projects />
        </section>
        <section id="contact" className="py-24">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
