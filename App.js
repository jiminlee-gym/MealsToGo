import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import { Search } from './src/components/Search';
import { List } from './src/components/List';

export default function App() {
    return (
        <>
            <SafeAreaView style={styles.container}>
                <Search />
                <List />
            </SafeAreaView>
            <ExpoStatusBar style="auto" />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: StatusBar.currentHeight,
    },
});
