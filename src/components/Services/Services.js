import { faArrowRight, faCode, faDatabase, faPencilRuler } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import './Service.css';

const serviceData = [
    {
        icon: faPencilRuler,
        title: 'Web design',
        des: 'Qualified web design and attractive effects which catches visitor’s Eye.'
    },
    {
        icon: faCode,
        title: 'Web Development',
        des: 'Clean and fresh issue free code to make your website dynamic perfectly.'
    },
    {
        icon: faDatabase,
        title: 'API Development',
        des: 'ualified web design and attractive effects which catches visitor’s Eye.'
    },
    {
        icon: faCode,
        title: 'MERN Stack Development',
        des: 'Qualified web design and attractive effects which catches visitor’s Eye.'
    },
    {
        icon: faDatabase,
        title: 'Front-end Development',
        des: 'Clean and fresh issue free code to make your website dynamic perfectly.'
    },
    {
        icon: faPencilRuler,
        title: 'Problem Solving',
        des: 'ualified web design and attractive effects which catches visitor’s Eye.'
    }
]

const Services = () => {
    return (
        <>
            <Container fluid={true} className="bg-light p-5">
                <Container className="text-center">
                    <h6 className="title">Services</h6>
                    <h3 className="mb-4">What We Do...</h3>
                    <Row>
                        {
                            serviceData.map(data =>
                                <Col lg={4} md={6} sm={12}>
                                    <div className="serviceCard text-center">
                                        <FontAwesomeIcon className="service-icon" icon={data.icon}/>
                                        <h2 className="serviceName">{data.title}</h2>
                                        <p className="service-des">{data.des}</p>
                                       <h6 className="read-more">Read More  <FontAwesomeIcon icon={faArrowRight}/></h6>
                                    </div>
                                </Col>
                            )
                        }
                    </Row>
                </Container>
            </Container>
        </>
    );
};

export default Services;