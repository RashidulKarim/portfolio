import React from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import './Header.css';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <>
            <Container fluid={true}>
                <Container className="fixed-top navBackground">
                    <Navbar expand="lg">
                        <Link to="/"><Navbar.Brand href="#home" className="logo-title">Rashidul Karim</Navbar.Brand></Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Link to="/"><Nav.Link className="navItem" href="#home">Home</Nav.Link></Link>
                                <Link to="/about"><Nav.Link className="navItem" href="#link">About</Nav.Link></Link>
                                <Link to="/service"><Nav.Link className="navItem" href="#link">Service</Nav.Link></Link>
                                <Link to="/project"><Nav.Link className="navItem" href="#link">Portfolio</Nav.Link></Link>
                                <Link to="/blog"><Nav.Link className="navItem" href="#link">Blog</Nav.Link></Link>
                                <Link to="/contact"><Nav.Link className="navItem" href="#link">Contact</Nav.Link></Link>
                            </Nav>
                            <a href="https://drive.google.com/file/d/1UXo_Vod300yujElwN26Qya4E5htovHL9/view?fbclid=IwAR323Qwr5xTH5Nc9DMQSHNZMgemPvpSImN_0ygDcQsrX5SF8uL3h_-zI6po" target="_blank">
                                <Button variant="primary">Get Resume</Button></a>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </Container>
        </>
    );
};

export default Header;