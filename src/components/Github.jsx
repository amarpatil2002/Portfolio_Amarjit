import { motion } from "framer-motion";

export default function GithubStats() {
  const username = "amarpatil2002";

  const cardStyle =
    "group relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-900/90 to-slate-800/70 backdrop-blur-xl shadow-lg hover:border-cyan-400 hover:shadow-cyan-500/20 transition-all duration-500";

  return (
    <section
      id="github"
      className="relative py-24 bg-[#020617] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/10 blur-[180px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-500/10 blur-[150px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="uppercase tracking-[5px] text-cyan-400 text-sm font-semibold">
            Developer Activity
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            GitHub{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Statistics
            </span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-400 leading-7">
            Showcasing my GitHub journey, coding consistency, open-source
            contributions, and the technologies I work with.
          </p>
        </motion.div>

        {/* Top Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* GitHub Stats */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className={cardStyle}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition duration-500" />

            <div className="relative p-6">
              <h3 className="text-xl font-semibold text-white mb-5">
                GitHub Overview
              </h3>

              <img
                className="w-full max-h-[240px] object-contain rounded-xl"
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true&hide_title=true&hide_rank=true&count_private=true&include_all_commits=true`}
                alt="GitHub Stats"
              />
            </div>
          </motion.div>

          {/* Streak */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className={cardStyle}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition duration-500" />

            <div className="relative p-6">
              <h3 className="text-xl font-semibold text-white mb-5">
                Contribution Streak
              </h3>

              <img
                className="w-full max-h-[240px] object-contain rounded-xl"
                src={`https://streak-stats.demolab.com?user=${username}&theme=tokyonight&hide_border=true`}
                alt="GitHub Streak"
              />
            </div>
          </motion.div>
        </div>

        {/* Contribution Graph */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className={`${cardStyle} mt-8`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition duration-500" />

          <div className="relative p-6">
            <h3 className="text-xl font-semibold text-white mb-5">
              Contribution Graph
            </h3>

            <img
              className="w-full max-h-[340px] object-contain rounded-xl"
              src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=tokyo-night&hide_border=true`}
              alt="Contribution Graph"
            />
          </div>
        </motion.div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className={`${cardStyle} mt-8`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition duration-500" />

          <div className="relative p-6">
            <h3 className="text-xl font-semibold text-white mb-5">
              Most Used Languages
            </h3>

            <div className="flex justify-center">
              <img
                className="w-full max-w-xl max-h-[280px] object-contain rounded-xl"
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&langs_count=8&theme=tokyonight&hide_border=true`}
                alt="Top Languages"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
