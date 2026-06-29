import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJsSquare, FaGitAlt } from "react-icons/fa";

import { SiMongodb, SiExpress, SiRedux, SiTailwindcss } from "react-icons/si";

const skills = [
  {
    name: "React.js",
    level: 95,
    icon: <FaReact />,
  },
  {
    name: "JavaScript",
    level: 90,
    icon: <FaJsSquare />,
  },
  {
    name: "Node.js",
    level: 85,
    icon: <FaNodeJs />,
  },
  {
    name: "MongoDB",
    level: 80,
    icon: <SiMongodb />,
  },
  {
    name: "Express.js",
    level: 85,
    icon: <SiExpress />,
  },
  {
    name: "Redux Toolkit",
    level: 90,
    icon: <SiRedux />,
  },
  {
    name: "Tailwind CSS",
    level: 95,
    icon: <SiTailwindcss />,
  },
  {
    name: "Git & GitHub",
    level: 85,
    icon: <FaGitAlt />,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 bg-[#020617] overflow-hidden"
    >
      {/* Glow Effect */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 uppercase tracking-widest">
            Technical Skills
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-white mt-4">
            My
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Expertise
            </span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Technologies and tools I use to build scalable, high-performance web
            applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="
                bg-white/5
                backdrop-blur-lg
                border
                border-white/10
                rounded-3xl
                p-6
                hover:border-cyan-500
                transition-all
                duration-300
              "
            >
              {/* Top */}
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-4">
                  <div
                    className="
                    text-3xl
                    text-cyan-400
                  "
                  >
                    {skill.icon}
                  </div>

                  <h3 className="text-white font-semibold text-lg">
                    {skill.name}
                  </h3>
                </div>

                <span className="text-cyan-400 font-bold">{skill.level}%</span>
              </div>

              {/* Progress Bar */}
              <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${skill.level}%`,
                  }}
                  transition={{
                    duration: 1.2,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className="
                    h-full
                    rounded-full
                    bg-gradient-to-r
                    from-cyan-400
                    via-blue-500
                    to-purple-500
                  "
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
