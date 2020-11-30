import React from 'react';
import {Link} from "react-router-dom";
import {CITY_DETAIL} from "../../../helpers/appUrls";
import {useFavoriteCities} from "../../../globals/FavoritesContext/FavoritesContext";

export const FavoritesList = () => {
    const {favorites} = useFavoriteCities();

    if(favorites.length === 0) {
        return null;
    }

    return (
        <div>
            {
                favorites.map((cityName: string) => (
                    <div key={cityName}>
                        <span>{cityName}</span>
                        <Link to={CITY_DETAIL(cityName)}>Details</Link>
                    </div>
                ))
            }
        </div>
    )
}
