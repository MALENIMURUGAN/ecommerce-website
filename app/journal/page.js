import Layout from '@/components/Layout'

export default function Journal() {
  const articles = [
    {
      id: 1,
      title: "The Art of French Elegance",
      excerpt: "Discover the secrets behind Parisian style...",
      image: "/images/journal-1.jpg",
      date: "March 15, 2024"
    },
    // Add more articles...
  ]

  return (
    <Layout>
      <section className="pt-32 pb-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-light mb-6 text-gray-900">Journal</h1>
          <p className="text-xl text-gray-600 font-light">Stories, inspiration, and fashion insights</p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {articles.map((article) => (
            <article key={article.id} className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-serif font-light text-gray-900 mb-4">{article.title}</h2>
              <p className="text-gray-600 mb-4">{article.excerpt}</p>
              <span className="text-sm text-gray-500">{article.date}</span>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  )
}