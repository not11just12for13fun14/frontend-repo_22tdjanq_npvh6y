import { motion } from 'framer-motion'
import { BookOpen, Users, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: BookOpen,
    title: 'Interactive Learning',
    desc: 'Engaging activities and resources tailored for young learners.',
  },
  {
    icon: Users,
    title: 'Family Portal',
    desc: 'Stay connected with updates, calendars, and messaging.',
  },
  {
    icon: ShieldCheck,
    title: 'Safe & Secure',
    desc: 'Privacy-first design and secure access for peace of mind.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-16 bg-gradient-to-b from-white to-emerald-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-emerald-900">Built for curious minds</h2>
          <p className="mt-2 text-emerald-800/80">Everything a modern elementary school needs, in one place.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-xl bg-white border border-emerald-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-lime-500 text-white flex items-center justify-center shadow-md">
                <f.icon />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-emerald-900">{f.title}</h3>
              <p className="mt-2 text-emerald-800/80">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
