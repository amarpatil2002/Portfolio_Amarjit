import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-20 md:py-24 bg-[#0F172A] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-52 h-52 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-cyan-500/20 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-52 h-52 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-purple-500/20 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-cyan-400 uppercase tracking-[4px] text-sm font-semibold">
            Contact
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Let's{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Work Together
            </span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto px-2 text-sm sm:text-base leading-7 text-gray-400">
            Have a project in mind or looking for a MERN Stack Developer? Feel
            free to reach out. I'm always open to discussing new opportunities
            and collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8">
              Get In Touch
            </h3>

            <div className="space-y-5">
              {/* Email */}
              <div className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                  <Mail className="text-cyan-400" />
                </div>

                <div>
                  <h4 className="text-white font-semibold">Email</h4>

                  <p className="text-gray-400 break-all">
                    amarjitpatil2002@gmail.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                  <Phone className="text-cyan-400" />
                </div>

                <div>
                  <h4 className="text-white font-semibold">Phone</h4>

                  <p className="text-gray-400">+91 76662 25895</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                  <MapPin className="text-cyan-400" />
                </div>

                <div>
                  <h4 className="text-white font-semibold">Location</h4>

                  <p className="text-gray-400">Pune, Maharashtra, India</p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-4 mt-10 justify-center lg:justify-start">
              <a
                href="https://github.com/amarpatil2002"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-cyan-500 hover:border-cyan-500 hover:scale-110 transition-all duration-300"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/amarjit-patil-392a01242"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-cyan-500 hover:border-cyan-500 hover:scale-110 transition-all duration-300"
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-cyan-500 hover:border-cyan-500 hover:scale-110 transition-all duration-300"
              >
                <FaInstagram size={22} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              rounded-3xl
              p-5
              sm:p-6
              lg:p-8
              space-y-5
            "
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="
                  w-full
                  bg-[#1E293B]
                  border
                  border-white/10
                  rounded-xl
                  px-4
                  sm:px-5
                  py-3
                  sm:py-4
                  text-sm
                  sm:text-base
                  text-white
                  placeholder:text-gray-500
                  outline-none
                  focus:border-cyan-500
                  transition
                "
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="
                  w-full
                  bg-[#1E293B]
                  border
                  border-white/10
                  rounded-xl
                  px-4
                  sm:px-5
                  py-3
                  sm:py-4
                  text-sm
                  sm:text-base
                  text-white
                  placeholder:text-gray-500
                  outline-none
                  focus:border-cyan-500
                  transition
                "
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Subject"
                className="
                  w-full
                  bg-[#1E293B]
                  border
                  border-white/10
                  rounded-xl
                  px-4
                  sm:px-5
                  py-3
                  sm:py-4
                  text-sm
                  sm:text-base
                  text-white
                  placeholder:text-gray-500
                  outline-none
                  focus:border-cyan-500
                  transition
                "
              />
            </div>

            <div>
              <textarea
                rows={6}
                placeholder="Write your message..."
                className="
                  w-full
                  bg-[#1E293B]
                  border
                  border-white/10
                  rounded-xl
                  px-4
                  sm:px-5
                  py-3
                  sm:py-4
                  text-sm
                  sm:text-base
                  text-white
                  placeholder:text-gray-500
                  resize-none
                  outline-none
                  focus:border-cyan-500
                  transition
                "
              />
            </div>

            <button
              type="submit"
              className="
                w-full
                py-3
                sm:py-4
                rounded-xl
                bg-gradient-to-r
                from-cyan-500
                to-blue-600
                text-white
                font-semibold
                flex
                items-center
                justify-center
                gap-2
                shadow-lg
                shadow-cyan-500/20
                hover:scale-[1.02]
                hover:shadow-cyan-500/40
                transition-all
                duration-300
              "
            >
              <Send size={18} />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
