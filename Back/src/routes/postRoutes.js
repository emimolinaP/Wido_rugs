import { createGalleryItem,getGalleryItems,deleteGalleryItem } from "../controllers/postControllers.js"
import { upload } from "../config/multer.js"
import express from 'express'

const router = express.Router()


router.post("/gallery", upload.single("image"), createGalleryItem)
router.get("/gallery", getGalleryItems)
router.delete("/gallery/:id",  deleteGalleryItem)

export default router