import { StyleSheet, View } from 'react-native';
import React from 'react';
import Tabs from './Components Hooks/Screeens/Tabs';

const App = () => {
  return (
    <View style={styles.container}>
      <Tabs />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure the View takes up the full screen
  },
});
