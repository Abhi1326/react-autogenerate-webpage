/**
 * Created by Counter on 7/2/2017.
 */
import React from "react";
import {shallow} from "enzyme";
import {Route} from "react-router";
import Routes from "./routes";
import Home from "./components/Home/home";



it('renders correct routes', () => {
    const wrapper = shallow(<Routes />);
    const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
        const routeProps = route.props();
        pathMap[routeProps.path] = routeProps.component;
        return pathMap;
    }, {});

    expect(pathMap['/']).toBe(Home);
});