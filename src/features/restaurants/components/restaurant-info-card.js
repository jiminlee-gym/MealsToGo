import React from 'react';

import { SvgXml } from 'react-native-svg';

import star from '../../../../assets/star';
import open from '../../../../assets/open';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';
import {
    RestaurantCard,
    RestaurantCardCover,
    Info,
    Address,
    Rating,
    Open,
    Wrapping,
    Icon,
} from './restaurant-info-card.styles';
import { Favorite } from '../../../components/favorites/favorite.component';
export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = 'Some Restaurant',
        icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
        photos = [
            'https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/00/a0000881/img/basic/a0000881_main.jpg',
        ],
        address = 'This is the location',
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = true,
        placeId,
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.floor(rating)));
    return (
        <RestaurantCard elevation={10}>
            <Favorite restaurant={restaurant} />
            <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
            <Info>
                <Text variant="label">{name}</Text>
                <Wrapping>
                    <Rating>
                        {ratingArray.map((_, i) => (
                            <SvgXml
                                xml={star}
                                width={20}
                                height={20}
                                key={`star-${placeId}-${i}`}
                            />
                        ))}
                    </Rating>
                    <Open>
                        {isClosedTemporarily && (
                            <Text variant="error">CLOSED TEMPORARILY</Text>
                        )}
                        <Spacer position="left" size="large">
                            {isOpenNow && (
                                <SvgXml xml={open} width={20} height={20} />
                            )}
                        </Spacer>
                    </Open>
                    <Spacer position="left" size="large">
                        <Icon source={{ uri: icon }} />
                    </Spacer>
                </Wrapping>

                <Address>{address}</Address>
            </Info>
        </RestaurantCard>
    );
};
