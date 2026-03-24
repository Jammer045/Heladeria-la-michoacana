const categorias = [
  { value: 'todas', label: 'Todas' },
  { value: 'frutas', label: 'Frutas' },
  { value: 'cremosas', label: 'Cremosas' },
  { value: 'especiales', label: 'Especiales' },
]

function CategoryFilter({ activa, onChange }) {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {categorias.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => onChange(value)}
          className={`px-5 py-2 rounded-full font-medium text-sm transition-colors ${
            activa === value
              ? 'bg-rojo text-white shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter
