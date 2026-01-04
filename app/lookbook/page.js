import Layout from '@/components/Layout'

export default function Lookbook() {
  const editorialLooks = [
    {
      id: 1,
      title: "Urban Elegance",
      season: "Spring/Summer 2024",
      description: "Modern city styling meets timeless sophistication. Featuring our signature tailored pieces with contemporary silhouettes.",
      images: [
        { src: "/image/paris.jpg", alt: "City street style" },
        { src: "/image/architect.jpg", alt: "Architectural dressing" }
      ],
      products: ["Tailored Blazer", "Silk Trousers", "Leather Loafers"],
      colorPalette: ["Navy", "Cream", "Charcoal"]
    },
    {
      id: 2,
      title: "Evening Glamour", 
      season: "Collection No. 02",
      description: "Red carpet ready ensembles that blend dramatic silhouettes with delicate craftsmanship.",
      images: [
        { src: "/image/eve.jpg", alt: "Evening gown" },
        { src: "/image/cocktail.jpg", alt: "Cocktail dress" }
      ],
      products: ["Satin Gown", "Crystal Earrings", "Clutch Bag"],
      colorPalette: ["Black", "Burgundy", "Gold"]
    },
    {
      id: 3,
      title: "Coastal Minimalism",
      season: "Resort Wear",
      description: "Breathable fabrics and relaxed silhouettes inspired by Mediterranean shores.",
      images: [
        { src: "/image/beach.jpg", alt: "Beach styling" },
        { src: "/image/resort.jpg", alt: "Resort wear" }
      ],
      products: ["Linen Dress", "Straw Hat", "Slide Sandals"],
      colorPalette: ["White", "Beige", "Sky Blue"]
    },
    {
      id: 4,
      title: "Architectural Shapes",
      season: "Avant-Garde",
      description: "Bold geometric cuts and structured forms that challenge conventional fashion.",
      images: [
        { src: "/image/structural.jpg", alt: "Structural design" },
        { src: "/image/geometric.jpg", alt: "Geometric fashion" }
      ],
      products: ["Structured Dress", "Asymmetric Top", "Block Heels"],
      colorPalette: ["White", "Black", "Silver"]
    }
  ]

  // BTS Images array
  const btsImages = [
    { src: "/image/bts-1.jpg", alt: "Photoshoot preparation", caption: "Setup" },
    { src: "/image/bts-2.jpg", alt: "Model getting ready", caption: "Preparation" },
    { src: "/image/bts-3.jpg", alt: "Lighting adjustment", caption: "Lighting" },
    { src: "/image/bts-4.jpg", alt: "Stylist working", caption: "Styling" },
    { src: "/image/bts-5.jpg", alt: "Camera equipment", caption: "Gear" }, // Fixed typo: bt-5 → bts-5
    { src: "/image/bts-6.jpg", alt: "Team discussion", caption: "Planning" },
    { src: "/image/bts-7.jpg", alt: "Makeup touchup", caption: "Beauty" },
    { src: "/image/bts-8.jpg", alt: "Final adjustments", caption: "Details" }
  ]

  return (
    <Layout>
      {/* Lookbook Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-light mb-6 text-gray-900">
            Lookbook
          </h1>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto mb-8">
            Styled narratives from our latest collections. Each look tells a story of elegance and innovation.
          </p>
          <div className="w-24 h-px bg-gray-300 mx-auto"></div>
        </div>
      </section>

      {/* Editorial Looks Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto space-y-24">
          {editorialLooks.map((look, index) => (
            <div key={look.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
              
              {/* Images Side - SIMPLE IMG TAGS */}
              <div className="lg:w-1/2 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  {look.images.map((image, imgIndex) => (
                    <div key={imgIndex} className="relative group cursor-pointer">
                      <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                        {/* SIMPLE IMG TAG - NO ERROR HANDLING */}
                        <img 
                          src={image.src} 
                          alt={image.alt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:w-1/2 space-y-6">
                <div>
                  <span className="text-sm text-gray-500 uppercase tracking-widest">{look.season}</span>
                  <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mt-2 mb-4">
                    {look.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {look.description}
                  </p>
                </div>

                {/* Products Featured */}
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-3">Featured Pieces</h3>
                  <div className="flex flex-wrap gap-2">
                    {look.products.map((product, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {product}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Color Palette */}
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-3">Color Palette</h3>
                  <div className="flex gap-2">
                    {look.colorPalette.map((color, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div 
                          className="w-6 h-6 rounded-full border border-gray-200"
                          style={{ 
                            backgroundColor: color === 'Gold' ? '#FFD700' : 
                                           color === 'Silver' ? '#C0C0C0' : 
                                           color === 'Cream' ? '#FFFDD0' : 
                                           color === 'Navy' ? '#000080' : 
                                           color === 'Charcoal' ? '#36454F' : 
                                           color === 'Burgundy' ? '#800020' : color.toLowerCase()
                          }}
                        ></div>
                        <span className="text-sm text-gray-600">{color}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button className="border border-gray-900 text-gray-900 px-8 py-3 text-sm font-light tracking-widest uppercase hover:bg-gray-900 hover:text-white transition-all duration-300 mt-6">
                  Shop This Story
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BTS Section - SIMPLE IMG TAGS */}
      <section className="pb-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif font-light text-center mb-12 text-gray-900">Behind the Scenes</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {btsImages.map((bts, index) => (
              <div key={index} className="text-center group">
                <div className="aspect-square rounded-2xl overflow-hidden group cursor-pointer mb-3 relative">
                  {/* SIMPLE IMG TAG */}
                  <img 
                    src={bts.src} 
                    alt={bts.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <span className="text-xs text-gray-600 uppercase tracking-widest">{bts.caption}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}