import React, {useEffect} from 'react';
import Header from "../components/Header/Header";
import Services from "../components/Services/Services";
import Contact from "../components/Contact/Contact";
import PageTop from "../components/PageTop/PageTop";

const ServicePage = () => {
    useEffect(()=>{
        window.scroll(0,0)
    },[]);
    return (
        <>
            <Header />
            <PageTop />
            <Services />
            <Contact/>
        </>
    );
};

export default ServicePage;