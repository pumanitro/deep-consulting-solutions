import axios from 'axios';
import React, {FC, useEffect, useState} from 'react';
import { Spinner } from '../../../components/Spinner/Spinner';
import * as WeatherStackService from "../../../services/WeatherStackService";

const COUNTRIES_URL = 'https://public.opendatasoft.com/api/records/1.0/search/?dataset=worldcitiespop&q=&rows=15&sort=population';

export const CountriesProvider: FC<any> = ({children}) => {
    const [topCountries, setTopCountries] = useState<any>();

    useEffect(() => {
        (async () => {
            const response = await axios.get(COUNTRIES_URL);
            const topCountryNames = response.data.records.map((record: any) => record.fields.accentcity)
            const resp = await WeatherStackService.getCitiesWeather(topCountryNames);
            setTopCountries(resp);
        })();
    }, []);

    if(!topCountries) {
        return <Spinner />
    }

    return children({topCountries});

}
