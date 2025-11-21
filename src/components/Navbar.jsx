import { Link, useLocation } from 'react-router-dom'
import { Menu, School } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  const NavLink = ({ to, children }) => (
    <Link
      to={to}
      onClick={() => setOpen(false)}
      className={`px-4 py-2 rounded-md transition-colors ${
        pathname === to ? 'bg-emerald-600 text-white' : 'text-emerald-900/80 hover:bg-emerald-100'
      }`}
    >
      {children}
    </Link>
  )

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-emerald-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-emerald-500 to-lime-500 text-white shadow-md">
              <School size={22} />
            </div>
            <div>
              <p className="font-bold text-emerald-900 leading-tight">GreenSprout School</p>
              <p className="text-xs text-emerald-700/70 -mt-1">Learn • Play • Grow</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-2">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/blog">Blog</NavLink>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-md text-emerald-900/80 hover:bg-emerald-100"
            aria-label="Toggle menu"
          >
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden py-3 space-y-2 border-t border-emerald-100">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/blog">Blog</NavLink>
          </div>
        )}
      </nav>
    </header>
  )
}
