import React from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import Blog1 from '../../images/blog1.png'
import Blog2 from '../../images/blog2.png'
import Blog3 from '../../images/blog3.png'
import adminImg from '../../images/Rashidul Karim (1).png'
import {faCalendar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './Blog.css';

const blogData = [
    {
        image: Blog1,
        title: '12 Things I Stole From People More Successful Than Me',
        url: 'https://medium.com/mind-cafe/12-things-i-stole-from-people-more-successful-than-me-d0ef5ef6cd84',
        des: 'Throughout my entire life, I’ve been fortunate enough to have read 100’s of books written by people who are a lot more successful than I am.\n + People like Nobel Prize winner Daniel Kahneman, billionaire investor Charlie Munger, Founding Father Ben Franklin,',
        data: '30-April-2021'
    },
    {
        image: Blog2,
        title: 'Why IQ Determines Everything in Your Life (the Sad Truth)',
        url: 'https://medium.com/the-masterpiece/why-iq-determines-everything-in-your-life-the-sad-truth-650ab95fa94d',
        des: 'Hawking has a point — nobody likes a sore winner. That being said, the intelligent quotient (IQ) test is one of the most valid and reliable psychometrics ever created.\n + According to the mental health website verywell Mind, “An IQ test is an assessment”',
        data: '01-May-2021'
    },
    {
        image: Blog3,
        title: 'As a tech guy, you will thank me for these websites',
        url: 'https://blog.devgenius.io/as-a-tech-guy-you-will-thank-me-for-these-websites-be09e86ebcef',
        des: 'As a technical person, I fetch some regular basis tasks. There are tasks that we can solve in several ways. Many tools, open-source programs, coding, or anything can be helpful in these cases.\n + But one thing I believe in that I mentioned above.',
        data: '02-May-2021'
    }
]


const Blog = () => {
    return (
        <>
            <Container className="mt-5">
                <h6 className="title text-center">Blog</h6>
                <h3 className="text-center mb-5">My Recent Blog</h3>
                <Row>
                    {
                        blogData.map(data =>
                            <Col lg={4} md={6} sm={12}>
                                <Card className="blogCard">
                                    <Card.Img className="blogImg" src={data.image}/>
                                    <Card.Body>
                                        <a href={data.url} target="_blank"> <Card.Title className="blog-Topic-Title mt-1">{data.title}</Card.Title></a>
                                        <img className="adminImg" src={adminImg} alt=""/> <span
                                        className="byAdmin">By : admin </span>
                                        <span className="postDate"><FontAwesomeIcon icon={faCalendar}/> {data.data}</span>
                                        <Card.Text className="blogDes text-justify">
                                            {data.des}
                                        </Card.Text>
                                        <a className="readMore" href={data.url} target="_blank">Read More</a>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </>
    );
};

export default Blog;