import React from 'react';
import { Button, Container, Nav, Navbar, } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand className="m-0 p-0" to="/home">
                    <img className="w-50" src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <div className="d-flex">
                        <NavLink to="/home" activeClassName="border-bottom border-primary rounded-bottom text-primary fw-bold" className="nav-link text-dark border-2 border-transparent p-0 me-2">Home</NavLink>
                        <NavLink to="/addtravels" activeClassName="border-bottom border-primary rounded-bottom text-primary fw-bold" className="nav-link text-dark border-2 border-transparent p-0 me-2">Add Travel</NavLink>
                        {user?.email?
                            <>
                                <NavLink to={`/mybooking/${user?.email}`} activeClassName="border-bottom border-primary rounded-bottom text-primary fw-bold" className="nav-link text-dark border-2 border-transparent p-0 me-2">My Booking</NavLink>
                                <NavLink to="/managebooking" activeClassName="border-bottom border-primary rounded-bottom text-primary fw-bold" className="nav-link text-dark border-2 border-transparent p-0 me-2">Manage Booking</NavLink>
                            </>
                            :
                            ''
                        } 
                    </div>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    {user?.email?
                        <Button className="rounded-pill me-2" onClick={logOut} variant="primary">Log Out</Button> 
                        :
                        <Nav.Link as={Link} to="/login">
                            <Button className="rounded-pill fw-bold" variant="outline-primary">Login</Button>
                        </Nav.Link>
                    }
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