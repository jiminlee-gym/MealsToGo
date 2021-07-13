import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

import {
    useFonts as useOswald,
    Oswald_400Regular,
} from '@expo-google-fonts/oswald';

import { theme } from './src/infrastructure/theme/index';
import { RestaurantsContextProvider } from './src/sevices/restaurants/restaurants.context';
import { LocationContextProvider } from './src/sevices/location/location.context';
import { FavoritesContextProvider } from './src/sevices/favorites/favorites.context';
import { Navigation } from './src/infrastructure/navigation';

export default function App() {
    const [oswaldLoaded] = useOswald({
        Oswald_400Regular,
    });
    const [latoLoaded] = useLato({
        Lato_400Regular,
    });

    if (!latoLoaded || !oswaldLoaded) {
        return null;
    }

    return (
        <>
            <ThemeProvider theme={theme}>
                <FavoritesContextProvider>
                    <LocationContextProvider>
                        <RestaurantsContextProvider>
                            <Navigation />
                        </RestaurantsContextProvider>
                    </LocationContextProvider>
                </FavoritesContextProvider>
            </ThemeProvider>
            <ExpoStatusBar style="auto" />
        </>
    );
}
