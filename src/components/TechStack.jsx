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
  {
    name: "React",
    icon: <FaReact />,
  },
  {
    name: "Redux",
    icon: <SiRedux />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
  },
  {
    name: "Firebase",
    icon: <SiFirebase />,
  },
];

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="relative py-24 bg-[#0F172A] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute left-20 top-20 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-cyan-400 uppercase tracking-[4px]">
            Technologies
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-white mt-4">
            Tech
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              {" "}
              Stack
            </span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Technologies and tools I use to build modern, scalable, and
            high-performance web applications.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              className="
                group
                relative
                p-6
                rounded-3xl
                bg-white/5
                backdrop-blur-lg
                border
                border-white/10
                hover:border-cyan-500/40
                transition-all
                duration-500
                hover:-translate-y-2
                text-center
                overflow-hidden
              "
            >
              {/* Hover Glow */}
              <div
                className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition
                duration-500
                bg-gradient-to-br
                from-cyan-500/10
                via-blue-500/10
                to-purple-500/10
                "
              />

              {/* Icon */}
              <div
                className="
                relative
                text-5xl
                text-cyan-400
                flex
                justify-center
                mb-4
                group-hover:scale-110
                transition
                duration-300
                "
              >
                {tech.icon}
              </div>

              {/* Name */}
              <h3 className="relative text-white font-semibold">{tech.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
