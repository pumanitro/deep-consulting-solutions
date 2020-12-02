import React, {FC, useEffect, useState} from 'react';
import * as WeatherStackService from "../../../services/WeatherStackService";
import {Spinner} from "../../../components/Spinner/Spinner";
import {useParams} from "react-router-dom";

export const CityDetailProvider: FC<any> = ({children}) => {
    let { cityName } = useParams<any>();
    const [weatherInfo, setWeatherInfo] = useState<any>();

    useEffect(() => {
        (async () => {
            const resp = await WeatherStackService.getCityWeather(cityName);
            setWeatherInfo(resp);
        })();
    }, [cityName]);

    if(!weatherInfo) {
        return <Spinner />
    }

    return children({weatherInfo});
}
