import React from 'react';
import './About.css';
import { Button, Col, Container, Row } from "react-bootstrap";
import aboutImg from '../../images/Rashidul Karim (1).png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <>
            <Container fluid={true} className="p-5">
                <Container>
                    <h3 className="text-center">About Me...</h3>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <div className="mt-5 ml-5">
                                <img className="w-100 about-img" src={aboutImg} alt="" />
                                <div className="custom-border"> </div>
                                <div className="experience">
                                    <h6 className="text-center">01 <br /> Year of Experience</h6>
                                    <a href="https://www.facebook.com/rkrashu" target='_blank'><FontAwesomeIcon className="socialLink" icon={faFacebookF} /></a>
                                    <a href="https://www.linkedin.com/in/md-rashidul-karim-5a20a656/" target='_blank'>
                                        <FontAwesomeIcon className="socialLink" icon={faLinkedinIn} />
                                    </a>
                                    <a href="https://github.com/rkrashu" target='_blank'>
                                    <FontAwesomeIcon className="socialLink" icon={faGithub} />
                                    </a>
                                    
                                </div>
                            </div>

                        </Col>

                        <Col lg={6} md={6} sm={12}>
                            <div className="mt-5">
                                <Button variant="primary btn-sm">About Me</Button>
                                <Button variant="outline-primary btn-sm" className="ml-3">Education</Button>
                                <Button variant="outline-primary btn-sm" className="ml-3">Skills</Button>
                                <Button variant="outline-primary btn-sm" className="ml-3">Experience</Button>
                            </div>
                            <h3 className="mt-5 mb-4">Hi I'm Web Developer</h3>

                            <p className="text-des mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <a href="https://drive.google.com/file/d/1UXo_Vod300yujElwN26Qya4E5htovHL9/view?fbclid=IwAR323Qwr5xTH5Nc9DMQSHNZMgemPvpSImN_0ygDcQsrX5SF8uL3h_-zI6po" target="_blank">
                                <Button variant="primary">Download CV</Button></a>
                            <Link to="/contact"><Button variant="outline-primary" className="ml-3">Contact</Button></Link>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
};

export default About;