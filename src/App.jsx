import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-emerald-900">
      <Navbar />

      <Hero />
      <Features />

      <section id="about" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <div className="absolute -left-6 -top-6 w-20 h-20 bg-lime-300/40 rounded-full blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop"
              alt="Kids learning"
              className="relative rounded-xl shadow-xl border border-emerald-100"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold">A greener approach to early education</h2>
            <p className="mt-3 text-emerald-800/80">
              We believe that curiosity blooms in nurturing environments. Our platform helps schools create community,
              streamline communication, and celebrate every milestone.
            </p>
            <ul className="mt-6 space-y-3 text-emerald-800/90">
              <li className="flex items-start gap-3"><span className="mt-1 inline-block w-2 h-2 rounded-full bg-emerald-500" />Eco-friendly mindset</li>
              <li className="flex items-start gap-3"><span className="mt-1 inline-block w-2 h-2 rounded-full bg-emerald-500" />Teacher-first tools</li>
              <li className="flex items-start gap-3"><span className="mt-1 inline-block w-2 h-2 rounded-full bg-emerald-500" />Inclusive and accessible</li>
            </ul>
          </div>
        </div>
      </section>

      <CTA />

      <footer className="border-t border-emerald-100 py-8 bg-emerald-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-emerald-800/80 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} GreenSprout School</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
