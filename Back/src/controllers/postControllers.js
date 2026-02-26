import PostModel from '../models/PostModel.js'

export const createGalleryItem = async (req, res) => {
    try {
        const { title, description } = req.body
        if (!req.file) {
            return res.status(400).json({ message: 'Imagen requerida' })
        }
        const newItem = new PostModel({
            title,
            description,
            imageUrl: `/uploads/${req.file.filename}`,
        })

        await newItem.save()

        res.status(201).json(newItem)
    } catch (error) {
        res.status(500).json({ message: 'Error al crear item' })
    }
}

export const getGalleryItems = async (req, res) => {
    const items = await PostModel.find().sort({ createdAt: -1 })
    res.json(items)
}

export const deleteGalleryItem = async (req, res) => {
  try {
    const { id } = req.params

    const item = await PostModel.findById(id)

    if (!item) {
      return res.status(404).json({ message: "No encontrado" })
    }

    // eliminar imagen física
    const fs = await import("fs")
    fs.unlinkSync("." + item.imageUrl)

    await item.deleteOne()

    res.json({ message: "Eliminado correctamente" })
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar" })
  }
}
