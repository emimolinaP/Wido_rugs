import { useEffect, useState } from "react"
import { getGalleryItems, deleteGalleryItem } from "../../services/productServices"
import { useUser } from "../../context/UserContext"
import toast from "react-hot-toast"
import './gallery_style.css'

const Gallery = () => {
  const [items, setItems] = useState([])
  const [selected, setSelected] = useState(null)
  const { loading, userInfo } = useUser()

  const baseUrl = import.meta.env.VITE_BACKEND_URL.replace("/api", "")

  useEffect(() => {
    const fetchItems = async () => {
      const data = await getGalleryItems()
      setItems(data)
    }
    fetchItems()
  }, [])

  const handleDelete = async (id) => {
    try {
      await deleteGalleryItem(id)
      setItems((prev) => prev.filter((item) => item._id !== id))
      toast.success("Borrado exitosamente")
    } catch (error) {
      toast.error("Error al eliminar imagen")
    }
  }

  return (
    <div className="min-h-screen p-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.map((item) => (
          <div
            key={item._id}
            className="relative group rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
            onClick={() => setSelected(item)}
          >
            {/* Imagen */}
            <img
              src={`${baseUrl}${item.imageUrl}`}
              className="w-full aspect-square object-cover transition duration-500 group-hover:scale-110 group-hover:brightness-50"
            />

            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition duration-500">
              <h2 className="text-xl font-bold text-white">
                {item.title}
              </h2>
              <p className="text-sm text-gray-300">
                {item.description}
              </p>
            </div>

            {/* Botón eliminar */}
            {!loading && userInfo?.username && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handleDelete(item._id)
                }}
                className="absolute top-4 right-4 btn btn-error btn-xs opacity-0 group-hover:opacity-100 transition duration-300"
              >
                ✕
              </button>
            )}
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-4xl w-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={`${baseUrl}${selected.imageUrl}`}
              className="w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl animate-fadeIn"
            />

            <button
              onClick={() => setSelected(null)}
              className="absolute top-2 right-2 btn btn-circle btn-sm"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery