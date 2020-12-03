import React from 'react';
import { CityDetailProvider } from './CityDetailProvider/CityDetailProvider';
import {Notes} from "./Notes/Notes";
import {FavoritesButton} from "../../components/FavoritesButton/FavoritesButton";
import {useParams} from "react-router-dom";
import {CityList} from "../../components/CityList/CityList";

// weather_icons: ["https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"]
export const CityDetail = () => {
    let { cityName } = useParams<any>();

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

                const cityComponents = [
                    <><div>Cloud cover:</div> <div>{cloudcover}</div></>,
                    <><div>Feels like: </div><div>{feelslike}</div></>,
                    <><div>Humidity: </div><div>{humidity}</div></>,
                    <><div>Observation time: </div><div>{observation_time}</div></>,
                    <><div>Precip: </div><div>{precip}</div></>,
                    <><div>Pressure: </div><div>{pressure}</div></>,
                    <><div>Temperature: </div><div>{temperature}</div></>,
                    <><div>UV index: </div><div>{uv_index}</div></>,
                    <><div>Visibility: </div><div>{visibility}</div></>,
                    <><div>Description: </div><div>{weather_descriptions}</div></>,
                    <><div>Wind degree: </div><div>{wind_degree}</div></>,
                    <><div>Wind dir: </div><div>{wind_dir}</div></>,
                    <><div>Wind speed: </div><div>{wind_speed}</div></>,
                ];

                return <>
                    <div>
                        <h1>{cityName}</h1>
                        <CityList cities={cityComponents} />
                        <FavoritesButton cityName={cityName}/>
                        <Notes/>
                    </div>
                </>
            }
        }
    </CityDetailProvider>
}
