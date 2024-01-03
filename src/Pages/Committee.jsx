import React from 'react'
import CommitteeCard from '../Components/Committee/CommitteeCard'
import Footer from '../Components/Footer/Footer'
import Navbar from "../Components/Navbar/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import env from "react-dotenv";

const Committee = () => {
    const url = "/auth/committee";
    const [data, setData] = useState([]);

    const fetchInfo = () => {
        return axios.get(env.API_URL + url).then((res) => setData(res.data));
    };

    useEffect(() => {
        fetchInfo();
    }, [])

    return (
        <div>
            <Navbar active={"committee"} />
            <div className="contact-section" id="contact">
                <div className="container">
                    <div className="heading">
                        <h2>Committee Members</h2>
                        <p>
                            List of the members who are part of our <span>Esteemed Committee</span>
                        </p>
                    </div>
                </div>
            </div>
            {/* {data.map((dataObj, index) => {
                console.log(dataObj);
                return <CommitteeCard dataObj={dataObj} />
            })} */}
            <CommitteeCard data={data} />
            <Footer />
        </div>
    )
}

export default Committee
