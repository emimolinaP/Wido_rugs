import { useState } from "react"

const RugsCard = () => {
  const [size, setSize] = useState("1x1")

  const phoneNumber = "5493537327181" // tu número con código país sin + ni espacios

  const handleCotizar = () => {
    const message = `Hola! Quiero cotizar una alfombra tamaño ${size}`
    const encodedMessage = encodeURIComponent(message)

    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

    window.open(url, "_blank")
  }

  return (
    <div className="w-96 bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300">
      
      {/* Imagen */}
      <img
        src="/images/diseño.png"
        alt="Alfombra personalizada"
        className="w-full h-64 object-cover"
      />

      {/* Contenido */}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-3">
          Alfombra Personalizada
        </h2>

        <p className="text-gray-600 mb-4">
          Elegí el tamaño ideal para tu espacio y cotizá al instante.
        </p>
        <p className="text-gray-600 mb-4">
          Subí una foto guia del diseño al chat de whatsapp.
        </p>

        <select
          value={size}
          onChange={(e) => setSize(e.target.value)}
          className="border p-3 rounded-lg w-full mb-5 text-lg"
        >
          <option value="1x1">1m x 1m</option>
          <option value="1x2">1m x 2m</option>
          <option value="2x2">2m x 2m</option>
          <option value="2x3">2m x 3m</option>
        </select>

        <button
          onClick={handleCotizar}
          className="bg-green-500 text-white w-full py-3 text-lg rounded-xl hover:bg-green-600 transition"
        >
          Cotizar por WhatsApp
        </button>
      </div>
    </div>
  )
}


export default RugsCard