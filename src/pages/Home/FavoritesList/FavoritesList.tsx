import React from 'react';
import {Link} from "react-router-dom";
import {CITY_DETAIL} from "../../../helpers/appUrls";
import {useFavoriteCities} from "../../../globals/FavoritesContext/FavoritesContext";
import {CityList} from "../../../components/CityList/CityList";
import _ from "lodash";

export const FavoritesList = () => {
    const {favorites} = useFavoriteCities();

    if(favorites.length === 0) {
        return null;
    }

    const cityComponents = _.sortBy(favorites, 'location.name').map((cityName: string) => (
        <>
            <span>{cityName}</span>
            <Link to={CITY_DETAIL(cityName)}>Details</Link>
        </>
    ));

    return (
        <div>
            <h5>Your favorite cities</h5>
            <CityList cities={cityComponents} />
        </div>
    )
}
