import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="p-8 rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-500 text-white shadow-lg"
        >
          <div className="md:flex items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold">Join GreenSprout today</h3>
              <p className="mt-2 text-emerald-50/90">A brighter, greener way to manage learning and communication.</p>
            </div>
            <div className="mt-6 md:mt-0">
              <a
                href="#"
                className="inline-block px-5 py-3 rounded-lg bg-white text-emerald-700 font-semibold hover:bg-emerald-50 shadow-md"
              >
                Request a demo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
