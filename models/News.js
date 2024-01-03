import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema({
  description: String
});

export const NewsModel = mongoose.model("news", NewsSchema)