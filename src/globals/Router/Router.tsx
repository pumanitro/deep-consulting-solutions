import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import {CityDetail} from "../../pages/CityDetail/CityDetail";
import {Home} from "../../pages/Home/Home";
import React from "react";
import { SearchBox } from "./SearchBox/SearchBox";
import { CITY_DETAIL, HOME } from "../../helpers/appUrls";

export const Router = () => {
    return(
        <BrowserRouter>
            <Link to={HOME}><span>Go home</span></Link>
            <SearchBox />
            <Switch>
                <Route path={CITY_DETAIL(':cityName')}>
                    <CityDetail />
                </Route>
                <Route path={HOME}>
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
