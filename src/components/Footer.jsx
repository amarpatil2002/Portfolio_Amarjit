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
      {/* Glow Effect */}
      <div className="absolute left-0 top-0 w-96 h-96 bg-cyan-500/10 blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              Amarjit
              <span className="text-cyan-400">.</span>
            </h2>

            <p className="text-gray-400 mt-4 leading-7">
              React & MERN Stack Developer passionate about building scalable,
              responsive, and modern web applications with exceptional user
              experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-xl mb-5">
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
          <div>
            <h3 className="text-white font-semibold text-xl mb-5">
              Connect With Me
            </h3>

            <div className="flex gap-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
                className="
                w-12
                h-12
                rounded-full
                bg-white/5
                border
                border-white/10
                flex
                items-center
                justify-center
                text-gray-300
                hover:text-cyan-400
                hover:border-cyan-400
                transition-all
                duration-300
                "
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noreferrer"
                className="
                w-12
                h-12
                rounded-full
                bg-white/5
                border
                border-white/10
                flex
                items-center
                justify-center
                text-gray-300
                hover:text-cyan-400
                hover:border-cyan-400
                transition-all
                duration-300
                "
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noreferrer"
                className="
                w-12
                h-12
                rounded-full
                bg-white/5
                border
                border-white/10
                flex
                items-center
                justify-center
                text-gray-300
                hover:text-cyan-400
                hover:border-cyan-400
                transition-all
                duration-300
                "
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="mailto:yourmail@gmail.com"
                className="
                w-12
                h-12
                rounded-full
                bg-white/5
                border
                border-white/10
                flex
                items-center
                justify-center
                text-gray-300
                hover:text-cyan-400
                hover:border-cyan-400
                transition-all
                duration-300
                "
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-10" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <p className="text-gray-500 text-center">
            © {currentYear} Amarjit Patil. All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="
            w-12
            h-12
            rounded-full
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            text-white
            flex
            items-center
            justify-center
            hover:scale-110
            transition-all
            duration-300
            "
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
