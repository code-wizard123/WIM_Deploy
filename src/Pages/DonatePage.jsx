import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Donate from '../Components/DonationPage/Donate';

const DonatePage = () => {
    return (
        <div>
            <Navbar active={"donations"} />
            <Donate />
            <Footer />
        </div>
    )
}

export default DonatePage
