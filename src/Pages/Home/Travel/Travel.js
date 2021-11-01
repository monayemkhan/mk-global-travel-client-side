import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Travel = ({ travel }) => {
    const { _id, name, short_des, location, img} = travel;
    return (
        <div className="col-md-4 mt-4">
            <Card >
                <Card.Img variant="top" src={travel?.img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{location}</Card.Text> 
                    <Card.Text>{short_des}</Card.Text>
                    <Link to={`/travels/${_id}`}>
                    <Button variant="outline-primary">Book Now</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Travel;