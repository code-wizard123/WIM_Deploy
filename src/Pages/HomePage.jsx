import Navbar from "../Components/Navbar/Navbar";
import HomeData from "../Components/HomePage/HomeData";
import Footer from "../Components/Footer/Footer";
import Map from "../Components/Map/Map";

const HomePage = () => {
  return (
    <div>
      <Navbar active={"home"} />
      <HomeData />
      <Map />
      <Footer />
    </div>
  );
};

export default HomePage;
