import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
import { ImageModel } from "../models/Image.js";
import { DonationsModel } from "../models/Donations.js";


const router = express.Router();

router.get("/image", async (req, res) => {
    const data = await ImageModel.find()
    res.send(data)
})

router.get("/donate", async (req, res) => {
    const data = await DonationsModel.find()
    res.send(data)
})

router.get("/getTop", async (req, res) => {
    DonationsModel.aggregate([
        {
            $group: {
                _id: "$userID", // or use "$userName" if you prefer to group by name
                totalAmount: { $sum: { $convert: { input: "$amount", to: "decimal" } } },
                userName: { $first: "$userName" } // Preserves the userName associated with the userID
            }
        },
        {
            $sort: { totalAmount: -1 }
        },
        {
            $limit: 1
        }
    ])
        .then(result => {
            res.status(200).send(result);
        })
        .catch(err => {
            console.error("Error:", err);
            res.status(500).send(err);
        });
})


router.get("/getBottom", async (req, res) => {
    DonationsModel.aggregate([
        {
            $group: {
                _id: "$userID", // or use "$userName" if you prefer to group by name
                totalAmount: { $sum: { $convert: { input: "$amount", to: "decimal" } } },
                userName: { $first: "$userName" } // Preserves the userName associated with the userID
            }
        },
        {
            $sort: { totalAmount: 1 } // 1 for ascending order
        },
        {
            $limit: 1
        }
    ])
        .then(result => {
            res.status(200).send(result);
        })
        .catch(err => {
            console.error("Error:", err);
            res.status(500).send(err);
        });
})

router.get("/average", async (req, res) => {
    DonationsModel.aggregate([
        {
            $group: {
                _id: null, // Grouping all documents together
                averageAmount: { $avg: { $convert: { input: "$amount", to: "decimal" } } }
            }
        }
    ])
        .then(result => {
            res.status(200).send(result);
        })
        .catch(err => {
            console.error("Error:", err);
            res.status(500).send(err);
        });
})

export { router as dataRouter };