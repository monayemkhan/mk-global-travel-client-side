import React, { useEffect, useState } from 'react';
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';

const ManageBooking = () => {
    const [booking, setBooking] = useState([]);
    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch(`https://pure-wave-13733.herokuapp.com/booking`)
        .then(res => res.json())
        .then(data => setBooking(data));
        
    }, [control]);

    const handleDelete = (id) => {
        fetch(`https://pure-wave-13733.herokuapp.com/booking/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.deletedCount) {
                if(window.confirm('Are you Sure To Delete?')){
                    setControl(!control);
                }
            } 
            else {
            setControl(false);
            }
        });
    };

    // update status
    const handleUpdateStatus = (id) => {

        const updated = { status: 'Approved' }

        fetch(`https://pure-wave-13733.herokuapp.com/updatebooking/${id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updated)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0) {
                alert('Order approved');
                window.location.reload()
            }
        })
    };

    return (
        <div>
            <div className="border-bottom border-2 my-5 text-center">
                <h2 className="fs-2 fw-bold">Manage All Booking</h2>
            </div>

            <Container className="my-5">
                <Row>
                    {
                        booking.map((bookings) => (
                            <Col 
                                key={bookings?._id}
                                md={4}
                            >
                                <Card className="text-center mb-4 shadow">
                                <Card.Header>{bookings?.location}</Card.Header>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>{bookings?.user_name}</ListGroup.Item>
                                    <ListGroup.Item>{bookings?.email}</ListGroup.Item>
                                    <ListGroup.Item>{bookings?.date}</ListGroup.Item>
                                    <ListGroup.Item>{bookings?.status}</ListGroup.Item>
                                    <ListGroup.Item><button
                                    onClick={() =>handleUpdateStatus(bookings._id)}
                                    className="btn btn-outline-primary w-100"
                                    >Confirm</button>
                                    </ListGroup.Item>
                                    <ListGroup.Item><button
                                    onClick={() => handleDelete(bookings._id)}
                                    className="btn btn-outline-primary w-100"
                                    >Delete</button> 
                                    </ListGroup.Item>
                                </ListGroup>
                                </Card>
                            </Col>
                        ) )
                    }
                </Row>
            </Container>    
        </div>
    );
};

export default ManageBooking;