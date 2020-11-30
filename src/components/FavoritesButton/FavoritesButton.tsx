import React, { FC } from 'react';
import {useLocalStorage} from "../../helpers/useLocalStorage";

type FavoritesButtonPropsType = {
    cityName: string;
}

const FAVORITES_KEY = 'favorites';

export const FavoritesButton: FC<FavoritesButtonPropsType> = ({ cityName }) => {
    const [favorites, setFavorites] = useLocalStorage(FAVORITES_KEY, window.localStorage.getItem(FAVORITES_KEY) || '[]');

    const castedFavorites = JSON.parse(favorites);
    const addToFavorites = () => {
        setFavorites(JSON.stringify([...castedFavorites, cityName]))
    }
    const removeFromFavorites = () => {
        setFavorites(JSON.stringify(castedFavorites.filter((favourite: string) => favourite !== cityName)));
    }
    const hasCity = !!castedFavorites.find((favourite: string) => favourite === cityName);

    if(hasCity) {
        return <button onClick={removeFromFavorites}>[FILLED STAR] Remove from favorites</button>
    }

    return <button onClick={addToFavorites}>[STAR] Add to favorites</button>
}
