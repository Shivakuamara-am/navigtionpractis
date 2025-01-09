import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

// Make sure your image path is correct relative to your project
import Seven from "../Assets/Seven.png"; // Correct local path if this is your image

const SevenSetaresr = () => {
  return (
    <View style={styles.circle}>
     
      <Text style={styles.text}>7 Seater</Text>
      <Text style={styles.vechiledeiles}>For 6 Passengers, efficient for long travel</Text>
      <Text style={styles.icons}>{'>'}</Text>
      <Image
                source={require('C:/Users/User/Desktop/vectror/assets/Auto.png')}
                style={styles.image}
              />
    </View>
  );
};

export default SevenSetaresr;

const styles = StyleSheet.create({
  circle: {
    marginLeft: 10,
    marginTop: 8,
    width: 380,
    height: 90,
    backgroundColor: '#ffffff',
    borderRadius: 27,
    justifyContent: 'center',
    alignItems: 'flex-start', // Align children to the left
    padding: 10,
    borderWidth: 1,
    borderColor: '#d1d5db',
    position: 'relative',  // Ensure that the image can be positioned relative to this container
  },

  text: {
    fontSize: 18,
    color: '#333333',
    fontWeight: 'bold',
    marginBottom: 2,
  },

  vechiledeiles: {
    fontSize: 14, 
    color: '#666666',
    marginBottom: 10,  
  },

  icons: {
    marginTop:9,
    fontSize: 25,  
    position: 'absolute',  
    right: 10,  
    top: '50%',     
    transform: [{ translateY: -15 }],
  },

  image: {
    marginRight:30,
    width: 50,  
    height: 40, 
    position: 'absolute',  
    right: 10,
    bottom: 20, 
  },
});
