import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Searchbar } from 'react-native-paper';

export const Search = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = (query) => setSearchQuery(query);

    return (
        <View style={styles.searchView}>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    searchView: {
        padding: 10,
        justifyContent: 'center',
    },
    title: {
        padding: 10,
        fontSize: 20,
    },
});
