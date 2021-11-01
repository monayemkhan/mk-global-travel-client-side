import { faApple, faCcJcb, faCcMastercard, faCcPaypal, faCcVisa, faFacebookSquare, faGooglePlay, faInstagramSquare, faInvision, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logo.png'

const Footer = () => {
    return (
        <div className="bg-dark">
            <Container>
                <Row className="border-bottom border-secondary">
                    <Col className="mt-4 mb-3">
                        <div>
                            <img className="w-50" src={logo} alt="" />
                        </div>
                        <div className="text-secondary">
                            <div>
                                <p> <strong>Email:</strong> <br /> mkglobaltravel@gmail.com</p>
                                <p> <strong>Call:</strong> <br /> 0123456789</p>
                                
                            </div>
                            <div>
                                <NavLink className=" me-2 text-secondary fs-4" to="/home"><FontAwesomeIcon icon={faFacebookSquare} /></NavLink>
                                <NavLink className=" me-2 text-secondary fs-4" to="/home"><FontAwesomeIcon icon={faTwitterSquare} /></NavLink>
                                <NavLink className=" me-2 text-secondary fs-4" to="/home"><FontAwesomeIcon icon={faInstagramSquare} /></NavLink>
                                <NavLink className=" me-2 text-secondary fs-4" to="/home"><FontAwesomeIcon icon={faInvision} /></NavLink>
                            </div>
                        </div>
                    </Col>
                    <Col className="mt-5">
                        <div className="text-secondary">
                            <div>
                                <h4 className="text-light fs-4">Navigations</h4>
                            </div>
                            <div>
                                <NavLink className="text-secondary d-block" to="/home">Video Home Page</NavLink>
                                <NavLink className="text-secondary d-block" to="/home">Browse Candidates</NavLink>
                                <NavLink className="text-secondary d-block" to="/home">Browse Employers</NavLink>
                                <NavLink className="text-secondary d-block" to="/home">Advance Search</NavLink>
                            </div>
                        </div>
                    </Col>
                    <Col className="mt-5">
                        <div className="text-secondary">
                            <div>
                               <h4 className="text-light fs-4">Download Apps</h4>
                            </div>
                            <div>
                                <div className="d-flex border border-1 border-secondary my-2">
                                    <NavLink className=" mx-3 text-secondary fs-2" to="/home"><FontAwesomeIcon className="text-primary" icon={faGooglePlay} /></NavLink>
                                    <h5>Google Play <br /> <small>Get It Now</small></h5>
                                </div>
                                <div className="d-flex border border-1 border-secondary my-2">
                                    <NavLink className=" mx-3 text-secondary fs-1" to="/home"><FontAwesomeIcon className="text-primary" icon={faApple} /></NavLink>
                                    <h5>App Store <br /> <small>Get It Now</small></h5>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col>
                        <div className="mt-3">
                            <p className="text-light"> <small>© 2020 MK global Travel. Designd By Monayem Kahn. All Rights Reserved</small></p>
                        </div>
                    </Col>
                    <Col className="text-end mb-3">
                        <div>
                            <NavLink className=" me-2 text-secondary fs-1" to="/home"><FontAwesomeIcon icon={faCcVisa} /></NavLink>
                            <NavLink className=" me-2 text-secondary fs-1" to="/home"><FontAwesomeIcon icon={faCcPaypal} /></NavLink>
                            <NavLink className=" me-2 text-secondary fs-1" to="/home"><FontAwesomeIcon icon={faCcJcb} /></NavLink>
                            <NavLink className=" me-2 text-secondary fs-1" to="/home"><FontAwesomeIcon icon={faCcMastercard} /></NavLink>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;