import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaJs } from "react-icons/fa";
import {
  SiRedux,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiFirebase,
} from "react-icons/si";

const technologies = [
  { name: "React", icon: <FaReact /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Firebase", icon: <SiFirebase /> },
];

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="relative py-20 md:py-24 bg-[#0F172A] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-52 h-52 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-cyan-500/20 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="uppercase tracking-[4px] text-cyan-400 text-sm font-semibold">
            Technologies
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Tech{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Stack
            </span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto px-2 text-sm sm:text-base text-gray-400 leading-7">
            Technologies and tools I use to build modern, scalable and
            high-performance web applications.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.05,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-lg
                p-5
                sm:p-6
                lg:p-7
                text-center
                hover:border-cyan-500/40
                hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]
                transition-all
                duration-500
              "
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10" />

              {/* Icon */}
              <div className="relative flex justify-center text-4xl sm:text-5xl text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>

              {/* Name */}
              <h3 className="relative text-sm sm:text-base lg:text-lg font-semibold text-white">
                {tech.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
