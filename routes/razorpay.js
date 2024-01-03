import express from "express";
import Razorpay from 'razorpay';
import shortid from 'shortid';

const router = express.Router();

var razorpay = new Razorpay({
    key_id: 'rzp_test_wxCBnyhat7WpBt',
    key_secret: 'UNfQLtWfqOCaITzgGhnsfFHK',
});

router.post('/razorpay', async (req, res) => {
    const payment_capture = 1
    const amount = req.body.amount;
    const currency = 'INR'

    const options = {
        amount: (amount * 100).toString(),
        currency,
        receipt: shortid.generate(),
        payment_capture
    }

    const response = await razorpay.orders.create(options)

    res.send({
        id: response.id,
        currency: response.currency,
        amount: response.amount
    })
})

router.post('/pay/success', async (req, res) => {
    res.redirect('http://localhost:5173')
})

export { router as razorpayRouter }; 