import React from 'react';
import { Button, Container, Nav, Navbar, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand to="/home">
                    <img className="w-75" src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link to="/home">Home</Nav.Link>
                        <Nav.Link to="/link">Packages</Nav.Link>
                        <Nav.Link to="/link">Blogs</Nav.Link>
                        <Nav.Link to="/link">Offers</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    {user?.email?
                        <Button className="rounded-pill me-2 fw-bold" onClick={logOut} variant="outline-warning">Log Out</Button> 
                        :
                        <Nav.Link as={Link} to="/login">
                            <Button className="rounded-pill fw-bold" variant="outline-primary">Login</Button>
                        </Nav.Link>}
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
};

export default Header;