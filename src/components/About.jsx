import { motion } from "framer-motion";
import { Briefcase, Code2 } from "lucide-react";
import aboutImg from "../assets/about.png";

const stats = [
  {
    icon: <Briefcase size={28} />,
    value: "2+",
    label: "Years Experience",
  },
  {
    icon: <Code2 size={28} />,
    value: "10+",
    label: "Technologies",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 md:py-24 bg-[#0F172A] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-52 h-52 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-cyan-500/20 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="uppercase tracking-[4px] text-cyan-400 text-sm font-semibold">
            About Me
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Passionate MERN Stack{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Developer
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 blur-xl opacity-30" />

            <img
              src={aboutImg}
              alt="Developer"
              className="relative w-full h-[320px] sm:h-[420px] md:h-[500px] lg:h-[550px] rounded-3xl border border-white/10 object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              MERN Stack Developer
            </h3>

            <p className="text-sm sm:text-base lg:text-lg text-gray-400 leading-8">
              I am a passionate MERN Stack Developer specializing in building
              scalable and modern web applications using React.js, Node.js,
              Express.js and MongoDB.
            </p>

            <p className="mt-5 text-sm sm:text-base lg:text-lg text-gray-400 leading-8">
              I enjoy creating responsive user interfaces, REST APIs,
              authentication systems, dashboards and full-stack applications
              while maintaining clean code and exceptional user experience.
            </p>

            {/* Personal Info */}
            <div className="grid grid-cols-2 gap-5 sm:gap-6 mt-10">
              <div>
                <h4 className="text-gray-500 text-sm">Name</h4>
                <p className="text-white">Amarjit Patil</p>
              </div>

              <div>
                <h4 className="text-gray-500 text-sm">Experience</h4>
                <p className="text-white">2+ Years</p>
              </div>

              <div>
                <h4 className="text-gray-500 text-sm">Location</h4>
                <p className="text-white">India</p>
              </div>

              <div>
                <h4 className="text-gray-500 text-sm">Availability</h4>
                <p className="text-green-400">Open To Work</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-10">
              {stats.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                  }}
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-4 sm:p-6 hover:border-cyan-500 transition-all duration-300"
                >
                  <div className="text-cyan-400 mb-4">{item.icon}</div>

                  <h4 className="text-2xl sm:text-3xl font-bold text-white">
                    {item.value}
                  </h4>

                  <p className="mt-2 text-sm text-gray-400">{item.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="w-full sm:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:scale-105 transition">
                Download Resume
              </button>

              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-3 rounded-full border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white transition text-center"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
