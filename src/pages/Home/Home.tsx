import React, {FC, useState} from 'react';
import {CountriesProvider} from "./CountriesProvider/CountriesProvider";
import _ from 'lodash';
import {Link} from "react-router-dom";
import {CITY_DETAIL} from "../../helpers/appUrls";
import {FavoritesList} from "./FavoritesList/FavoritesList";

type CitiesPropsType = {
    topCities: any,
}

export const Cities : FC<CitiesPropsType> = ({topCities}) => {

    const [cities, setCities] = useState(topCities);

    const removeCountry = (name: string) => {
        setCities(cities.filter((country: any) => country.location.name !== name));
    }

    return (
        <>
            <FavoritesList />
            {
                _.sortBy(cities, 'location.name').map((city: any) => <div key={city.location.name}>
                    <Link to={CITY_DETAIL(city.location.name)}><span>{city.location.name}</span></Link>
                    <span>{city.current.temperature}</span>
                    <button onClick={() => removeCountry(city.location.name)}>Remove</button>
                </div>)
            }
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
