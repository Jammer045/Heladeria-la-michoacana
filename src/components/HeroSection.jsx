import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <section
      className="relative h-[90vh] min-h-[500px] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=1920&h=1080&fit=crop)',
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <span className="text-6xl md:text-8xl block mb-4">🍦</span>
        <h1 className="font-heading font-extrabold text-4xl md:text-6xl text-white mb-4">
          La Michoacana
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
          Tradición, sabor y frescura en cada paleta desde 1990
        </p>
        <Link
          to="/menu"
          className="inline-block bg-rojo hover:bg-red-700 text-white font-heading font-bold text-lg px-8 py-4 rounded-full transition-colors shadow-lg"
        >
          Ver nuestro menú
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
