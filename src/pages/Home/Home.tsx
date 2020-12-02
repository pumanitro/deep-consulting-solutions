import React, {FC, useState} from 'react';
import {CountriesProvider} from "./CountriesProvider/CountriesProvider";
import _ from 'lodash';
import {Link} from "react-router-dom";
import {CITY_DETAIL} from "../../helpers/appUrls";
import {FavoritesList} from "./FavoritesList/FavoritesList";
import { CityList } from '../../components/CityList/CityList';
import { StyledAnchor } from './Home.s';

type CitiesPropsType = {
    topCities: any,
}

export const Cities : FC<CitiesPropsType> = ({topCities}) => {

    const [cities, setCities] = useState(topCities);

    const removeCountry = (name: string) => {
        setCities(cities.filter((country: any) => country.location.name !== name));
    }

    const cityComponents = _.sortBy(cities, 'location.name').map((city: any, index: number) => <>
        <span>{index + 1}. {city.location.name} {city.current.temperature}°C</span>
        <div>
            <Link to={CITY_DETAIL(city.location.name)}>Details</Link>
            <StyledAnchor onClick={() => removeCountry(city.location.name)}>Remove</StyledAnchor>
        </div>
    </>)

    return (
        <>
            <FavoritesList />
            <h5>Top 15 cities by population</h5>
            <CityList cities={cityComponents} />
        </>
    );
}

export const Home = () => (
    <CountriesProvider>
        {
            (({topCities}: any) => <Cities topCities={topCities} />)
        }
    </CountriesProvider>
);
