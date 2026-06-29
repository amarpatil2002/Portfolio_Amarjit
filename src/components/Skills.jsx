import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJsSquare, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiRedux, SiTailwindcss } from "react-icons/si";

const skills = [
  {
    name: "React.js",
    icon: <FaReact />,
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
  },
  {
    name: "Redux Toolkit",
    icon: <SiRedux />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },
  {
    name: "Git & GitHub",
    icon: <FaGitAlt />,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 bg-[#020617] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 uppercase tracking-widest">
            Technical Skills
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-white mt-4">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Technologies and tools I use to build scalable, high-performance web
            applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.05,
              }}
              className="
                bg-white/5
                backdrop-blur-lg
                border
                border-white/10
                rounded-3xl
                p-8
                flex
                flex-col
                items-center
                justify-center
                text-center
                hover:border-cyan-400
                hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]
                transition-all
                duration-300
              "
            >
              <div className="text-5xl text-cyan-400 mb-5">{skill.icon}</div>

              <h3 className="text-white font-semibold text-lg">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
