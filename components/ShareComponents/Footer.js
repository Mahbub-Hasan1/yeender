import Link from 'next/link';
import React from 'react';


const Footer = () => {
    return (
        <>
            <div className="footer-area mt-5">
                <div className="ftr-countEv mb-5">
                    <div className="ftr-cuntEv-content d-flex align-items-center">
                        <div className="container-xl">
                            <div className="text-center row row-cols-2 row-cols-md-4">
                                <div className="col mb-3">
                                    <h4>2</h4>
                                    <h4>Happy Clients</h4>
                                </div>
                                <div className="col">
                                    <h4>2</h4>
                                    <h4>Project Completed</h4>
                                </div>
                                <div className="col">
                                    <h4>2</h4>
                                    <h4>Hours Spent</h4>
                                </div>
                                <div className="col">
                                    <h4>2</h4>
                                    <h4>Cups of Coffee</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ------------------------------------------- */}
                <div className="container-xl">

                    <div className="row mb-5 mt-5">
                        <div className="col-md">
                            <h4 className="pb-2">Start Your Journey Today</h4>
                            <p className="ftr-journey-des">We won't push our ideas on you, we will simply make you happy by making you idea live</p>
                        </div>
                        <div className="col-md text-center"><button id="footer-contactBtn">Contact Us</button></div>
                    </div>
                    {/* ------------------------------------- */}
                    <div className="row">
                        <div className="col-md-6 col-lg-5 pb-5">
                            <img className="pb-3 img-fluid ftrLogo" src="https://i.imgur.com/Is6egZ9.png" alt="" />
                            <p className="pb-2">A Commitment of Modern Development Solution in A Cost-Effective Manner with Highest Possible Quality</p>
                            <h6 className="footer-link pb-1">© 2021 Yeender Ltd. <br />All Rights Reserved</h6>
                            <span className="footer-Policy">Terms & Conditions - Privacy Policy</span>
                        </div>

                        <div className="col-md-6 col-lg-2 pb-5">
                            <h5 className="footer-title pb-3">Information</h5>
                            <h6 className="footer-link pb-1"><Link href="/"><a>Our Company</a></Link></h6>
                            <h6 className="footer-link pb-1"><Link href="/"><a>Our Services</a></Link></h6>
                            <h6 className="footer-link pb-1"><Link href="/"><a>Case Studies</a></Link></h6>
                            <h6 className="footer-link pb-1"><Link href="/"><a>Our Team</a></Link></h6>
                            <h6 className="footer-link pb-1"><Link href="/"><a>Portfolio</a></Link></h6>
                        </div>
                        <div className="col-md-6 col-lg-2 pb-5">
                            <h5 className="footer-title pb-3">Social Links</h5>
                            <h6 className="footer-link pb-1"><Link href="/"><a>Facebook</a></Link></h6>
                            <h6 className="footer-link pb-1"><Link href="/"><a>Youtube</a></Link></h6>
                            <h6 className="footer-link pb-1"><Link href="/"><a>Linkedin</a></Link></h6>
                            <h6 className="footer-link pb-1"><Link href="/"><a>Twitter</a></Link></h6>
                        </div>
                        <div className="col-md-6 col-lg-3 pb-5"><h5 className="footer-title pb-3">Contact Us</h5>
                            <h6 className="footer-link pb-1">HOLDING 7-8, AMINA GREEN</h6>
                            <h6 className="footer-link pb-1">PARK, Banasree Main Rd1212,</h6>
                            <h6 className="footer-link pb-1">Dhaka</h6>
                            <h6 className="footer-link pb-1">https://stacksolution.dev</h6>
                            <h6 className="footer-link pb-1">support@stacklearner.com</h6>
                            <h6 className="footer-link pb-1">+8801714137780</h6>
                        </div>
                    </div>
                </div>
            </div>
            {/* <h5 className="text-center bubMahbub">Designed & Built by <Link href="https://mahbub-hasan.netlify.app/"><a>Mahbub Hasan</a></Link> -*- 2021</h5> */}
        </>
    );
};

export default Footer;