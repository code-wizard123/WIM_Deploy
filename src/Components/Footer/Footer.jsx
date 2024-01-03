import React from "react";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="col-one">
                <h4>Ayush NGO Portal</h4>
                <p>Address: 3, Near IT Park, GT Road, Mumbai 400091 </p>
                <p>
                  Contact No: <a href="tel: +92 30059****59">+92 30059****59</a>
                </p>
                <p>
                  Email:{" "}
                  <a href="mailto:foundation@mabcorp.com">
                    foundation@ayush.gov.in
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="col-two">
                <h4>Important Links</h4>
                <ul>
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#donation">Donations</a>
                  </li>
                  <li>
                    <a href="#mission-id">Missions</a>
                  </li>
                  <li>
                    <a href="#about">About us</a>
                  </li>
                  <li>
                    <a href="#contact">Contact us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="col-one">
                <h4>Social Media</h4>
                <div className="social">
                  <a href="#">1</a>
                  <a href="#">2</a>
                  <a href="#">3</a>
                  <a href="#">4</a>
                  <a href="#">5</a>
                </div>
                <p>Copyright &copy; 2023 | All Right Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
