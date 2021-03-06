import {Link, Route, Switch} from "react-router-dom";
import {CityDetail} from "../../pages/CityDetail/CityDetail";
import {Home} from "../../pages/Home/Home";
import React from "react";
import { SearchBox } from "./SearchBox/SearchBox";
import { CITY_DETAIL, HOME } from "../../helpers/appUrls";
import { Icon } from "../../components/Icon/Icon";

import HomeSvg from '../../assets/home.svg';
import { HomeNavigationWrapper } from "./Router.s";

export const Router = () => {
    return(
        <>
            <Link to={HOME}>
                <HomeNavigationWrapper>
                    <Icon svgLink={HomeSvg} />
                    <span>Home</span>
                </HomeNavigationWrapper>
            </Link>
            <SearchBox />
            <Switch>
                <Route path={CITY_DETAIL(':cityName')}>
                    <CityDetail />
                </Route>
                <Route path={HOME}>
                    <Home />
                </Route>
            </Switch>
        </>
    )
}
