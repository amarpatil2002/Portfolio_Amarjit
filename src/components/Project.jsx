import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "E-Commerce Platform",
    image: "/projects/ecommerce.png",
    description:
      "Full-stack MERN e-commerce application with authentication, product management, cart functionality, and Razorpay payment integration.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Redux", "Tailwind"],
    github: "https://github.com/yourusername/ecommerce",
    live: "https://ecommerce-demo.vercel.app",
  },

  {
    title: "Admin Dashboard",
    image: "/projects/dashboard.png",
    description:
      "Modern analytics dashboard featuring charts, user management, role-based authentication, and real-time statistics.",
    tech: ["React", "Redux Toolkit", "Chart.js", "Node.js"],
    github: "https://github.com/yourusername/dashboard",
    live: "https://dashboard-demo.vercel.app",
  },

  {
    title: "Job Portal",
    image: "/projects/jobportal.png",
    description:
      "MERN-based job portal where recruiters can post jobs and candidates can apply online.",
    tech: ["React", "MongoDB", "Node.js", "Express"],
    github: "https://github.com/yourusername/jobportal",
    live: "https://jobportal-demo.vercel.app",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-[#020617]">
      <div className="absolute top-20 right-20 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <span className="text-cyan-400 uppercase tracking-[4px]">
            Portfolio
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-white mt-4">
            Featured
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              {" "}
              Projects
            </span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Some of my recent projects showcasing my expertise in React.js,
            Node.js, and full-stack development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="
                group
                rounded-3xl
                overflow-hidden
                border
                border-white/10
                bg-white/5
                backdrop-blur-lg
                hover:border-cyan-500/50
                transition-all
                duration-500
                hover:-translate-y-3
              "
            >
              {/* Image */}
              <div className="overflow-hidden h-60">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-110
                    transition-transform
                    duration-700
                  "
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-7 mb-5">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="
                        px-3
                        py-1
                        rounded-full
                        text-sm
                        bg-cyan-500/10
                        text-cyan-400
                        border
                        border-cyan-500/20
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
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
                      font-medium
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
                      flex
                      items-center
                      justify-center
                      w-12
                      rounded-xl
                      border
                      border-white/10
                      text-white
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
