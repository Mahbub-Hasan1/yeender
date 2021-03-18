import React from 'react';

const About = () => {
    const dkd = 5;
    return (
        <section className="about-area d-flex align-items-center">
            <div className="container-xl">
                <div className="row">
                    <div className="col-md">
                        <img
                            className="about-img img-fluid"
                            src="https://stacksolution.dev/api/uploads/about_us_86d6a3824c.jpg"
                            alt=""
                        />
                    </div>
                    <div className="col-md about-content-texts">
                        <h6>ABOUT US</h6>
                        <h5>Creating A Bridge Between Business & Quality Solutions</h5>
                        <h3>A StartUp Journey ----------</h3>
                        <p>
                            Stack Solution will create a bridge between your business demand and
                            quality software solutions to build a virtual world without borders.
                            With our wide experience, we are able to define what solution could
                            bring maximum benefits to your company. We are driven by delivering
                            outstanding cost-effective solutions with transparent pricing, strong
                            user experience, robust architecture, superior quality, and organized
                            communication
                        </p>
                        <p className="about-details-btn">More Details >></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
