import Layout from '@/components/Layout'
import ProductGrid from '@/components/ProductGrid'

export default function Boutique() {
  return (
    <Layout>
      {/* Hero Section for Boutique */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-light mb-6">Boutique</h1>
          <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
            Discover our exclusive collection of luxury fashion pieces
          </p>
        </div>
      </section>
      
      {/* Your Amazing Product Grid */}
      <ProductGrid />
    </Layout>
  )
}