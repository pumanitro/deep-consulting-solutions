import React, {useState} from 'react';
import {useSearchBox} from "./useSearchBox";
import {Spinner} from "../../../components/Spinner/Spinner";
import {CITY_DETAIL} from "../../../helpers/appUrls";
import {Link} from "react-router-dom";

export const SearchBox = () => {
    const [isLoading, searchedCity, searchCity] = useSearchBox()
    const [city, setCity] = useState('');

    return (
        <div>
            <input placeholder="Find city..." value={city} onChange={(e) => setCity(e.target.value)} />
            <button onClick={() => searchCity(city)}> Search </button>
            {
                isLoading && <Spinner />
            }
            {
                searchedCity && (
                    <div>
                        <span>{searchedCity.location.name}</span>
                        <span>{searchedCity.current.temperature}</span>
                        <Link to={CITY_DETAIL(searchedCity.location.name)}>Details</Link>
                    </div>
                )
            }
        </div>
    )
}
