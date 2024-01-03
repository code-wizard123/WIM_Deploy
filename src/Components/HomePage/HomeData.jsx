import React, { useState, useEffect } from "react";
import img from "../../assets/162874424451slider1.jpg";
import SliderComponent from "./SliderComponent";
import { Link } from "react-router-dom";
import axios from "axios";
import env from "react-dotenv";

const HomeData = () => {
  const url = "/fetch/image";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return axios.get(env.API_URL + url).then((res) => setData(res.data));
  };

  useEffect(() => {
    fetchInfo();
  }, [])

  useEffect(() => {
    fetchInfo();
  }, [])


  return (
    <div>
      <section
        className="home-sec"
        id="home"
        // style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}
      >
        <SliderComponent data={data} />
        <div className="container" id="home-text">
            <div className="home-content">
              <div className="row">
                <div className="col-lg-6 align-item-center">
                  <div className="home-info">
                    <h1 style={{ color: "white" }}>
                      Alone we can do little, together we can do so much
                    </h1>
                    <h2 style={{ color: "white" }}>
                      We <span>MAB CORP foundation</span> manage wastage for needy
                      peoples
                    </h2>
                    <p style={{ color: "white" }}>
                      Make a difference today: donate to MAB CORP and help improve
                      lives.
                    </p>
                    <div className="buttons">
                      <Link to={"/contact"} class="btn1">
                        Donate now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
    </div >
  );
};

export default HomeData;
