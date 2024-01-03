import axios from "axios";
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";
import React, { useEffect, useState } from "react";
import Receipt from "./Receipt";
import env from "react-dotenv";

const Donate = () => {
    const [fullName, setFullName] = useState("");
    const [amount, setAmount] = useState("");
    const [userID, setUserID] = useState("");
    const [data, setData] = useState([]);
    const [razorpay, setRazorpay] = useState();
    const [success, setSuccess] = useState(false);
    const [loader, setLoader] = useState(false)
    const downloadPDF = () => {
        const capture = document.querySelector('.div2print');
        setLoader(true);
        html2canvas(capture).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const doc = new jsPDF('l', 'mm', 'a4');
            const componentWidth = doc.internal.pageSize.getWidth();
            const componentHeight = doc.internal.pageSize.getHeight();
            doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
            setLoader(false);
            doc.save('receipt.pdf');
        });
    };

    const initializeRazorpay = () => {
        const options = {
            key: "rzp_test_wxCBnyhat7WpBt", // Replace with your Razorpay Key ID
            amount: (amount * 100).toString(), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: data.currency,
            name: "Ayush GOV", // Your business name
            description: "Thank you for your donation",
            order_id: data.id, // Replace with the actual Order ID obtained in the response of Step 1
            callback_url: "/razorpay/pay/success",
            prefill: {
                name: fullName, // Your customer's name
            },
            notes: {
                address: "Razorpay Corporate Office",
            },
            theme: {
                color: "#3399cc",
            },
        };

        const rzp1 = new window.Razorpay(options);
        setRazorpay(rzp1);
        rzp1.open().then((data) => {
            console.log(data)
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await axios.get(env.API_URL + "/auth/committee");
        const users = await res.data;

        const user = users.find((obj) => obj.username === userID);

        if (!user) {
            alert("No User exists !");
        }
        else {
            await axios
                .post("/razorpay/razorpay", {
                    amount: amount,
                })
                .then((response) => {
                    const data = response.data;
                    setData(data); // Assuming you have a state variable called 'data' and a 'setData' function to update it

                    const razorpayscript = initializeRazorpay;

                    const script = document.createElement("script");
                    script.src = "https://checkout.razorpay.com/v1/checkout.js";
                    script.async = true;
                    script.onload = razorpayscript;
                    document.body.appendChild(script);
                })
                .catch((error) => {
                    console.error("Error making Axios request:", error);
                });

            // try {
            //     await axios.get(env.API_URL + "/auth/donate", {
            //         username: fullName,
            //         userid: userID,
            //         amount: amount,
            //     });
            // } catch (error) {
            //     alert(error.response.data.message);
            // }
        }
        setSuccess(true)
        downloadPDF()
    };

    return (
        <div>
            <div className="container4 forAll">
                <div className="title">Donation Page</div>
                <div className="content4">
                    <form onSubmit={handleSubmit}>
                        <div className="user-details1">
                            <div className="input-box1">
                                <span className="details">Full Name</span>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="input-box1">
                                <span className="details">User ID</span>
                                <input
                                    type="text"
                                    placeholder="Enter your User ID"
                                    value={userID}
                                    onChange={(e) => setUserID(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="input-box">
                                <span className="details">Enter the Amount</span>
                                <input
                                    type="text"
                                    placeholder="Amount in Rupees"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <button id="rzp-button1" className="button4">
                            Pay
                        </button>
                    </form>

                </div>
                <div className="div2print">
                    {success == true ? <Receipt name={fullName} amount={amount} orderID={userID} /> : (null)}
                </div>
            </div>
        </div>
    );
};

export default Donate;