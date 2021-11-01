import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Testimonial = () => {
    return (
        <div>
            <Container className="text-center my-5">
                <div>
                    <p className="text-secondary">What Our Clients Saying</p>
                    <h2>Our Traveler Says</h2>
                </div>
                <Row className="mt-4">
                    <Col md={4} xs={12} className="my-sm-3 my-md-0">
                        <Card>
                            <Card.Img className="w-50 mx-auto rounded-circle mt-2" variant="top" src={`https://i.ibb.co/TYx5DMY/user-1.jpg`} />
                            <Card.Body>
                            <Card.Title>Adam Wardilia</Card.Title>
                            <Card.Title>
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStarHalfAlt} />
                            </Card.Title>
                            <Card.Text>
                            <span>Annie,</span> is always a pleasure to work with. She is friendly, professional and well informed. Annie always efficiently deals with any travel. Every trip we have planned with her has been excellent.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} xs={12}>
                        <Card>
                            <Card.Img className="w-50 mx-auto rounded-circle mt-2" variant="top" src={`https://i.ibb.co/mvXkZLZ/user-2.jpg`} />
                            <Card.Body>
                            <Card.Title>Lily Warliags</Card.Title>
                                <Card.Title>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStarHalfAlt} />
                                </Card.Title>
                                <Card.Text>
                                Wow <span>Vali.</span> I thank you for all your effort and travel information. I really wasn’t expecting that you do this. Every trip we have planned with her has been excellent. So thank you very much.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} xs={12}>
                        <Card>
                            <Card.Img className="w-50 mx-auto rounded-circle mt-2" variant="top" src={`https://i.ibb.co/s2qK2PR/user-3.jpg`} />
                            <Card.Body>
                            <Card.Title>Swan Dikarlia</Card.Title>
                            <Card.Title>
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStarHalfAlt} />
                            </Card.Title>
                            <Card.Text>
                            Amber, thank you so much for a well organized trip. We had a wonderful time. Hard to believe it's already done and past. Weather was awesome, thank you for everything!
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>        
            </Container>
        </div>
    );
};

export default Testimonial;