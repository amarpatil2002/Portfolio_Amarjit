import heroImage from "../assets/hero.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#020617]">
      {/* Background Glow */}
      <div className="absolute -top-20 -left-20 w-60 h-60 md:w-80 md:h-80 bg-cyan-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-60 h-60 md:w-80 md:h-80 bg-blue-500/20 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 lg:px-20 py-16 lg:py-0 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center w-full">
          {/* Left */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <span className="inline-block px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm">
              MERN Stack & AI Developer
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
              Hi, I'm
              <br />
              <span className="text-cyan-400">Amarjit Patil</span>
            </h1>

            <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg leading-8 text-slate-400">
              I build scalable, responsive and high-performance web applications
              using React, Node.js, Express.js and MongoDB. Passionate about AI,
              clean UI and modern web experiences.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition">
                Hire Me
              </button>

              <a
                href="#projects"
                className="px-8 py-4 rounded-xl border border-slate-700 text-white hover:bg-slate-800 transition"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="relative flex justify-center order-1 lg:order-2">
            {/* Glow */}
            <div className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[430px] lg:h-[430px] rounded-full bg-gradient-to-r from-cyan-500/40 via-blue-500/30 to-purple-500/30 blur-3xl" />

            {/* Ring */}
            <div className="absolute w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px] rounded-full border border-cyan-500/20" />

            {/* Image */}
            <img
              src={heroImage}
              alt="Amarjit Patil"
              className="
                relative
                z-10
                w-56
                h-56
                sm:w-72
                sm:h-72
                md:w-80
                md:h-80
                lg:w-[390px]
                lg:h-[390px]
                rounded-full
                object-cover
                border-4
                border-cyan-400/40
                shadow-[0_0_60px_rgba(34,211,238,0.35)]
                hover:scale-105
                transition-all
                duration-500
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
