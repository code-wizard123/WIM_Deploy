import React from "react";
import clothes from "../../assets/clothes.jpeg";
import food from "../../assets/food.jpeg";
import footwear from "../../assets/footwear.jpeg";
import stationery from "../../assets/stationery.jpeg";
import money from "../../assets/money.jpeg";
import gadget from "../../assets/gadgets.jpeg";
import { Link } from "react-router-dom";

const DonationData = () => {
  return (
    <div>
      <section className="don-sec" id="donation">
        <div className="container">
          <div className="heading">
            <h2>Our Donation Ways</h2>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="don-box">
                <img src={clothes} alt="img" />
                <h3>Clothes</h3>
                <p>
                  Give your clothes a second chance: donate them today and help
                  make a difference.
                </p>
                
              </div>
            </div>
            <div className="col-lg-4">
              <div className="don-box">
                <img src={footwear} alt="img" />
                <h3>Footwear</h3>
                <p>
                  Step up and make a difference: donate your footwear today and
                  help those in need.
                </p>
                
              </div>
            </div>
            <div className="col-lg-4">
              <div className="don-box">
                <img src={money} alt="img" />
                <h3>Fund</h3>
                <p>
                  Your donation can make a world of difference: give today to
                  support our cause and help those in need.
                </p>
                
              </div>
            </div>
            <div className="col-lg-4">
              <div className="don-box">
                <img src={gadget} alt="img" />
                <h3>Gadgets</h3>
                <p>
                  Unlock the power of giving: donate your gadgets today and help
                  bridge the digital divide for those in need.
                </p>
                
              </div>
            </div>
            <div className="col-lg-4">
              <div className="don-box">
                <img src={stationery} alt="img" />
                <h3>Stationery</h3>
                <p>
                  Make a mark in someone's life: donate your stationery today
                  and help provide educational resources for those in need.
                </p>
                
              </div>
            </div>
            <div className="col-lg-4">
              <div className="don-box">
                <img src={food} alt="img" />
                <h3>Food</h3>
                <p>
                  Feed a hungry mouth today: donate food and help fight hunger
                  in your community.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonationData;
