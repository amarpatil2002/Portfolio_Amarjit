import heroImage from "../assets/hero.png";

const FloatingBadge = ({ title, subtitle, icon, className }) => (
  <div
    className={`hidden md:flex items-center gap-3 px-4 py-3
      bg-slate-900/80 backdrop-blur-md
      border border-slate-700
      rounded-2xl shadow-xl ${className}`}
  >
    <div className="text-2xl">{icon}</div>

    <div>
      <h4 className="text-white font-semibold text-sm">{title}</h4>
      <p className="text-slate-400 text-xs">{subtitle}</p>
    </div>
  </div>
);

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 min-h-screen">
      {/* Background Glow */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-cyan-500/20 blur-[120px]" />
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-purple-500/20 blur-[120px]" />

      <div className="container mx-auto px-6 sm:px-10 lg:px-20 py-16 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm">
              MERN Stack Developer
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Hi, I'm
              <br />
              Amarjit Patil
            </h1>

            <p className="mt-6 text-slate-400 text-base lg:text-lg max-w-xl mx-auto lg:mx-0">
              I build scalable web applications using React, Node.js,
              Express.js, and MongoDB. Passionate about creating modern,
              responsive, and user-friendly digital experiences.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-xl font-semibold transition">
                Hire Me
              </button>

              <button className="px-8 py-4 border border-slate-700 text-white rounded-xl hover:bg-slate-900 transition">
                View Projects
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative flex justify-center items-center min-h-[500px] lg:min-h-[650px]">
            {/* Glow Behind Image */}
            <div className="absolute w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] rounded-full bg-gradient-to-r from-cyan-500/30 to-purple-500/30 blur-3xl" />

            {/* Image */}
            <img
              src={heroImage}
              alt="Amarjit"
              className="relative z-10 w-full max-w-xs md:max-w-sm lg:max-w-md"
            />

            {/* Medium + Large */}
            <FloatingBadge
              className="absolute top-10 left-0 lg:-left-10"
              title="React.js"
              subtitle="Frontend"
              icon="⚛️"
            />

            <FloatingBadge
              className="absolute top-20 right-0 lg:-right-10"
              title="Node.js"
              subtitle="Backend"
              icon="🚀"
            />

            {/* Large Screens Only */}
            <FloatingBadge
              className="hidden lg:flex absolute bottom-24 -left-10"
              title="MongoDB"
              subtitle="Database"
              icon="🍃"
            />

            <FloatingBadge
              className="hidden lg:flex absolute bottom-12 -right-10"
              title="Express.js"
              subtitle="API"
              icon="⚡"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
