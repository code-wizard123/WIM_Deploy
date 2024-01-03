import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import ContactData from "../Components/ContactPage/ContactData";

const Contact = () => {
  return (
    <div>
      <Navbar active={"contact"} />
      <ContactData />
      <Footer />
    </div>
  );
};

export default Contact;
