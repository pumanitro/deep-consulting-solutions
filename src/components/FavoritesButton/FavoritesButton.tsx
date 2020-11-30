import React, { FC } from 'react';
import {useFavoriteCities} from "../../globals/FavoritesContext/FavoritesContext";

type FavoritesButtonPropsType = {
    cityName: string;
}

export const FavoritesButton: FC<FavoritesButtonPropsType> = ({ cityName }) => {
    const {favorites, setFavorites} = useFavoriteCities();

    const addToFavorites = () => {
        setFavorites([...favorites, cityName])
    }
    const removeFromFavorites = () => {
        setFavorites(favorites.filter((favourite: string) => favourite !== cityName));
    }
    const hasCity = !!favorites.find((favourite: string) => favourite === cityName);

    if(hasCity) {
        return <button onClick={removeFromFavorites}>[FILLED STAR] Remove from favorites</button>
    }

    return <button onClick={addToFavorites}>[STAR] Add to favorites</button>
}
