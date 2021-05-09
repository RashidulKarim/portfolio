import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import Typical from 'react-typical';
import './HomeBanner.css';

const HomeBanner = () => {
    return (
        <>
            <Container fluid={true} className="topFixedBanner p-0">
                <div className="topBannerOverlay">
                    <Container className="topContent">
                        <Row>
                            <Col className="text-center">
                                <div className="ml-3">
                                    <h3 className="hello-title">Hello</h3>
                                    <h1 className="name-title">I'm Rashidul Karim</h1>
                                    <Typical className="skill-title"
                                             steps={['Web Designer', 3000, 'Web Developer', 3000, 'API Developer']}
                                             loop={Infinity}
                                             wrapper="p"
                                    />
                                    <Button variant="primary" className="ml-3">More Info</Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
        </>
    );
};

export default HomeBanner;