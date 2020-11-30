import { createCtx } from '../../helpers/Context';
import React, {FC} from "react";
import {FAVORITES_LOCAL_STORAGE_KEY} from "../../helpers/consts";
import { useLocalStorage } from '../../helpers/useLocalStorage';

type FavoritesContextType = {
    favorites: string[],
    setFavorites: (newFavorites: string[]) => void,
}

const [useFavoriteCities, ContextProvider] = createCtx<FavoritesContextType>();

const FavoriteCitiesContextProvider: FC<any> = ({children}) => {
    const [favorites, setFavorites] = useLocalStorage(FAVORITES_LOCAL_STORAGE_KEY, window.localStorage.getItem(FAVORITES_LOCAL_STORAGE_KEY) || '[]');

    return <ContextProvider value={{
            favorites: JSON.parse(favorites),
            setFavorites: (newFavorites: string[]) => setFavorites(JSON.stringify(newFavorites)),
        }}>
        {children}
    </ContextProvider>
}

export { useFavoriteCities, FavoriteCitiesContextProvider };
