import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const TravelDetails = () => {
    const { travelId } = useParams();
    const [travels, setTravel] = useState([]);

    useEffect(() => {
        fetch(`https://pure-wave-13733.herokuapp.com/travels/${travelId}`)
        .then(res => res.json())
        .then(data => setTravel(data))
    }, [travelId]);

    return (
        <div>
            <Container className="my-5">
                <Row>
                    <Col md={12} className="text-center">
                        <img className="w-75 mx-auto" src={travels.img} alt="" />
                    </Col>
                    <Col md={12} className="w-75 mx-auto mt-5">
                        <h2>{travels.name}</h2>
                        <p>Location: {travels.location}</p>
                        <p>Description: {travels.full_des}</p>
                        <h3 className="mb-3 text-danger">Price: $ {travels.Price}</h3>
                        <Link to={`/booking/${travels._id}`}>
                            <Button variant="outline-primary fw-bold w-100 p-2">Booking</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TravelDetails;