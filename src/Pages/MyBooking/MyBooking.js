import React, { useEffect, useState } from 'react';
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyBooking = () => {
    const { user } = useAuth();
    const [booking, setBooking] = useState([]);
    const [control, setConrol] = useState(false);

    useEffect(() => {
        fetch(`https://pure-wave-13733.herokuapp.com/mybooking/${user?.email}`)
        .then(res => res.json())
        .then(data => setBooking(data));
        
        
    }, [setBooking]);

console.log(booking);

    const handleDelete = (id) => {
        fetch(`https://pure-wave-13733.herokuapp.com/deleteOrder/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.deletedCount) {
            setConrol(!control);
            } else {
            setConrol(false);
            }
        });
        console.log(id);
    };
    return (
        <div>
            <div className="border-bottom border-primary border-1 my-5 text-center">
                <h2 className="fs-2 fw-bold mb-5">My Booking</h2>
            </div>
            
            <Container className="my-5">
                <Row>
                    {
                        booking.map((bookings, index) => (
                            <Col 
                                key={bookings?._id}
                                md={6}
                            >
                                <div className="mb-4">
                                    <Card>
                                    <Card.Header>{bookings?.location}</Card.Header>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>{bookings?.user_name}</ListGroup.Item>
                                        <ListGroup.Item>{bookings?.email}</ListGroup.Item>
                                        <ListGroup.Item>{bookings?.date}</ListGroup.Item>
                                    </ListGroup>
                                    </Card>
                                </div>
                            </Col>
                        ) )
                    }
                </Row>
            </Container>
            
        </div>
    );
};

export default MyBooking;