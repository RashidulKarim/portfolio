import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import project1 from '../../images/project/coders.jpg';
import project2 from '../../images/project/emajohn.jpg';
import project3 from '../../images/project/epl.jpg';
import project4 from '../../images/project/mobile view.jpg';
import project5 from '../../images/project/p12.png';
import project6 from '../../images/project/ride.jpg';
import './Projects.css';

const portfolioData= [
    {
        image: project1,
        url: 'https://coders-world-4c0ef.web.app/'
    },
    {
        image: project2,
        url: 'https://ema-jhon-test.netlify.app/'
    },
    {
        image: project3,
        url: 'https://eplteams.netlify.app/'
    },
    {
        image: project4,
        url: 'https://mobile-valley.web.app/'
    },
    {
        image: project5,
        url: 'https://rkrashu.github.io/penguin.fashion/'
    },
    {
        image: project6,
        url: 'https://bd-ride-sharing.firebaseapp.com/'
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
                                        <a href={data.url} target="_blank">
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