import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import DonationData from "../Components/Donations/DonationData";

const Donations = () => {
  return (
    <div>
      <Navbar active={"donations"} />
      <DonationData />
      <Footer />
    </div>
  );
};

export default Donations;
