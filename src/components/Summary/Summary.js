import React, {Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCoffee, faCode, faHandshake, faHeart} from "@fortawesome/free-solid-svg-icons";
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";
import './Summary.css';

const Summary = () => {
    return (
        <Fragment>
            <Container fluid={true} className="SummaryBanner mt-5">
                <Container className="text-center">
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <Row className="countSection">
                                <Col>
                                    <FontAwesomeIcon className="icon" icon={faHandshake} />
                                    <h1 className="countNumber">
                                        <CountUp start={0} end={20}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                    </h1>
                                    <h4 className="countTitle">Total Projects</h4>
                                    <hr className="bg-white w-25"/>
                                </Col>
                                <Col>
                                    <FontAwesomeIcon className="icon" icon={faHeart} />
                                    <h1 className="countNumber">
                                        <CountUp start={0} end={15}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                    </h1>
                                    <h4 className="countTitle">Total Clients</h4>
                                    <hr className="bg-white w-25"/>
                                </Col>
                                <Col>
                                    <FontAwesomeIcon className="icon" icon={faCoffee} />
                                    <h1 className="countNumber">
                                        <CountUp start={0} end={2000}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                    </h1>
                                    <h4 className="countTitle">Cup of Tea</h4>
                                    <hr className="bg-white w-25"/>
                                </Col>

                                <Col>
                                    <FontAwesomeIcon className="icon" icon={faCode} />
                                    <h1 className="countNumber">
                                        <CountUp start={0} end={30000}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                    </h1>
                                    <h4 className="countTitle">Lines Of Codes</h4>
                                    <hr className="bg-white w-25"/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </Fragment>
    );
};

export default Summary;