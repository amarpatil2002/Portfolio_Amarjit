import { Code2, Database, Server, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Code2 size={28} />,
      title: "Frontend Development",
      desc: "Building responsive and modern user interfaces using React.js, Tailwind CSS and JavaScript.",
      active: true,
    },
    {
      icon: <Server size={28} />,
      title: "Backend Development",
      desc: "Creating secure REST APIs and scalable server-side applications using Node.js and Express.js.",
    },
    {
      icon: <Database size={28} />,
      title: "Database Management",
      desc: "Designing and optimizing MongoDB databases for high performance applications.",
    },
  ];

  return (
    <section className="relative bg-slate-950 py-16 md:py-24 overflow-hidden">
      {/* Background Blur Effects */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="container mx-auto px-5 sm:px-8 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT SIDE */}
          <div className="order-2 lg:order-1">
            <div className="space-y-5 max-w-xl mx-auto lg:mx-0">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`rounded-3xl p-[1px] transition-all duration-300 ${
                    service.active
                      ? "bg-gradient-to-r from-cyan-500 to-purple-500"
                      : "bg-slate-800"
                  }`}
                >
                  <div className="bg-slate-900 rounded-3xl p-6 flex gap-5 hover:bg-slate-800 transition">
                    <div
                      className={`min-w-[60px] h-[60px] rounded-2xl flex items-center justify-center ${
                        service.active
                          ? "bg-cyan-500/20 text-cyan-400"
                          : "bg-slate-800 text-purple-400"
                      }`}
                    >
                      {service.icon}
                    </div>

                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-white">
                        {service.title}
                      </h3>

                      <p className="text-slate-400 text-sm md:text-base mt-2 leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium">
              What I Do
            </span>

            <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-white">My Professional</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Services
              </span>
            </h2>

            <p className="mt-6 text-slate-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              I develop complete MERN stack applications from concept to
              deployment. My focus is on creating fast, scalable, and
              user-friendly web experiences that solve real-world problems.
            </p>

            <p className="mt-4 text-slate-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Whether it's a frontend interface, backend API, database
              architecture, or full-stack solution, I deliver clean and
              maintainable code following modern development practices.
            </p>

            <div className="mt-8">
              <button className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold hover:scale-105 transition-transform">
                Hire Me
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
