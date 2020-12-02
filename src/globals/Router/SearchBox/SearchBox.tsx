import React, {useState} from 'react';
import {useSearchBox} from "./useSearchBox";
import {Spinner} from "../../../components/Spinner/Spinner";
import {CITY_DETAIL} from "../../../helpers/appUrls";
import {Link} from "react-router-dom";
import {CenteredSpinnerWrapper, ResultBox, SearchBoxWrapper, StyledInput } from './SearchBox.s';
import { Button } from '../../../components/Button/Button';

export const SearchBox = () => {
    const [isLoading, searchedCity, searchCity, setSearchedCity] = useSearchBox()
    const [city, setCity] = useState('');

    const onSearchClick = () => {
        setSearchedCity('');
        searchCity(city);
    }

    return (
        <SearchBoxWrapper>
            <StyledInput placeholder="Find city..." value={city} onChange={(e) => setCity(e.target.value)} />
            <Button onClick={onSearchClick}> Search </Button>
            {
                isLoading && <CenteredSpinnerWrapper><Spinner /></CenteredSpinnerWrapper>
            }
            {
                searchedCity && (
                    <ResultBox>
                        <span>{searchedCity.location.name} {searchedCity.current.temperature}°C</span>
                        <Link to={CITY_DETAIL(searchedCity.location.name)} onClick={() => setSearchedCity('')}>Details</Link>
                    </ResultBox>
                )
            }
        </SearchBoxWrapper>
    )
}
