import { Download, FileText } from "lucide-react";
import { motion } from "framer-motion";
import resume from "../assets/resume.pdf";

export default function Resume() {
  return (
    <section
      id="resume"
      className="relative py-24 bg-[#020617] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute left-20 top-20 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full" />
      <div className="absolute right-20 bottom-20 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 uppercase tracking-[4px]">Resume</span>

          <h2 className="text-4xl md:text-6xl font-bold text-white mt-4">
            My
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              {" "}
              Resume
            </span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Download my latest resume and explore my experience, projects,
            technical skills, and achievements.
          </p>
        </motion.div>

        {/* Resume Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="
            relative
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-10
            overflow-hidden
          "
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5" />

          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div>
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mb-6">
                <FileText size={40} className="text-white" />
              </div>

              <h3 className="text-3xl font-bold text-white">
                Node.js / MERN Developer
              </h3>

              <p className="text-gray-400 mt-4 leading-8">
                2+ years of experience building scalable, responsive, and
                user-friendly web applications using React.js, Node.js,
                Express.js, MongoDB, Redux Toolkit, and Tailwind CSS.
              </p>

              <a
                href={resume}
                download
                className="
                  inline-flex
                  items-center
                  gap-3
                  mt-8
                  px-8
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
            </div>

            {/* Right Stats */}
            <div className="grid grid-cols-2 gap-5">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h4 className="text-4xl font-bold text-cyan-400">2+</h4>
                <p className="text-gray-400 mt-2">Years Experience</p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h4 className="text-4xl font-bold text-cyan-400">5+</h4>
                <p className="text-gray-400 mt-2">Projects Built</p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h4 className="text-4xl font-bold text-cyan-400">10+</h4>
                <p className="text-gray-400 mt-2">Technologies</p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h4 className="text-4xl font-bold text-cyan-400">100%</h4>
                <p className="text-gray-400 mt-2">Dedication</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
