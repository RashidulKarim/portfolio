import React, { Fragment } from 'react';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faTwitter, faYoutube, faSkype } from "@fortawesome/free-brands-svg-icons";
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_msddx5s', 'template_3ubic8d', e.target, 'user_wEiJx686BZ96PI9I4H5bm')
            .then((result) => {
                alert('Your message is send successfully');
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <Fragment>
            <Container fluid={true} className="bg-light">
                <Container style={{ marginTop: '100px' }}>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <h1 className="contact-title mb-4">Contact Info</h1>
                            <p className="contact-info" ><FontAwesomeIcon className="footer-icon" icon={faHome} /> Gulshan-1, Dhaka, Bangladesh.</p>
                            <p className="contact-info" > <FontAwesomeIcon className="footer-icon" icon={faEnvelope} /> rashidul.karim7@gmail.com</p>
                            <p className="contact-info" > <FontAwesomeIcon className="footer-icon" icon={faSkype} /> live:4b9aaaed6d28f7b</p>
                            <p className="contact-info" > <FontAwesomeIcon className="footer-icon" icon={faPhoneAlt} /> +880 1915555256</p>
                            <a href="https://www.facebook.com/rkrashu" target='_blank'><p className="contact-info" > <FontAwesomeIcon className="footer-icon" icon={faLinkedin} /> Linkedin</p></a>
                            <a href="https://github.com/rkrashu" target='_blank'><p className="contact-info" > <FontAwesomeIcon className="footer-icon" icon={faGithub} /> Github</p></a>
                            <a href="https://www.youtube.com/" target='_blank'><p className="contact-info" > <FontAwesomeIcon className="footer-icon" icon={faYoutube} /> Youtube</p></a>
                        </Col>

                        <Col lg={6} md={6} sm={12}>
                            <h1 className="contact-title mb-4">Get in touch</h1>
                            <Form onSubmit={sendEmail}>
                                <Form.Group>
                                    <Form.Label className="textDes" >Name</Form.Label>
                                    <Form.Control type="text" name="user_name" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label className="textDes" >Email Address</Form.Label>
                                    <Form.Control type="email" name="user_email" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label className="textDes" >Message</Form.Label>
                                    <Form.Control as="textarea" rows="3" name="message" />
                                </Form.Group>

                                <Button variant="primary btn-block" type="submit">
                                    Send Now
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                    <p className="copy-write" style={{ marginTop: '80px' }}>Copyright © 2021 Rashidul Karim. All Rights Reserved.</p>
                </Container>
            </Container>
        </Fragment>
    );
};

export default Contact;