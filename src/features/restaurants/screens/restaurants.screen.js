import React, { useContext, useState } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { ActivityIndicator, Colors } from 'react-native-paper';

import { Search } from '../components/search.components';
import { RestaurantInfoCard } from '../components/restaurant-info-card';
import { Spacer } from '../../../components/spacer/spacer.component';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { RestaurantsContext } from '../../../sevices/restaurants/restaurants.context';
import { FavoritesContext } from '../../../sevices/favorites/favorites.context';
import { FavoritesBar } from '../../../components/favorites/favorites-bar.component';

const SearchContainer = styled(View)`
    background-color: ${(props) => props.theme.colors.bg.primary};
    padding: ${(props) => props.theme.space[3]};
`;
const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,
    },
})``;
export const RestaurantsScreen = ({ navigation }) => {
    const { isLoading, restaurants } = useContext(RestaurantsContext);
    const { favorites } = useContext(FavoritesContext);
    const [isToggled, setIsToggled] = useState(false);
    return (
        <SafeArea>
            {isLoading && (
                <View style={{ position: 'absolute', top: '50%', left: '50%' }}>
                    <ActivityIndicator size={50} animating={true} color={Colors.blue800} style={{ marginLeft: -25 }} />
                </View>
            )}
            <SearchContainer>
                <Search isFavoritesToggled={isToggled} onFavoritesToggle={() => setIsToggled(!isToggled)} />
                {isToggled && <FavoritesBar favorites={favorites} onNavigate={navigation.navigate} />}
            </SearchContainer>
            <RestaurantList
                data={restaurants}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('RestaurantDetail', {
                                restaurant: item,
                            })
                        }
                    >
                        <Spacer position="bottom" size="large">
                            <RestaurantInfoCard restaurant={item} />
                        </Spacer>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.name}
            />
        </SafeArea>
    );
};
