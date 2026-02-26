import multer from "multer"
import path from "path"
import fs from "fs"

const uploadFolder = "uploads"

if (!fs.existsSync(uploadFolder)) {
  fs.mkdirSync(uploadFolder)
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadFolder)
  },
  filename: (req, file, cb) => {
    const uniqueName =
      Date.now() + "-" + Math.round(Math.random() * 1e9)

    const ext = path.extname(file.originalname)

    cb(null, uniqueName + ext)
  }
})


const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true)
  } else {
    cb(new Error("Solo se permiten imágenes"), false)
  }
}

export const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024 
  }
})