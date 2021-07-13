import React, { useContext } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { Search } from '../components/search.components';
import { RestaurantInfoCard } from '../components/restaurant-info-card';
import styled from 'styled-components/native';
import { Spacer } from '../../../components/spacer/spacer.component';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { RestaurantsContext } from '../../../sevices/restaurants/restaurants.context';
import { ActivityIndicator, Colors } from 'react-native-paper';

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
    const { isLoading, error, restaurants } = useContext(RestaurantsContext);
    //console.log(restaurantContext);
    return (
        <SafeArea>
            {isLoading && (
                <View style={{ position: 'absolute', top: '50%', left: '50%' }}>
                    <ActivityIndicator
                        size={50}
                        animating={true}
                        color={Colors.blue800}
                        style={{ marginLeft: -25 }}
                    />
                </View>
            )}
            <SearchContainer>
                <Search />
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
