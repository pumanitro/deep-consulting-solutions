import React from 'react';
import { CityDetailProvider } from './CityDetailProvider/CityDetailProvider';
import {Notes} from "./Notes/Notes";

// weather_icons: ["https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"]
export const CityDetail = () => {
    return <CityDetailProvider>
        {
            ({weatherInfo: {
                current: {
                    cloudcover,
                    feelslike,
                    humidity,
                    observation_time,
                    precip,
                    pressure,
                    temperature,
                    uv_index,
                    visibility,
                    weather_descriptions,
                    wind_degree,
                    wind_dir,
                    wind_speed,
                }
            }}: any) => {
                return <>
                    <div>
                        <div>Cloud cover:{cloudcover}</div>
                        <div>Feels like: {feelslike}</div>
                        <div>Humidity: {humidity}</div>
                        <div>Observation time: {observation_time}</div>
                        <div>Precip: {precip}</div>
                        <div>Pressure: {pressure}</div>
                        <div>Temperature: {temperature}</div>
                        <div>UV index: {uv_index}</div>
                        <div>Visibility: {visibility}</div>
                        <div>Description: {weather_descriptions}</div>
                        <div>Wind degree: {wind_degree}</div>
                        <div>Wind dir: {wind_dir}</div>
                        <div>Wind speed: {wind_speed}</div>
                        <Notes/>
                    </div>
                </>
            }
        }
    </CityDetailProvider>
}
