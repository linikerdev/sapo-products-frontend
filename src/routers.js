import React from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Layout from "./components/layout";

import { home } from "./views/"


const Routers = () => {

    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/:filter?" component={home} />
                </Switch>
            </Layout>
        </Router>
    )
}

export default Routers;
