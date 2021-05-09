import React, {useEffect} from 'react';
import Header from "../components/Header/Header";
import Contact from "../components/Contact/Contact";
import PageTop from "../components/PageTop/PageTop";

const ContactPage = () => {
    useEffect(()=>{
        window.scroll(0,0)
    },[]);
    return (
        <>
            <Header />
            <PageTop />
            <Contact/>
        </>
    );
};

export default ContactPage;