export default function GithubStats() {
  const username = "YOUR_GITHUB_USERNAME";

  return (
    <section id="github" className="py-24 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 uppercase tracking-[4px]">
            Open Source
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-white mt-4">
            GitHub
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              {" "}
              Statistics
            </span>
          </h2>

          <p className="text-gray-400 mt-5">
            My coding activity and contributions.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* GitHub Stats */}
          <div
            className="
            rounded-3xl
            bg-white/5
            border
            border-white/10
            p-4
            backdrop-blur-lg
            "
          >
            <img
              className="w-full"
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true`}
              alt="GitHub Stats"
            />
          </div>

          {/* Streak Stats */}
          <div
            className="
            rounded-3xl
            bg-white/5
            border
            border-white/10
            p-4
            backdrop-blur-lg
            "
          >
            <img
              className="w-full"
              src={`https://streak-stats.demolab.com?user=${username}&theme=tokyonight&hide_border=true`}
              alt="GitHub Streak"
            />
          </div>
        </div>

        {/* Top Languages */}
        <div
          className="
          mt-8
          rounded-3xl
          bg-white/5
          border
          border-white/10
          p-4
          backdrop-blur-lg
          "
        >
          <img
            className="w-full"
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true`}
            alt="Top Languages"
          />
        </div>
      </div>
    </section>
  );
}
