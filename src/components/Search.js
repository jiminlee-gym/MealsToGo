import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Searchbar } from "react-native-paper";

export const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View style={styles.container}>
      <View style={styles.searchView}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //backgroundColor: "green",
    //alignItems: 'center',
    justifyContent: "center",
  },
  searchView: {
    padding: 10,
  },
  title: {
    padding: 10,
    fontSize: 20,
  },
});
