/**
 * Created by Counter on 7/2/2017.
 */
import React from 'react'
import Home from "./components/Home/home";
import createBrowserHistory from "history/createBrowserHistory";
import {BrowserRouter as Router, Route} from "react-router-dom";

const history = createBrowserHistory();
export default props => (
    <Router history={history}>
        <div>
            <Route path={'/'} exact component={Home}/>
        </div>
    </Router>

)