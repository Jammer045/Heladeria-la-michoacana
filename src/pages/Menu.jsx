import { useState } from 'react'
import products from '../data/products.js'
import ProductCard from '../components/ProductCard.jsx'
import CategoryFilter from '../components/CategoryFilter.jsx'

function Menu() {
  const [categoria, setCategoria] = useState('todas')

  const filtrados =
    categoria === 'todas'
      ? products
      : products.filter((p) => p.categoria === categoria)

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-heading font-bold text-4xl text-center text-gray-900 mb-2">
        Nuestro Menú
      </h1>
      <p className="text-gray-600 text-center mb-10">
        Descubre todos nuestros sabores artesanales
      </p>

      <div className="mb-10">
        <CategoryFilter activa={categoria} onChange={setCategoria} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtrados.map((p) => (
          <ProductCard key={p.id} producto={p} />
        ))}
      </div>

      {filtrados.length === 0 && (
        <p className="text-center text-gray-500 mt-10">No hay paletas en esta categoría.</p>
      )}
    </section>
  )
}

export default Menu
