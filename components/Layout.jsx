'use client'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Layout({ children }) {
  const pathname = usePathname()
  const [isNavigating, setIsNavigating] = useState(false)

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/boutique', label: 'Boutique' },
    { href: '/lookbook', label: 'Lookbook' },
    { href: '/journal', label: 'Journal' },
    { href: '/contact', label: 'Contact' }
  ]

  // Reset navigation state when route changes
  useEffect(() => {
    setIsNavigating(false)
  }, [pathname])

  const handleNavigation = () => {
    setIsNavigating(true)
  }

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Navigation - Simplified without conflicting animations */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" onClick={handleNavigation}>
            <h1 className="text-2xl font-serif font-light text-gray-900 tracking-widest cursor-pointer hover:opacity-80 transition-opacity">
              CHERIE
            </h1>
          </Link>

          {/* Navigation Links - SIMPLIFIED */}
          <div className="flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={handleNavigation}>
                <span className={`
                  text-sm font-light tracking-wide pb-1 border-b transition-all duration-200
                  ${pathname === item.href 
                    ? 'text-black border-black' 
                    : 'text-gray-600 border-transparent hover:text-black hover:border-gray-400'
                  }
                `}>
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Cart */}
          <button className="bg-black text-white px-6 py-2 text-sm font-light hover:bg-gray-800 transition-colors tracking-wide">
            Cart (0)
          </button>
        </div>
      </nav>

      {/* Page Content with Smooth Transition */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {children}
        </motion.main>
      </AnimatePresence>

      <footer className="bg-gray-900 text-white py-12 text-center">
        <p className="text-sm font-light tracking-wide">© 2024 CHERIE Designed by Maleni M</p>
      </footer>
    </div>
  )
}