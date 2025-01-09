import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import React, { useState } from 'react';

const Passanger = () => {
  const [isHovered, setIsHovered] = useState(false); 

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.circle,
          { borderColor: isHovered ? 'black' : '#d1d5db' }, 
        ]}
        onPressIn={() => setIsHovered(true)} 
        onPressOut={() => setIsHovered(false)} 
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)} 
      >
        <Text style={styles.text}>Passenger Vechile</Text>
        <Image
          source={require('C:/Users/User/Desktop/vectror/assets/Auto.png')}
          style={styles.image}
        />
        
      </TouchableOpacity>
    </View>
  );
};

export default Passanger;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  image: {
    width: 70,  // Set the width of the image
    height: 70, // Set the height of the image
    marginTop: 12,
  },
  circle: {
    marginRight: 195,
    marginTop: 13,
    width: 170,
    height: 120,
    backgroundColor: '#ffffff',
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#d1d5db', // Initial border color
  },
  text:{
    fontWeight:600,
    fontSize:16,
  },
});
