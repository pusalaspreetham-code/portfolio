import { useDarkMode } from "./hooks/useDarkMode";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Hackathons from "./sections/Hackathons";
import Internships from "./sections/Internships";
import Contact from "./sections/Contact";

function App() {
  const [isDark, setIsDark] = useDarkMode();
  return (
    <div className="min-h-screen bg-cream-50 dark:bg-ink-900 transition-colors duration-300">
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Hackathons />
        <Internships />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
