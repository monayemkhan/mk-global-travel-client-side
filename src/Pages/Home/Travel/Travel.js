import { faClock, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Travel = ({ travel }) => {
    const { _id, name, period, short_des, location, Price} = travel;
    
    return (
        <div className="col-md-4 mt-4">
            <Card className="shadow">
                <Card.Img variant="top" src={travel?.img} />
                <Card.Body>
                    <Card.Title className="fw-bold">{name}</Card.Title>
                    <Card.Text className="text-secondary"><FontAwesomeIcon className="me-3" icon={faLocationArrow}></FontAwesomeIcon>{location}</Card.Text> 
                    <Card.Text className="text-secondary"><FontAwesomeIcon className="me-3" icon={faClock}></FontAwesomeIcon>{period}</Card.Text>
                    <Card.Text>{short_des}</Card.Text>
                    <Card.Text><h4>Price: ${Price}</h4></Card.Text>
                    <Link to={`/travels/${_id}`}>
                    <Button className="w-100" variant="outline-primary">Book Now</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Travel;