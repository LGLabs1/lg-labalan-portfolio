import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProject from "./components/FeaturedProject";
import Services from "./components/Services";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#0B0B0F] text-white overflow-x-hidden">

      {/* Navigation */}
      <Navbar />

      <main>

        {/* Hero */}
        <section id="home">
          <Hero />
        </section>

        {/* Featured SmartEat */}
        <section id="featured">
          <FeaturedProject />
        </section>

        {/* Services */}
        <section id="services">
          <Services />
        </section>

        {/* About */}
        <section id="about">
          <About />
        </section>

        {/* Tech Stack */}
        <section id="tech">
          <TechStack />
        </section>

        {/* Projects */}
        <section id="projects">
          <Projects />
        </section>

        {/* Contact */}
        <section id="contact">
          <Contact />
        </section>

      </main>

      <Footer />

    </div>
  );
}

export default App;