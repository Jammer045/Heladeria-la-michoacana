import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection.jsx'
import products from '../data/products.js'
import ProductCard from '../components/ProductCard.jsx'

function Home() {
  const destacados = products.slice(0, 4)

  return (
    <>
      <HeroSection />

      {/* Sección destacados */}
      <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-heading font-bold text-3xl text-center text-gray-900 mb-2">
          Nuestras favoritas
        </h2>
        <p className="text-gray-600 text-center mb-10">
          Las paletas que nuestros clientes más disfrutan
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destacados.map((p) => (
            <ProductCard key={p.id} producto={p} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/menu"
            className="inline-block bg-verde hover:bg-green-800 text-white font-heading font-bold px-8 py-3 rounded-full transition-colors"
          >
            Ver todo el menú
          </Link>
        </div>
      </section>

      {/* Sección valores */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <span className="text-4xl block mb-3">🍓</span>
              <h3 className="font-heading font-bold text-lg mb-1">Ingredientes naturales</h3>
              <p className="text-gray-600 text-sm">Frutas frescas y de temporada en cada paleta</p>
            </div>
            <div>
              <span className="text-4xl block mb-3">👨‍🍳</span>
              <h3 className="font-heading font-bold text-lg mb-1">Recetas artesanales</h3>
              <p className="text-gray-600 text-sm">Tradición michoacana con más de 30 años</p>
            </div>
            <div>
              <span className="text-4xl block mb-3">❤️</span>
              <h3 className="font-heading font-bold text-lg mb-1">Hecho con amor</h3>
              <p className="text-gray-600 text-sm">Cada paleta es preparada a mano con dedicación</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
