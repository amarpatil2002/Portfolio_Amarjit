import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "E-Commerce Platform",
    image: "/projects/ecommerce.png",
    description:
      "Full-stack MERN e-commerce application with authentication, product management, cart functionality and Razorpay payment integration.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Redux", "Tailwind"],
    github: "https://github.com/yourusername/ecommerce",
    live: "https://ecommerce-demo.vercel.app",
  },
  {
    title: "Admin Dashboard",
    image: "/projects/dashboard.png",
    description:
      "Modern analytics dashboard with charts, authentication, role management and responsive UI.",
    tech: ["React", "Redux Toolkit", "Chart.js", "Node.js"],
    github: "https://github.com/yourusername/dashboard",
    live: "https://dashboard-demo.vercel.app",
  },
  {
    title: "Job Portal",
    image: "/projects/jobportal.png",
    description:
      "Full-stack MERN job portal for recruiters and candidates with secure authentication.",
    tech: ["React", "MongoDB", "Node.js", "Express"],
    github: "https://github.com/yourusername/jobportal",
    live: "https://jobportal-demo.vercel.app",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-20 md:py-24 bg-[#020617] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-52 h-52 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-cyan-500/20 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="uppercase tracking-[4px] text-cyan-400 text-sm font-semibold">
            Portfolio
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto px-2 text-sm sm:text-base leading-7 text-gray-400">
            Some of my recent projects showcasing my expertise in React, Node.js
            and Full Stack MERN development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg hover:border-cyan-500/40 transition-all duration-500"
            >
              {/* Image */}
              <div className="overflow-hidden h-52 sm:h-56 md:h-60">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400 leading-7 mb-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full text-xs sm:text-sm bg-cyan-500/10 border border-cyan-500/20 text-cyan-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                ```jsx
                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex-1
                      flex
                      items-center
                      justify-center
                      gap-2
                      py-3
                      rounded-xl
                      bg-gradient-to-r
                      from-cyan-500
                      to-blue-600
                      text-white
                      text-sm
                      sm:text-base
                      font-medium
                      hover:opacity-90
                      transition-all
                      duration-300
                    "
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      w-12
                      sm:w-14
                      flex
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/10
                      text-white
                      hover:bg-cyan-500
                      hover:border-cyan-500
                      transition-all
                      duration-300
                    "
                  >
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
