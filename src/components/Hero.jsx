import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-300/40 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] bg-lime-300/40 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-emerald-900"
          >
            Where young minds learn, play, and grow
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 text-lg text-emerald-800/80"
          >
            A modern school platform built to engage families, empower teachers, and inspire students.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 flex items-center gap-3"
          >
            <a
              href="#features"
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-gradient-to-br from-emerald-600 to-emerald-500 text-white font-semibold shadow-lg shadow-emerald-600/20 hover:shadow-xl hover:shadow-emerald-600/30 transition-all"
            >
              Get Started
            </a>
            <a
              href="#about"
              className="px-5 py-3 rounded-lg bg-emerald-50 text-emerald-900 font-semibold hover:bg-emerald-100 border border-emerald-200"
            >
              Learn More
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative"
        >
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-emerald-100 to-lime-50 border border-emerald-100 p-4 shadow-inner">
            <div className="h-full w-full rounded-xl bg-white grid grid-cols-2 gap-3 p-3">
              <div className="rounded-lg bg-emerald-50 border border-emerald-100" />
              <div className="rounded-lg bg-emerald-50 border border-emerald-100" />
              <div className="col-span-2 rounded-lg bg-lime-50 border border-lime-100" />
              <div className="rounded-lg bg-emerald-50 border border-emerald-100" />
              <div className="rounded-lg bg-emerald-50 border border-emerald-100" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
