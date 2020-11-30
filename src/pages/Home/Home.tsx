import React, {FC, useState} from 'react';
import {CountriesProvider} from "./CountriesProvider/CountriesProvider";
import _ from 'lodash';
import {Link} from "react-router-dom";
import {CITY_DETAIL} from "../../helpers/appUrls";
import {FavoritesList} from "./FavoritesList/FavoritesList";

type CountriesPropsType = {
    topCountries: any,
}

export const Countries : FC<CountriesPropsType> = ({topCountries}) => {

    const [countries, setCountries] = useState(topCountries);

    const removeCountry = (name: string) => {
        setCountries(countries.filter((country: any) => country.location.name !== name));
    }

    return (
        <>
            <FavoritesList />
            {
                _.sortBy(countries, 'location.name').map((country: any) => <div key={country.location.name}>
                    <Link to={CITY_DETAIL(country.location.name)}><span>{country.location.name}</span></Link>
                    <span>{country.current.temperature}</span>
                    <button onClick={() => removeCountry(country.location.name)}>Remove</button>
                </div>)
            }
        </>
    );
}

export const Home = () => (
    <CountriesProvider>
        {
            (({topCountries}: any) => <Countries topCountries={topCountries} />)
        }
    </CountriesProvider>
);
