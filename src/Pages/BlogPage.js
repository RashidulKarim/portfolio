import React, {useEffect} from 'react';
import Header from "../components/Header/Header";
import Blog from "../components/Blog/Blog";
import PageTop from "../components/PageTop/PageTop";
import Contact from "../components/Contact/Contact";

const BlogPage = () => {
    useEffect(()=>{
        window.scroll(0,0)
    },[]);
    return (
        <>
            <Header />
            <PageTop />
            <Blog />
            <Contact />
        </>
    );
};

export default BlogPage;