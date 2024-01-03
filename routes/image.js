import express from "express";
import multer from "multer";
import path from "path";
import { ImageModel } from "../models/Image.js"; // Update the import statement to match your file structure

const router = express.Router();

// Set up multer for handling file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/"); // Set your desired upload directory
    },
    filename: function (req, file, cb) {
        const fileName = Date.now() + path.extname(file.originalname);
        cb(null, fileName);
    },
});

const upload = multer({ storage: storage });

router.post("/upload", upload.single("image"), async (req, res) => {
    try {
        if (!req.body.image) {
            return res.status(400).json({ success: false, message: "No file uploaded." });
        }

        const imagePath = req.body.image;

        // Save the image path to MongoDB
        const newImage = new ImageModel({ data: imagePath });
        await newImage.save();

        res.status(200).json({ success: true, message: "Image uploaded successfully." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal Server Error." });
    }
});

export { router as imageUploadRouter };
