import React from 'react'
import logo from '../assets/images/logo.png'

import '../assets/css/header.css'
import { Navbar } from 'react-bootstrap'

export const Header = () => {
    return (
        <div>
            <header className="header">
                <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white">
                    <div className="container">
                        <div className="row d-flex align-items-center justify-content-start w-100 flex-wrap">
                            <button className="navbar-toggler custom_toggle" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar_toggler_icon"></span>
                            </button>
                            <a className="navbar-brand header_logo" href="#"><img src={logo} alt="logo" className="img-fluid" /></a>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav m-auto main_nav">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">Accept payments</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Payouts</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Business Tools</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Financial Services</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Grow & Earn</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Resources</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Sign In</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link signUp_btn" href="#">Sign Up</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
