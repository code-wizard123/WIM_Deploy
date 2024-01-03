import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { CitySelect, CountrySelect, StateSelect, LanguageSelect } from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import DatePicker from "react-datepicker";
// import img from "../../assets/lll.webp";
import "react-datepicker/dist/react-datepicker.css";
import env from "react-dotenv";

// Handle form submission
// document.getElementById("submitOTP").addEventListener("click", function () {
//     const userInputOTP = document.getElementById("otpEntered").value;
//     const isValidOTP = checkOTP(userInputOTP);

//     const resultElement = document.getElementById("result");
//     if (isValidOTP) {
//         resultElement.textContent = "OTP is valid.";
//         console.log("valid");
//     } else {
//         resultElement.textContent = "Invalid OTP. Please try again.";
//         console.log("invalid");
//     }
// });





const RegisterPage = () => {

    const [otpGenerated, setOtpGenerated] = useState(false)
    const [otpInput, setOtpInput] = useState("")
    const [otp, setOtp] = useState("")
    const nextStep = () => {
        setStep(step + 1);
    };

    async function validateEmail() {
        const emailInput = document.getElementById('emailID');
        const validationResult = document.getElementById('validationResult');

        const email = emailInput.value.trim();
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        console.log(email);

        const url = 'https://api.zerobounce.net/v2/validate';
        const zeroBounce = new ZeroBounce({ apiKey: 'e55b339b9c754e9fbe970a45449e0bb7' });

        try {
            const response = await zeroBounce.validateEmail(email);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    let generatedOTP = "";

    // OTP Generator
    function generateOTP(length) {
        const charset = "0123456789";
        let OTP = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            OTP += charset[randomIndex];
        }
        return OTP;
    }

    // OTP Checker
    function checkOTP() {
        console.log(otpInput);
        console.log(otp);
        if (otpInput == otp) {
            alert("Email Verified")
        } else {
            setOtpGenerated(false)
            alert("Try again")
        }
        return;
    }

    const serviceID = "service_nsz0sjy";
    const templateID = "template_tbu5x87";

    // Handle generate button click

    const checkingOTP = (e) => {    
        e.preventDefault()
        checkOTP()
    }

    const sendEmail = () => {
        setOtpGenerated(true)
        const otpLength = 6;
        generatedOTP = generateOTP(otpLength);
        setOtp(generatedOTP)
        const params = {
            name: "user",
            email: document.getElementById("emailID").value,
            OTP: generatedOTP,
        };
        console.log("Generated OTP:", generatedOTP);
        emailjs.send(serviceID, templateID, params)
            .then(
                (res) => {
                    console.log("OTP SENT");
                }
            ).catch((err) => console.log(err));
    }



    const previousStep = () => {
        setStep(step - 1);
    };


    const handleChange = (e) => {
        // console.log(e);
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleChangeDate = (e) => {
        // console.log(e);
        console.log(e);
        setFormData({ ...formData, date: e });
    };


    const countryChange = (e) => {
        console.log(e);
        const { iso3 } = e;
        setFormData({ ...formData, country: iso3 });
    };


    const cityChange = (e) => {
        console.log(e);
        const { name } = e;
        setFormData({ ...formData, city: name });
    };


    const stateChange = (e) => {
        console.log(e);
        const { state_code } = e;
        setFormData({ ...formData, state: state_code });
    };


    const [countryid, setCountryid] = useState(0);
    const [stateid, setstateid] = useState(0);


    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        gender: "",
        phone: "",
        aadhar: "",
        qualification: "",
        employer: "",
        designation: "",
        flatNo: "",
        addressLine1: "",
        addressLine2: "",
        pincode: "",
        date: new Date(),
        country: "",
        state: "",
        city: "",
        membershipType: "",
        referenceID: "",
        email: "",
        password: "",
        correctPassword: "",
    });
    const [_, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();


    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formData);
        if (otpGenerated == true) {
            if (formData.password === formData.correctPassword) {
                try {
                    await axios.get(env.API_URL + "/auth/register", {
                        fname: formData.fname,
                        lname: formData.lname,
                        gender: formData.gender,
                        aadhar: formData.aadhar,
                        qualification: formData.qualification,
                        employer: formData.employer,
                        designation: formData.designation,
                        flatNo: formData.flatNo,
                        addressLine1: formData.addressLine1,
                        addressLine2: formData.addressLine2,
                        pincode: formData.pincode,
                        date: formData.date,
                        phone: formData.phone,
                        country: formData.country,
                        state: formData.state,
                        city: formData.city,
                        membershipType: formData.membershipType,
                        referenceID: formData.referenceID,
                        email: formData.email,
                        password: formData.password,
                    });
                    console.log();
                    alert("Registration Completed! Now login.");
                    navigate("/login");
                } catch (error) {
                    alert(error.response.data.message);
                }
            } else {
                alert("Both passwords dont match");
                setFormData({ ...formData, pass: "", cpass: "" });
            }
        }
    };


    return (
        // <section
        // className="login"
        // id="login"
        // style={{ backgroundImage: url(${img}), backgroundSize: "cover" }}
        // >
        <div className="row auth-container" style={{ marginTop: "-150px" }}>
            <div className="col-md-6 col-md-offset-3">
                <form id="msform" onSubmit={handleSubmit}>
                    <ul id="progressbar" style={{ display: "flex" }}>
                        <li className={step === 1 ? "active" : ""} style={{ color: "black" }}>
                            Personal Details
                        </li>
                        <li className={step === 2 ? "active" : ""} style={{ color: "black" }}>
                            Location Information
                        </li>
                        <li className={step === 3 ? "active" : ""} style={{ color: "black" }}>
                            Membership Details and Payment
                        </li>
                        <li className={step === 4 ? "active" : ""} style={{ color: "black" }}>
                            Account Setup
                        </li>
                    </ul>


                    {step === 1 && (
                        <fieldset className="container">
                            <h2 className="fs-title">Personal Details</h2>
                            <h3 className="fs-subtitle">Tell us something more about you</h3>
                            <input type="text" name="fname" placeholder="First Name" value={formData.fname} onChange={handleChange} />
                            <input type="text" name="lname" placeholder="Last Name" value={formData.lname} onChange={handleChange} />
                            <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
                            <input type="text" name="aadhar" placeholder="Aadhar No." value={formData.aadhar} onChange={handleChange} />


                            <div className="flex-container">
                                <select
                                    type="text"
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    className="form-select"
                                    style={{ marginBottom: "10px" }}
                                >
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>


                                <DatePicker
                                    selected={formData.date}
                                    onChange={handleChangeDate}
                                />
                            </div>
                            <div>
                                <select
                                    type="text"
                                    name="qualification"
                                    value={formData.qualification}
                                    onChange={handleChange}
                                    className="form-select"
                                    style={{ marginBottom: "10px" }}
                                >
                                    <option>Metric</option>
                                    <option>Under Graduate</option>
                                    <option>Graduate</option>
                                    <option>Post Graduate</option>
                                </select>
                            </div>
                            <div className="flex-container">
                                <input type="text" name="employer" placeholder="Employer" value={formData.employer} onChange={handleChange} />
                                <input type="text" name="designation" placeholder="Designation" value={formData.designation} onChange={handleChange} />
                            </div>
                            <button type="button" className="next action-button" onClick={nextStep}>
                                Next
                            </button>
                        </fieldset>


                    )}


                    {step === 2 && (
                        <fieldset className="container">
                            <h2 className="fs-title">Location Details</h2>
                            <h3 className="fs-subtitle">Where do you want to join us from</h3>


                            <input type="text" name="flatNo" placeholder="Flat Number" value={formData.flatNo} onChange={handleChange} />
                            <input type="text" name="addressLine1" placeholder="Address Line 1" value={formData.addressLine1} onChange={handleChange} />
                            <input type="text" name="addressLine2" placeholder="Address Line 2" value={formData.addressLine2} onChange={handleChange} />
                            <div>
                                <h6>Country</h6>
                                <CountrySelect
                                    onChange={(e) => {
                                        setCountryid(e.id);
                                        countryChange(e);
                                    }}
                                    placeHolder="Select Country"
                                />
                                <h6>State</h6>
                                <StateSelect
                                    countryid={countryid}
                                    onChange={(e) => {
                                        setstateid(e.id);
                                        stateChange(e);
                                    }}
                                    placeHolder="Select State"
                                />
                                <h6>City</h6>
                                <CitySelect
                                    countryid={countryid}
                                    stateid={stateid}
                                    onChange={(e) => {
                                        console.log(e);
                                        cityChange(e);
                                    }}
                                    placeHolder="Select City"
                                />
                            </div>
                            <input type="text" name="pincode" placeholder="Pincode" value={formData.pincode} onChange={handleChange} />
                            <button type="button" className="previous action-button-previous" onClick={previousStep}>
                                Previous
                            </button>
                            <button type="button" className="next action-button" onClick={nextStep}>
                                Next
                            </button>
                        </fieldset>
                    )}


                    {step === 3 && (
                        <fieldset className="container">

                            <ul>
                                <li style={{ marginRight: "20px" }}>
                                    <p>Membership Type</p>
                                </li>
                                <li style={{ display: "flex", marginRight: "20px" }}>
                                    <label style={{ display: "flex", alignItems: "center" }}>
                                        <input
                                            style={{ marginRight: "10px" }}
                                            type="radio"
                                            name="membershipType"
                                            value="lifetime"
                                            checked={formData.membershipType === "lifetime"}
                                            onChange={handleChange}
                                        />
                                        Lifetime
                                    </label>
                                </li>
                                <li style={{ display: "flex", marginRight: "20px" }}>
                                    <label style={{ display: "flex", alignItems: "center" }}>
                                        <input
                                            style={{ marginRight: "10px" }}
                                            type="radio"
                                            name="membershipType"
                                            value="associate"
                                            checked={formData.membershipType === "associate"}
                                            onChange={handleChange}
                                        />
                                        Associate
                                    </label>
                                </li>
                                <li style={{ display: "flex", marginRight: "20px" }}>
                                    <label style={{ display: "flex", alignItems: "center" }}>
                                        <input
                                            style={{ marginRight: "10px" }}
                                            type="radio"
                                            name="membershipType"
                                            value="annual"
                                            checked={formData.membershipType === "annual"}
                                            onChange={handleChange}
                                        />
                                        Annual
                                    </label>
                                </li>
                                <li style={{ display: "flex" }}>
                                    <label style={{ display: "flex", alignItems: "center" }}>
                                        <input
                                            style={{ marginRight: "10px" }}
                                            type="radio"
                                            name="membershipType"
                                            value="student"
                                            checked={formData.membershipType === "student"}
                                            onChange={handleChange}
                                        />
                                        Student
                                    </label>
                                </li>
                            </ul>

                            <button type="button" className="previous action-button-previous" onClick={previousStep}>
                                Previous
                            </button>
                            <button type="button" className="next action-button" onClick={nextStep}>
                                Next
                            </button>
                        </fieldset>
                    )}


                    {step === 4 && (
                        <fieldset>
                            <h2 className="fs-title">Account Setup</h2>
                            <h3 className="fs-subtitle">Fill in your credentials</h3>
                            <input type="text" name="email" placeholder="Email" id="emailID" value={formData.email} onChange={handleChange} />
                            <button type="button" className="previous action-button-previous" onClick={() => sendEmail()}>
                                Generate OTP
                            </button>
                            {otpGenerated == true ? <>
                                <input type="text" name="generateOTP" placeholder="otp" value={otpInput} onChange={(e) => setOtpInput(e.target.value)} />
                                <button className="previous action-button-previous" onClick={checkingOTP}>Submit OTP</button>
                            </> : (null)}
                            <input type="text" name="referenceID" placeholder="Reference ID" value={formData.referenceID} onChange={handleChange} />
                            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
                            <input type="password" name="correctPassword" placeholder="Confirm Password" value={formData.correctPassword} onChange={handleChange} />
                            <button type="button" className="previous action-button-previous" onClick={previousStep}>
                                Previous
                            </button>
                            <button type="submit" className="submit action-button">
                                Submit
                            </button>
                        </fieldset>
                    )}
                </form>
            </div>
        </div>
        // </section>
    );
};


export default RegisterPage;