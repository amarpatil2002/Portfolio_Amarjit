import { Mail, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-[#020617] border-t border-white/10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-52 h-52 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-cyan-500/10 blur-[150px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Amarjit
              <span className="text-cyan-400">.</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-gray-400 leading-7">
              MERN Stack & AI Developer passionate about building scalable,
              responsive, and modern web applications with exceptional user
              experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#about" className="hover:text-cyan-400 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#skills" className="hover:text-cyan-400 transition">
                  Skills
                </a>
              </li>

              <li>
                <a href="#projects" className="hover:text-cyan-400 transition">
                  Projects
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-cyan-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-5">
              Connect With Me
            </h3>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a
                href="https://github.com/amarpatil2002"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-cyan-500 hover:border-cyan-500 hover:text-white hover:scale-110 transition-all duration-300"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/amarjit-patil-392a01242"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-cyan-500 hover:border-cyan-500 hover:text-white hover:scale-110 transition-all duration-300"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-cyan-500 hover:border-cyan-500 hover:text-white hover:scale-110 transition-all duration-300"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="mailto:amarjitpatil2002@gmail.com"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-cyan-500 hover:border-cyan-500 hover:text-white hover:scale-110 transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8 sm:my-10" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-center md:text-left text-sm sm:text-base text-gray-500">
            © {currentYear} Amarjit Patil. All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center shadow-lg shadow-cyan-500/20 hover:scale-110 hover:shadow-cyan-500/40 transition-all duration-300"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
