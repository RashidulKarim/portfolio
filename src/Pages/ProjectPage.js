import React, {useEffect} from 'react';
import Header from "../components/Header/Header";
import Projects from "../components/Projects/Projects";
import PageTop from "../components/PageTop/PageTop";
import Contact from "../components/Contact/Contact";

const ProjectPage = () => {
    useEffect(()=>{
        window.scroll(0,0)
    },[]);
    return (
        <>
            <Header />
            <PageTop />
            <Projects />
            <Contact />
        </>
    );
};

export default ProjectPage;