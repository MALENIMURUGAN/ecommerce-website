'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [buttonColor, setButtonColor] = useState('bg-gray-900')

  // Color pop effect on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setButtonColor('bg-gradient-to-r from-pink-500 to-rose-500')
    }, 4000) // Change color after 4 seconds

    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-cream-50 overflow-hidden pt-20" // Added pt-20 for top spacing
    >
      {/* Animated Background Elements */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.1, 0.3]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-20 w-64 h-64 bg-pink-100 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-20 right-20 w-80 h-80 bg-blue-100 rounded-full blur-3xl"
      />

      {/* Main Content Container with Better Spacing */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-12"> {/* Added py-12 */}
        <motion.div className="space-y-6"> {/* Reduced space-y from 8 to 6 */}
          
          {/* CHERIE with Proper Top Spacing */}
          <motion.div className="overflow-hidden pb-2"> {/* Reduced padding */}
            <motion.h1 
              className="text-6xl md:text-8xl font-serif font-light text-gray-900 mb-2 tracking-tight" // Reduced text size
              initial={{ opacity: 0, y: 30 }} // Reduced y from 50 to 30
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
                className="inline-block overflow-hidden"
              >
                CHERIE
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* "MADE WITH ELEGANCE" */}
          <motion.h2 
            className="text-sm font-light tracking-[0.3em] text-gray-600 uppercase mb-4" // Reduced margin
            initial={{ opacity: 0, y: 15 }} // Reduced y from 20 to 15
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            MADE WITH ELEGANCE
          </motion.h2>

          {/* Main Title */}
          <motion.div className="overflow-hidden py-1"> {/* Reduced padding */}
            <motion.h3 
              className="text-2xl md:text-4xl font-light text-gray-800 leading-tight mb-4" // Reduced text size
              initial={{ opacity: 0, y: 20 }} // Reduced y from 30 to 20
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 1 }}
            >
              Soft, Comfy
              <br />
              <motion.span 
                className="text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2 }}
              >
                Clothes Style
              </motion.span>
            </motion.h3>
          </motion.div>

          {/* Description Text */}
          <motion.div className="max-w-2xl mx-auto">
            <motion.p 
              className="text-base md:text-lg text-gray-600 leading-relaxed font-light mb-6" // Reduced text size
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.0, duration: 1.2 }}
            >
              We provide elegant, high-quality dress clothing that speaks to your sense of style and identity.
            </motion.p>
          </motion.div>

          {/* Animated Divider Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }} // Reduced width
            transition={{ delay: 2.8, duration: 1 }}
            className="w-20 h-px bg-gray-300 mx-auto my-6" // Reduced margin
          />

          {/* START NOW Button with Color Pop Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} // Reduced y from 30 to 20
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.2, duration: 0.8 }}
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                y: -2,
                boxShadow: "0 15px 30px rgba(0,0,0,0.15)" // Reduced shadow
              }}
              whileTap={{ scale: 0.95 }}
              className={`relative ${buttonColor} text-white px-10 py-3 text-sm font-light tracking-widest uppercase overflow-hidden group transition-all duration-1000`} // Added transition
            >
              <span className="relative z-10">START NOW</span>
              
              {/* Button Hover Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.0 }}
            className="pt-12" // Reduced padding
          >
            <motion.div
              animate={{ y: [0, 8, 0] }} // Reduced bounce
              transition={{ duration: 2, repeat: Infinity }}
              className="text-gray-400 text-xs tracking-widest uppercase flex flex-col items-center gap-1" // Reduced text size
            >
              <span>SCROLL TO DISCOVER</span>
              <motion.div
                animate={{ y: [0, 6, 0] }} // Reduced bounce
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-3 h-3 border-r-2 border-b-2 border-gray-400 transform rotate-45"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Fashion Elements - Positioned Lower */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} // Reduced movement
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 left-10 text-3xl opacity-20" // Positioned lower
      >
        👗
      </motion.div>
      
      <motion.div
        animate={{ y: [0, 25, 0], rotate: [0, -5, 0] }} // Reduced movement
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-40 right-16 text-3xl opacity-20" // Positioned higher
      >
        ✨
      </motion.div>
    </motion.section>
  )
}