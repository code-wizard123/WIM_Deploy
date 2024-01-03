import React from "react";
import { useState } from "react";

const donationOptions = [
  "Food",
  "Clothes",
  "Footware",
  "Books",
  "Fund",
  "Ele. Gadget",
];

const ContactData = () => {
  const [value, setValue] = useState(0);
  const [info, setInfo] = useState({
    name: "",
    mobile: "",
    donation: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(info);
    // for clearing the values
    e.currentTarget.reset();
  };

  return (
    <div>
      <section className="contact-section" id="contact">
        <div className="container">
          <div className="heading">
            <h2>Connect With Us</h2>
            <p>
              Fill this form, our team will collect your <span>Donation</span>{" "}
              or <span>Wastage</span> from your place.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-12 mt-5">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Your Name"
                              value={info.name}
                              name="name"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Mobile No."
                              value={info.mobile}
                              name="mobile"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <select
                              name="donation"
                              id="donation"
                              className="form-control"
                              value={info.donation}
                              onChange={handleChange}
                            >
                              {donationOptions.map((donationOption) => {
                                return (
                                  <option key={donationOption}>
                                    {donationOption}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Address"
                            value={info.address}
                            name="address"
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            name="message"
                            id=""
                            cols="90"
                            rows="1"
                            placeholder="Message"
                            value={info.message}
                            onChange={handleChange}
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-md-12 mt-3">
                        <button type="submit" className="btn1 mt-5">
                          Submit Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactData;
