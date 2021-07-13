import React, { Children, createContext, useState } from 'react';

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ Children }) => {
    const [favorites, setFavorites] = useState([]);

    const add = (restaurant) => {
        setFavorites([...favorites, restaurant]);
    };

    const remove = (restaurant) => {
        const newFavorites = favorites.filter(
            (x) => x.placeId !== restaurant.placeId,
        );
    };
    return (
        <FavoritesContextProvider
            value={{
                favorites,
                addToFavorites: add,
                removeFromFavorites: remove,
            }}
        >
            {Children}
        </FavoritesContextProvider>
    );
};
