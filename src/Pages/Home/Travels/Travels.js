import React, { useState, useEffect} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Travel from '../Travel/Travel';

const Travels = () => {
    const [travels, setTravel] = useState([]);
    // using useEffect for data load
    useEffect(() => {
        fetch('http://localhost:5000/travels')
        .then(res => res.json())
        .then(data => setTravel(data))
    }, []);

    return (
        <div>
            <Container className="my-5">
                <Row>
                    <Col className="text-center">
                        <h4 className="fs-6 text-secondary">Popular Travel Packages</h4>
                        <h1 className="fs-1 fw-700">Featured Travel Packages</h1>
                    </Col>
                </Row>
                <Row>
                    {
                        travels.map(travel => <Travel
                        key={travel._id}
                        travel={travel}
                        ></Travel>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Travels;