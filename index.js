// Path: server/routes/data.js
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import path from "path";

import { userRouter } from "./routes/users.js";
import { dataRouter } from "./routes/data.js";
import { imageUploadRouter } from "./routes/image.js";
import { membersRouter } from "./routes/members.js";
import { newsRouter } from "./routes/news.js";
import { razorpayRouter } from "./routes/razorpay.js";

const app = express()

const __dirname = path.resolve();
const buildPath = path.join(__dirname, '../client/deploy');

app.use(express.static(buildPath));
app.use(express.urlencoded({ extended: true }))
app.use(express.json()) // automatic conversion to json 
app.use(bodyParser.json())
app.use(cors())

app.use("/auth", userRouter)
app.use("/fetch", dataRouter)
app.use("/upload", imageUploadRouter)
app.use("/getMembers", membersRouter)
app.use("/news", newsRouter)
app.use("/razorpay", razorpayRouter)

mongoose.connect("mongodb+srv://ishaanchandak3:1234567890@cluster0.qt3k6me.mongodb.net/Cluster0?retryWrites=true&w=majority")

app.listen(3000, (req, res) => {
    console.log("serving running");
})