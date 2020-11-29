import React, {useEffect} from 'react';
import * as WeatherStackService from '../../services/WeatherStackService';
import {CountriesProvider} from "./CountriesProvider/CountriesProvider";

export const Home = () => {

    useEffect(() => {
        (async () => {
            const resp = await WeatherStackService.getCityWeather('New York');
            console.log(resp);
        })();
    }, [])

    return (
        <CountriesProvider>
            {
                (({topCountries}: any) => {
                    return  (<>
                        {
                            topCountries.map((country: any) => <div key={country.location.name}>
                                <span>{country.location.name}</span>
                                <span>{country.current.temperature}</span>
                            </div>)
                        }
                        </>)
                })
            }
        </CountriesProvider>
    );
}
