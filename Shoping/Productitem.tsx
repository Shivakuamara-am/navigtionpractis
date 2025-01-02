import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Productitem = ({product}) => {
  return (
    <View>
    <Text>{product.name}</Text>
    <Image source={{uri:product.imageUrl}} style={styles.image}/>
    <Text>({product.ratingCount.toLocaleString()})</Text>
    </View>
  )
}

export default Productitem

const styles = StyleSheet.create({
  container: {
    margin: 8,
    flexDirection: 'row',
  },
  rowContainer: {
    flexDirection: 'row',
  },
  image: {
    width: 90,
    height: 150,
    resizeMode: 'contain',

    marginRight: 12,
  },
  name: {
    marginBottom: 4,

    fontSize: 15,
    fontWeight: '500',
  },
  ratingContainer: {
    marginBottom: 8,
  },
  priceContainer: {
    marginBottom: 12,
  },
  rating: {
    borderRadius: 4,
    paddingHorizontal: 8,
    justifyContent: 'center',
    backgroundColor: '#008c00',

    marginRight: 4,
  },
  ratingText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  ratingCount: {
    color: '#878787',
  },
  originalPrice: {
    fontSize: 18,
    marginRight: 4,
    fontWeight: '600',

    color: 'rgba(0, 0, 0, 0.5)',
    textDecorationLine: 'line-through',
  },
  discountPrice: {
    fontSize: 18,
    marginRight: 4,
    fontWeight: '600',

    color: '#000000',
  },
  offerPercentage: {
    fontSize: 17,
    fontWeight: '600',
    color: '#4bb550',
  },
})

    