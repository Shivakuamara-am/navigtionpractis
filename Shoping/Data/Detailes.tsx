
import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const Detailes = ({ route }) => {
  // Destructure product from route.params
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.rating}>Rating: {product.rating}</Text>
      {/* You can also display the image or description if required */}
      <Image source={{ uri: product.image }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  rating: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
});

export default Detailes;
