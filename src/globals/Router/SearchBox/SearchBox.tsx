import React, {useState} from 'react';
import {useSearchBox} from "./useSearchBox";
import {Spinner} from "../../../components/Spinner/Spinner";
import {CITY_DETAIL} from "../../../helpers/appUrls";
import {Link} from "react-router-dom";
import { SearchBoxWrapper } from './SearchBox.s';
import { Button } from '../../../components/Button/Button';

export const SearchBox = () => {
    const [isLoading, searchedCity, searchCity, setSearchedCity] = useSearchBox()
    const [city, setCity] = useState('');

    return (
        <SearchBoxWrapper>
            <input placeholder="Find city..." value={city} onChange={(e) => setCity(e.target.value)} />
            <Button onClick={() => searchCity(city)}> Search </Button>
            {
                isLoading && <Spinner />
            }
            {
                searchedCity && (
                    <div>
                        <span>{searchedCity.location.name}</span>
                        <span>{searchedCity.current.temperature}</span>
                        <Link to={CITY_DETAIL(searchedCity.location.name)} onClick={() => setSearchedCity('')}>Details</Link>
                    </div>
                )
            }
        </SearchBoxWrapper>
    )
}
