const MissionPage = () => {
  return (
    <div>
      <section className="mission" id="mission-id">
        <div className="container">
          <div className="heading">
            <h2>Our Missions</h2>
            <p>
              We have delivered <span>Wastage</span> or <span>Donations</span>{" "}
              to needy Peoples
            </p>
          </div>
          <div className="gallery-sec">
            <div className="container">
              <div className="image-container">
                <div className="image">
                  <img src="img/miss/1.jpg" alt="img" />
                </div>
                <div className="image">
                  <img src="img/miss/2.jpg" alt="img" />
                </div>
                <div className="image">
                  <img src="img/miss/3.jpg" alt="img" />
                </div>
                <div className="image">
                  <img src="img/miss/4.jpg" alt="img" />
                </div>
                <div className="image">
                  <img src="img/miss/5.jpg" alt="img" />
                </div>
                <div className="image">
                  <img src="img/miss/6.jpg" alt="img" />
                </div>
              </div>
            </div>
            <div className="pop-image">
              <span>&times;</span>
              <img src="img/gallery/1.jpg" alt="gallery-img" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionPage;
