import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import AboutData from "../Components/AboutPage/AboutData";

const About = () => {
  return (
    <div>
      <Navbar active={"about"} />
      <AboutData />
      <Footer />
    </div>
  );
};

export default About;
