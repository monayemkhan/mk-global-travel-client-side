import React, { useEffect, useState } from 'react';
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const ManageBooking = () => {
    const [booking, setBooking] = useState([]);
    const [control, setConrol] = useState(false);

    useEffect(() => {
        fetch(`https://pure-wave-13733.herokuapp.com/booking`)
        .then(res => res.json())
        .then(data => setBooking(data));
        
        
    }, [control]);

console.log(booking);

    const handleDelete = (id) => {
        fetch(`https://pure-wave-13733.herokuapp.com/booking/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.deletedCount) {
                // alert('Are you Sure To Delete?');
                if(window.confirm('Are you Sure To Delete?')){
                    setConrol(!control);
                }
                

            } else {
            setConrol(false);
            }
        });
        console.log(id);
    };
    return (
        <div>
            <h2>{booking?.length}</h2>
            <Container className="my-5">
                <Row>
                    {
                        booking.map((bookings, index) => (
                            <Col 
                                key={bookings?._id}
                                md={6}
                            >
                                <Card style={{  }}>
                                <Card.Header>{bookings?.location}</Card.Header>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>{bookings?.user_name}</ListGroup.Item>
                                    <ListGroup.Item>{bookings?.email}</ListGroup.Item>
                                    <ListGroup.Item>{bookings?.date}</ListGroup.Item>
                                    <ListGroup.Item><button
                                    onClick={() => handleDelete(bookings._id)}
                                    className="btn btn-outline-danger  p-2"
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