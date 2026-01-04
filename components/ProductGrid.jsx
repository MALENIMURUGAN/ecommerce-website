'use client'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'
const elegantProducts = [
  {
    id: 1,
    name: "Cashmere Knit Sweater",
    price: 289.99,
    image: "image/image.png",
    category: "Knitwear",
    description: "Soft, warm cashmere for cozy elegance."
  },
  {
    id: 2,
    name: "Satin Evening Gown",
    price: 459.99,
    image: "image/satin gown.jpg",
    category: "Evening Wear",
    description: "Luxurious satin gown perfect for special occasions."
  },
  {
    id: 3,
    name: "Tailored Wool Blazer",
    price: 399.99,
    image: "image/wool.jpg",
    category: "Tailoring",
    description: "Classic wool blazer, sharp and modern."
  },
  {
    id: 4,
    name: "Linen Summer Dress",
    price: 149.99,
    image: "image/linen.jpg",
    category: "Summer Wear",
    description: "Lightweight linen dress, perfect for warm days."
  },
  {
    id: 5,
    name: "Silk Scarf",
    price: 79.99,
    image: "image/scarf.jpg",
    category: "Accessories",
    description: "Elegant silk scarf with a classic pattern."
  },
  {
    id: 6,
    name: "Pleated Skirt",
    price: 199.99,
    image: "image/skirt.jpg",
    category: "Skirts",
    description: "Flowy midi skirt with pleated texture."
  }
]

export default function ProductGrid() {
  return (
    <section className="py-20 px-8 bg-[#18110c] min-h-screen">
      <h2 className="text-white text-4xl font-serif text-center mb-8 tracking-wide">The Collection</h2>
      <p className="text-neutral-300 text-center mb-12 max-w-xl mx-auto italic font-light">
        Lovingly curated pieces for timeless luxury
      </p>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-8 space-y-8">
        {elegantProducts.map((product) => (
          <motion.div
            key={product.id}
            className="break-inside-avoid rounded-2xl overflow-hidden bg-[#241a14] shadow-xl hover:shadow-2xl transition hover:-translate-y-2 group relative mb-8"
            whileHover={{ scale: 1.02 }}
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="rounded-t-2xl object-cover w-full h-[340px] group-hover:scale-105 transition-transform duration-700"
            />
            <div className="p-6 space-y-2 flex flex-col">
              <span className="text-xs text-[#f9e3c6] uppercase font-serif tracking-wide">{product.category}</span>
              <h3 className="font-serif font-light text-white text-2xl">{product.name}</h3>
              <p className="text-neutral-400 font-light text-sm">{product.description}</p>
              <div className="flex justify-between items-center pt-3">
                <span className="text-[#f9c76e] font-medium text-lg">${product.price}</span>
                <motion.button
                  className="border border-[#f9c76e] text-[#f9c76e] px-6 py-2 rounded-3xl font-light text-sm hover:bg-[#f9c76e] hover:text-[#241a14] transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ADD TO CART
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
