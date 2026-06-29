import { Download, FileText } from "lucide-react";
import { motion } from "framer-motion";
import resume from "../assets/resume.pdf";

export default function Resume() {
  const stats = [
    {
      value: "2+",
      label: "Years Experience",
    },
    {
      value: "5+",
      label: "Projects Built",
    },
    {
      value: "10+",
      label: "Technologies",
    },
    {
      value: "100%",
      label: "Dedication",
    },
  ];

  return (
    <section
      id="resume"
      className="relative py-20 md:py-24 bg-[#020617] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-60 h-60 md:w-80 md:h-80 bg-cyan-500/20 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-60 h-60 md:w-80 md:h-80 bg-purple-500/20 blur-[120px] rounded-full" />

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
            Resume
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Resume
            </span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-sm sm:text-base leading-7 text-gray-400">
            Download my latest resume to explore my experience, projects,
            technical skills and achievements.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-cyan-500/20
            bg-gradient-to-br
            from-slate-900/90
            to-slate-800/70
            backdrop-blur-xl
            shadow-xl
            p-5
            sm:p-8
            lg:p-10
          "
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left Side */}
            <div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mb-6">
                <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                MERN Stack & AI Developer
              </h3>

              <p className="mt-5 text-gray-400 leading-8 text-sm sm:text-base">
                Passionate Full Stack Developer specializing in React.js,
                Node.js, Express.js, MongoDB and modern AI technologies. I enjoy
                building scalable, secure and responsive web applications with
                clean UI and excellent user experiences.
              </p>

              <a
                href={resume}
                download
                className="
                  mt-8
                  inline-flex
                  w-full
                  sm:w-auto
                  justify-center
                  items-center
                  gap-3
                  px-6
                  sm:px-8
                  py-4
                  rounded-full
                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-600
                  text-white
                  font-semibold
                  hover:scale-105
                  transition-all
                  duration-300
                "
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>{" "}
            {/* Right Side */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                  }}
                  transition={{ duration: 0.3 }}
                  className="
                    group
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    backdrop-blur-md
                    p-4
                    sm:p-6
                    text-center
                    hover:border-cyan-400
                    hover:bg-cyan-500/5
                    transition-all
                    duration-300
                  "
                >
                  <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {item.value}
                  </h4>

                  <p className="mt-3 text-xs sm:text-sm lg:text-base text-gray-400">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
