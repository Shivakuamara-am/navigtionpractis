// Mycomponents.js
import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Usercontext } from './Usercontext'; // Import the context

const Mycomponents = () => {
  // Use useContext to access the user context
  const user = useContext(Usercontext);

  return (
    <View style={styles.container}>
      {/* Display user information */}
      <Text>Name: {user.name}</Text>
      <Text>Email: {user.email}</Text>
    </View>
  );
};

export default Mycomponents;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
