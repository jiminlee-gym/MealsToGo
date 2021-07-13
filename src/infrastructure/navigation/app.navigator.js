import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native';

import { SafeArea } from '../../components/utility/safe-area.component';
import { RestaurantsNavigator } from './restaurants.navigator';
import { MapScreen } from '../../features/map/screens/map.screen';
const Tab = createBottomTabNavigator();

const TAB_ICON = {
    Restaurant: ['ios-restaurant', 'ios-restaurant-outline'],
    Maps: ['ios-map', 'ios-map-outline'],
    Settings: ['ios-list', 'ios-list-outline'],
};

const tabBarIcon =
    (iconName) =>
    ({ focused, size, color }) =>
        (
            <Ionicons
                name={focused ? iconName[0] : iconName[1]}
                size={size}
                color={color}
            />
        );

const screenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    return {
        tabBarIcon: tabBarIcon(iconName),
    };
};

const Setting = () => {
    return (
        <SafeArea>
            <Text>Setting</Text>
        </SafeArea>
    );
};

export const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={screenOptions}
                tabBarOptions={{
                    activeTintColor: 'green',
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen
                    name="Restaurant"
                    component={RestaurantsNavigator}
                />
                <Tab.Screen name="Maps" component={MapScreen} />
                <Tab.Screen name="Settings" component={Setting} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};
