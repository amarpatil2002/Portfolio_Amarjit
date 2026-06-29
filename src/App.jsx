import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import TechStack from "./components/TechStack";
import Projects from "./components/Project";
import GithubStats from "./components/Github";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />

      <Hero />
      <About />
      <TechStack />
      <Projects />
      <GithubStats />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}
