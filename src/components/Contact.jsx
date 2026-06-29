import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 bg-[#0F172A] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-cyan-400 uppercase tracking-[4px]">
            Contact
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-white mt-4">
            Let's
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              {" "}
              Work Together
            </span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Have a project in mind or looking for a React / MERN developer? Feel
            free to contact me.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8">Get In Touch</h3>

            <div className="space-y-6">
              <div className="flex gap-5 p-5 rounded-2xl bg-white/5 border border-white/10">
                <Mail className="text-cyan-400" />
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <p className="text-gray-400">amarjitpatil2002@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-5 p-5 rounded-2xl bg-white/5 border border-white/10">
                <Phone className="text-cyan-400" />
                <div>
                  <h4 className="text-white font-semibold">Phone</h4>
                  <p className="text-gray-400">+91 76662 25895</p>
                </div>
              </div>

              <div className="flex gap-5 p-5 rounded-2xl bg-white/5 border border-white/10">
                <MapPin className="text-cyan-400" />
                <div>
                  <h4 className="text-white font-semibold">Location</h4>
                  <p className="text-gray-400">Pune, Maharashtra, India</p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            {/* Social Icons */}
            <div className="flex gap-5 mt-10">
              <a
                href="https://github.com/amarpatil2002"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-cyan-500 hover:border-cyan-500 hover:scale-110 transition-all duration-300"
              >
                <FaGithub size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/amarjit-patil-392a01242"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-cyan-500 hover:border-cyan-500 hover:scale-110 transition-all duration-300"
              >
                <FaLinkedin size={24} />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-cyan-500 hover:border-cyan-500 hover:scale-110 transition-all duration-300"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
            bg-white/5
            backdrop-blur-lg
            border
            border-white/10
            rounded-3xl
            p-8
            space-y-6
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
                px-5
                py-4
                text-white
                outline-none
                focus:border-cyan-500
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
                px-5
                py-4
                text-white
                outline-none
                focus:border-cyan-500
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
                px-5
                py-4
                text-white
                outline-none
                focus:border-cyan-500
                "
              />
            </div>

            <div>
              <textarea
                rows="6"
                placeholder="Write your message..."
                className="
                w-full
                bg-[#1E293B]
                border
                border-white/10
                rounded-xl
                px-5
                py-4
                text-white
                resize-none
                outline-none
                focus:border-cyan-500
                "
              />
            </div>

            <button
              className="
              w-full
              py-4
              rounded-xl
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              text-white
              font-semibold
              flex
              justify-center
              items-center
              gap-2
              hover:scale-[1.02]
              transition
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
