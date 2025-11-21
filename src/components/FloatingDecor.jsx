import { motion } from 'framer-motion'
import { BookOpen, Pencil, Star } from 'lucide-react'

// Reusable floating decorative elements for modern "flying" feel
// Use className to position within parent (e.g., absolute inset-0)
export default function FloatingDecor({ className = '' }) {
  const floatTransition = (delay = 0) => ({
    duration: 6,
    delay,
    ease: 'easeInOut',
    repeat: Infinity,
    repeatType: 'mirror',
  })

  const spinTransition = {
    duration: 20,
    ease: 'linear',
    repeat: Infinity,
  }

  return (
    <div className={`pointer-events-none ${className}`} aria-hidden>
      {/* Soft blurred orbs */}
      <motion.span
        initial={{ y: -10 }}
        animate={{ y: 10 }}
        transition={floatTransition(0)}
        className="absolute top-6 left-6 w-24 h-24 rounded-full bg-emerald-300/30 blur-2xl"
      />
      <motion.span
        initial={{ y: 12 }}
        animate={{ y: -12 }}
        transition={floatTransition(0.8)}
        className="absolute bottom-10 right-8 w-28 h-28 rounded-full bg-lime-300/30 blur-2xl"
      />
      <motion.span
        initial={{ y: -8 }}
        animate={{ y: 8 }}
        transition={floatTransition(0.4)}
        className="absolute top-1/3 right-1/3 w-16 h-16 rounded-full bg-emerald-200/30 blur-2xl"
      />

      {/* Floating icons */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: -14 }}
        transition={floatTransition(0.2)}
        className="absolute -top-4 right-10 p-2 rounded-lg bg-white/70 backdrop-blur border border-emerald-100 shadow-sm text-emerald-700"
      >
        <BookOpen size={20} />
      </motion.div>

      <motion.div
        initial={{ y: 0 }}
        animate={{ y: 16 }}
        transition={floatTransition(0.5)}
        className="absolute top-1/2 -left-4 p-2 rounded-lg bg-white/70 backdrop-blur border border-emerald-100 shadow-sm text-emerald-700"
      >
        <Pencil size={18} />
      </motion.div>

      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={spinTransition}
        className="absolute bottom-8 left-10 text-emerald-500/80"
      >
        <Star size={18} />
      </motion.div>

      {/* Small sparkles */}
      {[...Array(8)].map((_, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0.4, y: 0 }}
          animate={{ opacity: 0.9, y: i % 2 === 0 ? -10 : 10 }}
          transition={floatTransition(i * 0.2)}
          className="absolute w-1.5 h-1.5 rounded-full bg-emerald-500/70"
          style={{
            top: `${10 + (i * 10) % 70}%`,
            left: `${15 + (i * 12) % 70}%`,
          }}
        />
      ))}
    </div>
  )
}
