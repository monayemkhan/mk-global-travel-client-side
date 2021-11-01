import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, setUser, error, setError } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    const handleGoogleLogIn =() => {
        signInUsingGoogle()
            .then((result)=>{
                setUser(result.user)
                history.push(redirect_url);
                })
                .catch((error)=>{
                    setError(error.message)
            })
    };

    return (
            <Container>
                <Row className="w-50 border my-5 mx-auto p-3" >
                    <Col md={12}>
                        <div className="text-center">
                            <h2 className="fs-3 ">Please login</h2>
                            <p>Don't have an account?</p>
                            <p>Please press the Sign In Google button</p>
                        </div>
                    </Col>

                    <Col md={12}>
                        <div className="text-center">
                            <button onClick={handleGoogleLogIn} className="btn btn-primary p-3">
                                <FontAwesomeIcon className="me-3" icon={faGoogle}></FontAwesomeIcon>
                                Sign In Google
                            </button>
                        </div>
                    </Col>
                    
                </Row>
            </Container>
    );
};

export default Login;