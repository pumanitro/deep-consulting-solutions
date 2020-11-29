import React from 'react';
import {CountriesProvider} from "./CountriesProvider/CountriesProvider";

export const Home = () => {
    return (
        <CountriesProvider>
            {
                (({topCountries}: any) => {
                    return <div>{JSON.stringify(topCountries)}</div>
                })
            }
        </CountriesProvider>
    );
}
