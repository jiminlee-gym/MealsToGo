import React, { useContext } from 'react';

import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import { FavoritesContext } from '../../sevices/favorites/favorites.context';

const FavoriteButton = styled(TouchableOpacity)`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 64px;
    z-index: 9;
`;

export const Favorite = () => {
    const { favorites, addToFavorites, removeFromFavorites } =
        useContext(FavoritesContext);

    return (
        <FavoriteButton>
            <AntDesign name="heart" size={24} color="red" />
        </FavoriteButton>
    );
};