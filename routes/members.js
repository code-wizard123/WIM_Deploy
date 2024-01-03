import express from "express";
import { UserModel } from "../models/Users.js"; // Update the import statement to match your file structure

const router = express.Router();

router.get("/members", async (req, res) => {
    try {
        const members = await UserModel.find();
        res.status(200).json({ success: true, data: members });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal Server Error." });
    }
});

export { router as membersRouter };