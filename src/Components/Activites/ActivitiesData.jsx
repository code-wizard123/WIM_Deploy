import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from "../../assets/activities1.jpg";
import img1 from "../../assets/activities2.jpg";
import img2 from "../../assets/activities3.jpg";
import img3 from "../../assets/activities4.jpg";
import img4 from "../../assets/activities5.jpg";
import img5 from "../../assets/activities6.jpg";

const ActivitiesData = () => {
    return (
        <div>
            <section
                className="home-sec"
                id="home"
                // style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}
                style={{marginTop:"-150px"}}
            >
                <div className="container">
                    <div className="home-content">
                        <div className="row">
                            {/* <div class="col-lg-8 align-item-center">
                                <div class="home-info">
                                    <h1 style={{ color: "white" }}>
                                        Our Work
                                    </h1>
                                    <p style={{ color: "white" }}>
                                        Ayush NGO is a powerful force in humanitarian efforts, navigating challenging environments to protect children from the impacts of natural disasters, conflict, and disease. Their unwavering commitment to rescuing and shielding children from exploitation goes beyond mere assistance; it embodies a resolute stance against injustices faced by the world's most vulnerable. Ayush NGO's mission resonates with supporters who stand against the exploitation, neglect, and abuse of children. Together, we unite in solidarity with Ayush NGO, recognizing the urgency of creating a world where every child is free from harm and can thrive.
                                    </p>
                                </div>
                            </div> */}
                            <div className="col-lg-4">
                                <div className="card" style={{height:"100%"}}>
                                <Card.Img variant="top" src={img} />
                                <Card.Body>
                                    <Card.Title>Empowering Minds: Educational Resources for All</Card.Title>
                                    <Card.Text style={{fontSize:"14px"}}>
                                    Our initiative, "Empowering Minds," is committed to bridging educational gaps through resource distribution. We believe that access to quality learning materials is a fundamental right. Join us in our mission to empower students and educators by providing essential educational resources such as books, stationery, and learning aids. Together, let's build a foundation for a brighter future through the gift of knowledge.
                                    </Card.Text>
                                    <Button variant="primary">Join us</Button>
                                </Card.Body>
                                   
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card" style={{height:"100%"}}>
                                <Card.Img variant="top" src={img1} />
                                <Card.Body>
                                    <Card.Title>Threads of Compassion: Clothing Donation for Change</Card.Title>
                                    <Card.Text style={{fontSize:"14px"}}>
                                    "Threads of Compassion" is a heartfelt initiative dedicated to collecting and distributing clothing donations to those in need. This campaign seeks to clothe individuals and families facing hardship, providing warmth, dignity, and a sense of belonging. Join us in weaving a tapestry of compassion by donating gently used or new clothing items, as we strive to make a meaningful impact and spread the warmth of kindness throughout our community. Your contribution can make a difference in someone's life, one thread at a time.
                                    </Card.Text>
                                    <Button variant="primary">Join us</Button>
                                </Card.Body>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card" style={{height:"100%"}}>
                                <Card.Img variant="top" src={img2} />
                                <Card.Body>
                                    <Card.Title>Nourish the Need: Food Donation Drive</Card.Title>
                                    <Card.Text style={{fontSize:"14px"}}>
                                    "Nourish the Need" is a community-driven food donation initiative focused on alleviating hunger and fostering kindness. We invite you to join us in making a difference by contributing non-perishable food items. Your generosity will directly impact the lives of those facing food insecurity, helping us build a stronger, more compassionate community. Let's come together to share the abundance and nourish the need. Every donation counts!


                                    </Card.Text>
                                    <Button variant="primary">Join us</Button>
                                </Card.Body>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{marginTop:"50px"}}>
                            <div className="col-lg-4">
                            <div className="card" style={{height:"100%"}}>
                                <Card.Img variant="top" src={img3} />
                                <Card.Body>
                                    <Card.Title>Tech for All: Empowering Through Technology Drive</Card.Title>
                                    <Card.Text style={{fontSize:"14px"}}>
                                    Join our "Tech for All" initiative as we collect electronic devices, computers, and accessories in our technology drive. By bridging the digital divide, we aim to provide access to technology for underserved communities, opening doors to education, opportunities, and a brighter future. Your contribution to this drive will empower individuals and communities through the transformative power of technology. Let's build a more connected and inclusive world together.


                                    </Card.Text>
                                    <Button variant="primary">Join us</Button>
                                </Card.Body>
                                </div>
                            </div>


                            <div className="col-lg-4">
                            <div className="card" style={{height:"100%"}}>
                                <Card.Img variant="top" src={img4} />
                                <Card.Body>
                                    <Card.Title>Radiant Hope: Cancer Awareness & Support Drive</Card.Title>
                                    <Card.Text style={{fontSize:"14px"}}>
                                    Join our "Radiant Hope" campaign, where we gather resources, information, and support materials to raise awareness about cancer prevention and provide crucial assistance to those undergoing treatment. Your support fuels our mission to spread knowledge, offer comfort, and stand united against cancer. Together, we can be a source of strength, bringing hope to those facing the challenges of this journey. Join us in making a difference – because every act of support is a step toward a cancer-free future.


                                    </Card.Text>
                                    <Button variant="primary">Join us</Button>
                                </Card.Body>
                                </div>
                            </div>


                            <div className="col-lg-4">
                            <div className="card" style={{height:"100%"}}>
                                <Card.Img variant="top" src={img5} />
                                <Card.Body>
                                    <Card.Title>Donate Blood, Save Lives</Card.Title>
                                    <Card.Text style={{fontSize:"14px"}}>
                                    Participate in our blood donation drive and be a lifesaver! Your simple act of donating blood can make a profound difference in someone's life. Join us in this vital mission to ensure a steady supply for those in need. It's a small gesture that carries the immense power to save lives.
                                    </Card.Text>
                                    <Button variant="primary">Join us</Button>
                                </Card.Body>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>


    )
}


export default ActivitiesData
