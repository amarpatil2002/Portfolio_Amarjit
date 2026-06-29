import { motion } from "framer-motion";
import { Briefcase, FolderGit2, Code2, Trophy } from "lucide-react";

const stats = [
  {
    icon: <Briefcase size={28} />,
    value: "2+",
    label: "Years Experience",
  },
  {
    icon: <FolderGit2 size={28} />,
    value: "15+",
    label: "Projects",
  },
  {
    icon: <Code2 size={28} />,
    value: "10+",
    label: "Technologies",
  },
  {
    icon: <Trophy size={28} />,
    value: "100%",
    label: "Client Satisfaction",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-[#0F172A] overflow-hidden">
      {/* Background Blur */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-cyan-400 uppercase tracking-widest">
            About Me
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-white mt-4">
            Passionate React
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Developer
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur-xl opacity-30" />

            <img
              src="/about.jpg"
              alt="Developer"
              className="relative rounded-3xl border border-white/10 object-cover w-full h-[550px]"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              MERN Stack Developer with 2 Years Experience
            </h3>

            <p className="text-gray-400 leading-8 text-lg">
              I am a passionate React Developer specializing in building modern,
              scalable, and high-performance web applications using React.js,
              Node.js, Express.js, and MongoDB.
            </p>

            <p className="text-gray-400 leading-8 text-lg mt-4">
              Over the past 2 years, I have developed responsive user
              interfaces, REST APIs, authentication systems, dashboards, and
              full-stack applications while focusing on clean code and
              exceptional user experience.
            </p>

            {/* Personal Info */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div>
                <h4 className="text-gray-500">Name</h4>
                <p className="text-white">Amarjit Patil</p>
              </div>

              <div>
                <h4 className="text-gray-500">Experience</h4>
                <p className="text-white">2 Years</p>
              </div>

              <div>
                <h4 className="text-gray-500">Location</h4>
                <p className="text-white">India</p>
              </div>

              <div>
                <h4 className="text-gray-500">Availability</h4>
                <p className="text-green-400">Open To Work</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-5 mt-12">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="
                  group
                  p-6
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-lg
                  hover:border-cyan-500
                  hover:-translate-y-2
                  transition-all
                  duration-300
                  "
                >
                  <div className="text-cyan-400 mb-4">{item.icon}</div>

                  <h4 className="text-3xl font-bold text-white">
                    {item.value}
                  </h4>

                  <p className="text-gray-400 mt-2">{item.label}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 flex gap-4">
              <button
                className="
                px-8 py-3
                rounded-full
                bg-gradient-to-r
                from-cyan-500
                to-blue-600
                text-white
                font-semibold
                hover:scale-105
                transition
                "
              >
                Download Resume
              </button>

              <button
                className="
                px-8 py-3
                rounded-full
                border
                border-cyan-500
                text-cyan-400
                hover:bg-cyan-500
                hover:text-white
                transition
                "
              >
                Contact Me
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
