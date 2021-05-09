import React, {Fragment, useEffect} from 'react';
import { Route, Switch } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ServicePage from "../Pages/ServicePage";
import ProjectPage from "../Pages/ProjectPage";
import BlogPage from "../Pages/BlogPage";
import ContactPage from "../Pages/ContactPage";
import AboutPage from "../Pages/AboutPage";

const AppRoute = () => {
    useEffect(()=>{
        window.scroll(0,0)
    },[]);
    return (
        <Fragment>
            <Switch>
                <Route>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/about" component={AboutPage} />
                    <Route exact path="/service" component={ServicePage} />
                    <Route exact path="/project" component={ProjectPage} />
                    <Route exact path="/blog" component={BlogPage} />
                    <Route exact path="/contact" component={ContactPage} />

                </Route>
            </Switch>
        </Fragment>
    );
};

export default AppRoute;