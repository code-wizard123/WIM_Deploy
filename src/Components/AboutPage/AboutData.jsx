import img from "../../assets/donation.jpeg";

const AboutData = () => {
  return (
    <div>
      <section className="about-sec" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 about-img">
              <img src={img} alt="about" />
            </div>
            <div className="col-lg-8 order-first order-lg-last">
              <div className="heading">
                <h2>What We Do & Why We Do</h2>
              </div>
              <p>
                At AYUSH, we believe that everyone deserves the chance to live a
                healthy and fulfilling life. Our mission is to improve the lives
                of people in need by providing access to basic necessities such
                as food, shelter, education, and healthcare. We work tirelessly
                to identify the most pressing needs in our community and develop
                programs and initiatives to address those needs.{" "}
              </p>
              <p>
                Through our fundraising efforts and the generous support of our
                donors, we are able to make a positive impact on the lives of
                thousands of people every year. Whether it&apos;s providing a warm
                meal to someone in need or helping a child receive an education,
                we are dedicated to making a difference in our community and
                beyond.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutData;
