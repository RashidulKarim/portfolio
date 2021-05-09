import React, {useEffect} from 'react';
import Header from "../components/Header/Header";
import About from "../components/About/About";
import PageTop from "../components/PageTop/PageTop";
import Contact from "../components/Contact/Contact";

const AboutPage = () => {
    useEffect(()=>{
        window.scroll(0,0)
    },[]);
    return (
        <>
            <Header/>
            <PageTop />
            <About/>
            <Contact />
        </>
    );
};

export default AboutPage;