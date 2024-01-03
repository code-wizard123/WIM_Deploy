import { UserModel } from "../models/Users.js";
import { NewsModel } from "../models/News.js";
import { CommitteeModel } from "../models/Committee.js";
import { DonationsModel } from "../models/Donations.js";
import bcrypt from "bcrypt";
import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

let serialCounter = 0; // Initial counter value

const generateToken = (country, state, city, membershipType) => {
    const year = new Date().getFullYear();
    const formattedSerialId = serialCounter++;

    const stringWithoutSpaces = city ? city.replace(/\s/g, '') : "XXX";

    const firstThreeCharacters = stringWithoutSpaces.substring(0, 3).toUpperCase();
    const newReferenceId = `${year}-${country}-${state}-${firstThreeCharacters}-${membershipType[0].toUpperCase()}-${formattedSerialId}`;
    return newReferenceId;
};


router.post("/register", async (req, res) => {
    const { fname, lname, gender, aadhar, qualification, employer, designation, flatNo, addressLine1, addressLine2, pincode, date, phone, country, state, city, membershipType, email, referenceID, password } = req.body;

    const user = await UserModel.findOne({ email: email })

    if (user) {
        return res.status(503).json({ success: false, message: "User already exists !" })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const check = await UserModel.findOne({ username: referenceID });

    if (!check) {
        return res.status(503).json({ success: false, message: "Invalid Reference ID" })
    }

    const username = generateToken(country, state, city, membershipType);

    const newUser = new UserModel({
        username,
        fname,
        lname,
        gender,
        aadhar,
        qualification,
        employer,
        designation,
        flatNo,
        addressLine1,
        addressLine2,
        pincode,
        date,
        phone,
        country,
        state,
        city,
        membershipType,
        email,
        referenceID,
        password: hashedPassword
    })

    await newUser.save()

    res.status(200).json({ success: true, message: "User Registered Successfully !" })
})

router.post("/donate", async (req, res) => {
    const { username, userid, amount } = req.body;

    const user = await UserModel.findOne({ username: userid })

    if (!user) {
        return res.json({ message: "No User exists !" })
    }

    const newTransaction = new DonationsModel({
        userID: userid,
        userName: username,
        amount: amount
    })

    await newTransaction.save()

    res.status(200).json({ success: true, message: "User Registered Successfully !" })
})

router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const user = await UserModel.findOne({ username: username })

    if (!user) {
        return res.json({ message: "No User exists !" })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
        return res.status(503).json({ message: "Re-enter password !" })
    }

    const token = jwt.sign({ id: user._id }, "secret")
    res.status(200).json({ token, userID: user._id })
})

router.get("/committee", async (req, res) => {
    const data = await UserModel.find({})
    res.send(data)
})

router.get("/news", async (req, res) => {
    const data = await NewsModel.find({})
    res.send(data)
})

router.get("/delete/:id", async (req, res) => {
    const id = req.params.id;
    const user = await UserModel.findByIdAndDelete(id).exec();
    res.send(user);
});

router.get("/addCommittee/:id", async (req, res) => {
    const id = req.params.id;
    const user = await UserModel.findById(id).exec();
    const newCommittee = new CommitteeModel({ user });

    await newCommittee.save();
    res.status(200).json({ success: true, message: "User added to committee !" })
})

router.get("/getCommittee", async (req, res) => {
    const data = await CommitteeModel.find().populate("user").exec();
    res.send(data);
});

router.get("/deleteCommittee/:id", async (req, res) => {
    const id = req.params.id;
    const user = await CommitteeModel.findByIdAndDelete(id).exec();
    res.send(user);
});

export { router as userRouter };