import React from 'react';
import { Button, Col, Container, Row } from "react-bootstrap";
import project5 from '../../images/project/carMechanic.png';
import project1 from '../../images/project/carsWorld.png';
import project6 from '../../images/project/doctors.png';
import project2 from '../../images/project/emaJohn.png';
import project4 from '../../images/project/rafi.png';
import project3 from '../../images/project/tourMate.png';
import './Projects.css';

const portfolioData= [
    {
        image: project1,
        url: 'https://cars-world-b8cea.web.app/'
    },
    {
        image: project2,
        url: 'https://ema-john-fc5b9.web.app/'
    },
    {
        image: project3,
        url: 'https://tourmate-acd90.web.app/'
    },
    {
        image: project4,
        url: 'https://rafi-medicine-center.web.app/'
    },
    {
        image: project5,
        url: 'https://genius-car-mechanic-8511c.web.app/'
    },
    {
        image: project6,
        url: 'https://top-doctors.netlify.app/'
    }
]

const Projects = () => {
    return (
        <>
            <Container className="text-center mt-5">
                <h6 className="title">Portfolio</h6>
                <h3 className="mb-4">Recent Projects</h3>
                <Row>
                    {
                        portfolioData.map(data =>
                            <Col  lg={4} md={6} sm={12}>
                                <div className="portfolioCard">
                                    <img className="projectImage" src={data.image} alt=""/>
                                    <div className="middle">
                                        <a href={data.url} target="_blank" rel="noreferrer">
                                            <div className="text">Live Preview</div>
                                        </a> <br/>
                                        <Button variant="light">Details</Button>
                                    </div>
                                </div>
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </>
    );
};

export default Projects;