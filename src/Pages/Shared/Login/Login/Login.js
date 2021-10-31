import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
            <Container>
                <Row className="w-50 border my-5 mx-auto p-3" >
                    <Col md={12}>
                        <div className="text-center">
                            <h2 className="fs-3 ">Welcome to login</h2>
                            <p>Don't have an account?</p>
                            <p>Please click the Google Sign In button</p>
                        </div>
                    </Col>

                    <Col md={12}>
                        <div className="text-center">
                            <button onClick={signInUsingGoogle} className="btn btn-outline-primary p-3 fw-bold">
                                <FontAwesomeIcon className="me-3" icon={faGoogle}></FontAwesomeIcon>
                                Google Sign In
                            </button>
                        </div>
                    </Col>
                    
                </Row>
            </Container>
    );
};

export default Login;