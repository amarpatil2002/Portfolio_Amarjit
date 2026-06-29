import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { title: "About", link: "#about" },
    { title: "Skills", link: "#skills" },
    { title: "Projects", link: "#projects" },
    { title: "Contact", link: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
      fixed
      top-0
      left-0
      w-full
      z-50
      transition-all
      duration-300
      ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-lg border-b border-white/10"
          : "bg-transparent"
      }
    `}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            className="
            text-3xl
            font-bold
            text-white
            tracking-wide
          "
          >
            Amarjit
            <span className="text-cyan-400">.</span>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((item) => (
              <a
                key={item.title}
                href={item.link}
                className="
                text-gray-300
                hover:text-cyan-400
                transition-all
                duration-300
                font-medium
              "
              >
                {item.title}
              </a>
            ))}
          </nav>

          {/* Resume Button */}
          <div className="hidden md:block">
            <a
              href="/resume.pdf"
              download
              className="
              flex
              items-center
              gap-2
              px-6
              py-3
              rounded-full
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              text-white
              font-medium
              hover:scale-105
              transition-all
              duration-300
            "
            >
              <Download size={18} />
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden text-white"
          >
            {mobileMenu ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
          md:hidden
          overflow-hidden
          transition-all
          duration-300
          ${mobileMenu ? "max-h-[500px] opacity-100 py-5" : "max-h-0 opacity-0"}
        `}
        >
          <div
            className="
            bg-slate-900/95
            backdrop-blur-xl
            rounded-3xl
            border
            border-white/10
            p-6
            flex
            flex-col
            gap-5
          "
          >
            {navLinks.map((item) => (
              <a
                key={item.title}
                href={item.link}
                onClick={() => setMobileMenu(false)}
                className="
                text-gray-300
                hover:text-cyan-400
                transition
              "
              >
                {item.title}
              </a>
            ))}

            <a
              href="/resume.pdf"
              download
              className="
              mt-3
              flex
              items-center
              justify-center
              gap-2
              px-5
              py-3
              rounded-xl
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              text-white
            "
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
