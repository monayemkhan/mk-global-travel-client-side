import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import background from '../../../images/banner.jpg'


const Banner = () => {
    return (
        <div className= "w-100 d-flex  justify-content-center align-items-center" style={{ height:`85vh`, backgroundImage: `url(${background})` }}>
            <Container>
                    <Row>
                        <Col md={8} sm={12} xs={12} className="text-white text-center text-md-start">
                            <h5 >Make your tours awesome</h5>
                            <h1>You have a destination,
                                <br />
                                We have a place
                            </h1>
                        </Col>
                        <Col xs={12} md={4} className="text-md-end text-sm-center mt-5 d-flex justify-content-center mx-auto">
                                <NavLink to="/" className="text-white"><FontAwesomeIcon className="fs-1" icon={faPlay} /></NavLink>
                        </Col>
                    </Row>
            </Container>
        </div>
    );
};

export default Banner;