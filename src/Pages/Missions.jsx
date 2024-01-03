import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import MissionPage from "../Components/MissionPage/MissionPage";

const Mission = () => {
  return (
    <div>
      <Navbar active={"mission"} />
      <MissionPage />
      <Footer />
    </div>
  );
};

export default Mission;
