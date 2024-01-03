import mongoose from "mongoose";

const DonationSchema = new mongoose.Schema({
    userID: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    amount: {
        type: String,
        required: true,
    }
});

export const DonationsModel = mongoose.model("donations", DonationSchema)