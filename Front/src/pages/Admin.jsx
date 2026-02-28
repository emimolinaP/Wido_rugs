import { useState } from 'react'
import { createGalleryItem } from '../services/productServices'
import toast from 'react-hot-toast'
const AdminGallery = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState(null)
    const [preview, setPreview] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        setImage(file)
        if (file) {
            setPreview(URL.createObjectURL(file))
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        const formData = new FormData()
        formData.append('title', title)
        formData.append('description', description)
        formData.append('image', image)

        try {
            await createGalleryItem(formData)
            toast.success('Post subido exitosamente')
            setTitle('')
            setDescription('')
            setImage(null)
            setPreview(null)
            setLoading(false)
        } catch (error) {
            console.log(error)
            toast.error('Error al subir post')
            setLoading(false)
        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen  p-6">
            <div className="card w-full max-w-lg bg-base-100 shadow-2xl">
                <div className="card-body">
                    <h2 className="card-title text-2xl mb-4">
                        Subir Nuevo Pedido
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Título */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Título</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Ej: Alfombra personalizada Goku"
                                className="input input-bordered"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </div>

                        {/* Descripción */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Descripción</span>
                            </label>
                            <textarea
                                className="textarea textarea-bordered"
                                placeholder="Ej: 60x40 cm"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />
                        </div>

                        {/* Imagen */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Imagen</span>
                            </label>
                            <input
                                type="file"
                                accept="image/*"
                                className="file-input file-input-bordered"
                                onChange={handleImageChange}
                                required
                            />
                        </div>

                        {/* Preview */}
                        {preview && (
                            <div className="mt-4">
                                <p className="mb-2 font-semibold">
                                    Vista previa:
                                </p>
                                <img
                                    src={preview}
                                    className="rounded-xl shadow-md max-h-64 object-cover"
                                />
                            </div>
                        )}

                        {/* Botón */}
                        <div className="card-actions justify-end mt-4">
                            <button
                                type="submit"
                                className={`btn btn-primary ${loading && 'loading'}`}
                                disabled={loading}
                            >
                                {loading ? 'Subiendo...' : 'Subir Pedido'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AdminGallery
