import Layout from '@/components/Layout'

export default function Contact() {
  return (
    <Layout>
      <section className="pt-32 pb-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-light mb-6 text-gray-900">Contact</h1>
          <p className="text-xl text-gray-600 font-light">Get in touch with CHERIE</p>
        </div>
        
        <div className="max-w-md mx-auto bg-gray-50 rounded-2xl p-8">
          <form className="space-y-6">
            <input type="text" placeholder="Name" className="w-full p-3 border border-gray-300 rounded-lg" />
            <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded-lg" />
            <textarea placeholder="Message" rows="4" className="w-full p-3 border border-gray-300 rounded-lg"></textarea>
            <button className="w-full bg-black text-white py-3 rounded-lg font-light hover:bg-gray-800 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </Layout>
  )
}