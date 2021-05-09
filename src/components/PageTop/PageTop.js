import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import './PageTop.css';

const PageTop = () => {
    return (
        <>
            <Container fluid={true} className="topFixedPage p-0" >
                <div className="topPageOverlay">
                    <Container className="topPageContent">
                        <Row>
                            <Col className="text-center">
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
        </>
    );
};

export default PageTop;