import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
    data: {
        type: String,
        required: true,
    },
});

export const ImageModel = mongoose.model("images", ImageSchema);