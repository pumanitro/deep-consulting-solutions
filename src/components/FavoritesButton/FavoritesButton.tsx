import React, { FC } from 'react';
import {useFavoriteCities} from "../../globals/FavoritesContext/FavoritesContext";
import { StyledButton } from './FavoritesButton.s';

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
        return <StyledButton onClick={removeFromFavorites}>Remove from favorites</StyledButton>
    }

    return <StyledButton onClick={addToFavorites}>Add to favorites</StyledButton>
}
