import { createGalleryItem,getGalleryItems,deleteGalleryItem } from "../controllers/postControllers.js"
import { upload } from "../config/multer.js"
import express from 'express'
import { verifyToken } from "../middleware/verify.js"

const router = express.Router()



router.get("/dashboard",verifyToken, getGalleryItems)

router.post("/dashboard", (req, res) => {

  upload.single("image")(req, res, function (err) {

    if (err) {
      if (err.code === "LIMIT_FILE_SIZE") {
        return res.status(400).json({
          message: "La imagen supera el tamaño permitido (5MB)"
        })
      }

      return res.status(500).json({
        message: "Error al subir imagen"
      })
    }

    createGalleryItem(req, res)
  })

})

router.delete("/dashboard/:id", verifyToken, deleteGalleryItem)

export default router