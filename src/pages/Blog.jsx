import { motion } from 'framer-motion'

const posts = [
  {
    id: 1,
    title: 'Spring Garden Day Recap',
    excerpt: 'Our students spent the day planting, learning about compost, and meeting friendly bugs.'
  },
  {
    id: 2,
    title: 'Reading Week Favorites',
    excerpt: 'From picture books to early readers, here are this month’s classroom picks.'
  },
  {
    id: 3,
    title: 'Healthy Lunchbox Ideas',
    excerpt: 'Simple, colorful meals kids love—made with seasonal produce.'
  }
]

export default function Blog() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-emerald-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-emerald-900">School Blog</h1>
          <p className="text-emerald-800/80 mt-2">Stories and updates from our classrooms and community.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="p-6 rounded-xl bg-white border border-emerald-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-36 rounded-lg bg-gradient-to-br from-emerald-100 to-lime-50 border border-emerald-100" />
              <h3 className="mt-4 text-xl font-semibold text-emerald-900">{post.title}</h3>
              <p className="mt-2 text-emerald-800/80">{post.excerpt}</p>
              <a href="#" className="mt-4 inline-flex text-emerald-700 font-semibold hover:underline">Read more</a>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  )
}
