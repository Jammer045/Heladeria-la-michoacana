const badgeColors = {
  frutas: 'bg-green-100 text-verde',
  cremosas: 'bg-yellow-100 text-yellow-800',
  especiales: 'bg-red-100 text-rojo',
}

function ProductCard({ producto }) {
  const { nombre, precio, categoria, descripcion, imageUrl } = producto

  return (
    <article className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group">
      <div className="overflow-hidden h-48">
        <img
          src={imageUrl}
          alt={nombre}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-heading font-bold text-lg text-gray-900">{nombre}</h3>
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${badgeColors[categoria]}`}>
            {categoria}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-3">{descripcion}</p>
        <p className="font-heading font-bold text-xl text-rojo">${precio} MXN</p>
      </div>
    </article>
  )
}

export default ProductCard
