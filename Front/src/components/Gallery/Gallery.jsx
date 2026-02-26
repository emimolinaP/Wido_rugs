import { useEffect, useState } from 'react'
import { getGalleryItems } from '../../services/productServices'
import { deleteGalleryItem } from '../../services/productServices'
import { useUser } from '../../context/UserContext'
import toast from 'react-hot-toast'

const Gallery = () => {
    const [items, setItems] = useState([])
    const { loading, userInfo, setUserInfo } = useUser()
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
            toast.success('Borrado exitosamente')
        } catch (error) {
            console.error('Error al borrar imagen', error)
            toast.error('Error al eliminar imagen')
        }
    }
    return (
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
                <div key={item._id} className="card bg-base-200 shadow p-2">
                    <figure>
                        <img
                            src={`${import.meta.env.VITE_BACKEND_URL.replace('/api', '')}${item.imageUrl}`}
                            className="h-48 w-full object-cover"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                    {!loading && userInfo?.username && (
                        <button
                            className="btn btn-error btn-sm"
                            onClick={() => handleDelete(item._id)}
                        >
                            Eliminar
                        </button>
                    )}
                </div>
            ))}
        </div>
    )
}

export default Gallery
