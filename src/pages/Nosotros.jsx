function Nosotros() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-heading font-bold text-4xl text-center text-gray-900 mb-10">
        Nuestra Historia
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1516559828984-fb3b99548b21?w=600&h=400&fit=crop"
            alt="Preparación artesanal de paletas"
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h2 className="font-heading font-bold text-2xl text-verde mb-4">
            Más de 30 años de tradición
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            La Michoacana nació en 1990 como un pequeño puesto familiar en el corazón de México.
            Inspirados por las recetas ancestrales de Tocumbo, Michoacán, comenzamos a elaborar
            paletas artesanales con frutas frescas y ingredientes 100% naturales.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Lo que empezó como un sueño familiar se convirtió en un referente de sabor y calidad.
            Hoy seguimos preparando cada paleta con el mismo amor y dedicación de siempre,
            manteniendo viva la tradición que nos identifica.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Nuestro compromiso es ofrecer productos frescos, naturales y llenos de sabor mexicano
            a cada persona que nos visita. Porque en La Michoacana, cada paleta cuenta una historia.
          </p>
        </div>
      </div>

      {/* Valores */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        <div className="bg-red-50 rounded-2xl p-6">
          <span className="text-3xl block mb-2">🌿</span>
          <h3 className="font-heading font-bold text-lg text-verde">Natural</h3>
          <p className="text-gray-600 text-sm mt-1">Sin conservadores artificiales</p>
        </div>
        <div className="bg-red-50 rounded-2xl p-6">
          <span className="text-3xl block mb-2">🤝</span>
          <h3 className="font-heading font-bold text-lg text-verde">Familiar</h3>
          <p className="text-gray-600 text-sm mt-1">Negocio 100% familiar</p>
        </div>
        <div className="bg-red-50 rounded-2xl p-6">
          <span className="text-3xl block mb-2">🇲🇽</span>
          <h3 className="font-heading font-bold text-lg text-verde">Mexicano</h3>
          <p className="text-gray-600 text-sm mt-1">Orgullosamente de Michoacán</p>
        </div>
      </div>
    </section>
  )
}

export default Nosotros
