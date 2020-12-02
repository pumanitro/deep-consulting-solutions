import axios from 'axios';
import React, {FC, useEffect, useState} from 'react';
import { Spinner } from '../../../components/Spinner/Spinner';
import * as WeatherStackService from "../../../services/WeatherStackService";
import {getCachedRequest} from "../../../helpers/getCachedRequest";
import { GET_TOP_COUNTRIES } from '../../../helpers/cachedKeys';

const COUNTRIES_URL = 'https://public.opendatasoft.com/api/records/1.0/search/?dataset=worldcitiespop&q=&rows=15&sort=population';

export const CountriesProvider: FC<any> = ({children}) => {
    const [topCities, setTopCities] = useState<any>();

    useEffect(() => {
        (async () => {
            const response = await getCachedRequest(GET_TOP_COUNTRIES, axios.get(COUNTRIES_URL));
            const topCitiesNames = response.data.records.map((record: any) => record.fields.city)
            const resp = await WeatherStackService.getCitiesWeather(topCitiesNames);
            setTopCities(resp);
        })();
    }, []);

    if(!topCities) {
        return <Spinner />
    }

    return children({topCities});

}
