import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Travel = (props) => {
    const { name, short_des, location, img} = props.travel
    return (
        <div className="col-md-4 mt-4">
            <Card >
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{location}</Card.Text>
                    <Card.Text>{short_des}</Card.Text>
                    <Button variant="outline-primary">Book Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Travel;