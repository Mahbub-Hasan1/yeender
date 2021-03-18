import DehazeIcon from '@material-ui/icons/Dehaze';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar-area">
            <div className="container-xl">
                <nav className="navbar navbar-expand-lg">
                    <img className="NavLogo img-fluid" src="https://i.imgur.com/Is6egZ9.png" alt="" />
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <DehazeIcon />
                    </button>
                    <div className="collapse navbar-collapse justify-content-around" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link href="/">
                                    <a className="nav-link">HOME<span className="sr-only">(current)</span></a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/services">
                                    <a className="nav-link">SERVICES</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/about">
                                    <a className="nav-link">ABOUT</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/contact">
                                    <a className="nav-link">CONTACT</a>
                                </Link>
                            </li>

                        </ul>
                        <div>
                            <h5>+8801708761211</h5>
                        </div>
                    </div>

                </nav>
            </div>
        </div>
    );
};

export default Navbar;