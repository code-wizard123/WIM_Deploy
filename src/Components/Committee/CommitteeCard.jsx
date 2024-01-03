import React from 'react'

const CommitteeCard = ({ data }) => {
    return (
        <div className="section_our_solution">
            <div className="our_solution_category">
                {data.map((dataObj, index) => {
                    return <>
                        <div className="solution_cards_box">
                            <div className="solution_card">
                                <div className="hover_color_bubble"></div>
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        fill="white"
                                        className="bi bi-geo-alt"
                                        viewBox="0 0 16 16"
                                    >
                                    </svg>
                                </div>
                                <div className="solu_title">
                                    <div className="profile-img">
                                        <img
                                            className="img-fluid profile-img normal-img"
                                            // src={props.logoBlack}
                                            alt="Image"
                                        />
                                        <img
                                            className="img-fluid profile-img hover-img"
                                            // src={props.stucoImage}
                                            alt="Image"
                                        />
                                    </div>
                                    <h4 className="card-title p-0 mb-2 mt-4">{`${dataObj.fname}  ${" "}  ${dataObj.lname}`}</h4>
                                </div>
                                <div className="solu_description">
                                    <q className="text-center mb-4">{dataObj.email}</q>
                                </div>
                                <div className="card-footer">
                                    <footer id="footer">
                                        <a href="" target="_blank" className="ex mx-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                fill="white"
                                                className="bi bi-globe2 footer-img"
                                                viewBox="0 0 16 16"
                                            >
                                                {/* Path data */}
                                            </svg>
                                        </a>
                                        <a href={`mailto:${dataObj.email}`} target="_blank" className="mx-2" rel="noreferrer">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                fill="currentColor"
                                                className="bi bi-envelope-fill footer-img"
                                                viewBox="0 0 16 16"
                                            >
                                                {/* Path data */}
                                            </svg>
                                        </a>
                                        <a
                                            href=""
                                            target="_blank"
                                            className="ex mx-2"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                fill="white"
                                                className="bi bi-instagram footer-img"
                                                viewBox="0 0 16 16"
                                            >
                                                {/* Path data */}
                                            </svg>
                                        </a>
                                        <a href="" target="_blank" className="mx-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                fill="currentColor"
                                                className="bi bi-linkedin footer-img"
                                                viewBox="0 0 16 16"
                                            >
                                                {/* Path data */}
                                            </svg>
                                        </a>
                                    </footer>
                                </div>
                            </div>
                        </div>
                    </>
                })}


            </div>
        </div>
    )
}

export default CommitteeCard
