import PageTransition from '@/components/PageTransition'
import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import ProductGrid from '@/components/ProductGrid'

export default function Home() {
  return (
    <Layout>
      <PageTransition>
        <Hero />
        <ProductGrid />
      </PageTransition>
    </Layout>
  )
}
