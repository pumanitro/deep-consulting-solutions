import React, {FC, useEffect, useState} from 'react';
import * as WeatherStackService from '../../services/WeatherStackService';
import {CountriesProvider} from "./CountriesProvider/CountriesProvider";
import _ from 'lodash';

type CountriesPropsType = {
    topCountries: any,
}

export const Countries : FC<CountriesPropsType> = ({topCountries}) => {

    const [countries, setCountries] = useState(topCountries);

    useEffect(() => {
        (async () => {
            const resp = await WeatherStackService.getCityWeather('New York');
            console.log(resp);
        })();
    }, [])

    const removeCountry = (name: string) => {
        setCountries(countries.filter((country: any) => country.location.name !== name));
    }

    return (
        <>
            {
                _.sortBy(countries, 'location.name').map((country: any) => <div key={country.location.name}>
                    <span>{country.location.name}</span>
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
