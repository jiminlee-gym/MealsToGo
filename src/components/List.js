import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export const List = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>list</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  title: {
    padding: 10,
    fontSize: 20,
  },
});
