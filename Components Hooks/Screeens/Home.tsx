import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';  // Import the hook for navigation
import Passanger from '../Mainscreen.tsx/Passanger';
import Goods from '../Mainscreen.tsx/Goods';
import SevenSetaresr from '../Vechiles.tsx/SevenSetaresr'; // Ensure the path is correct

const Home = () => {
  const navigation = useNavigation();  // Get the navigation object from the hook

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.mainContainer}>
       
        <View style={styles.circle}>
          <Text style={styles.text}>Please enable location service</Text>
        </View>

        <View style={styles.TextConatiner}>
          <Text style={styles.Text}>What would you like to Book now?</Text>
        </View>

        <View style={styles.rowContainer}>
          <View style={styles.Passanger}>
            <Passanger />
          </View>

          <View style={styles.Goods}>
            <Goods />
          </View>
        </View>

        {/* Add TouchableOpacity to detect tap and navigate */}
        <TouchableOpacity 
          style={styles.sevenseaters}
          onPress={() => navigation.navigate('SevenSetaresr')}  // Navigate to Sevedetailgg screen
        >
          <SevenSetaresr />  {/* This is the component you want to display */}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 16,
  },
  
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  circle: {
    marginTop: 8,
    width: 410,
    height: 43,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#d1d5db',
  },

  text: {
    fontSize: 16,
    color: '#333333',
    fontWeight: 'bold',
    marginRight: 80,
  },

  TextConatiner: {
    marginTop: 10,
    marginBottom: 20,
  },

  Text: {
    fontSize: 16,
    color: '#333333',
    fontWeight: '600',
    marginRight: 70,
  },

  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 1,
    marginLeft: 170,
  },

  Passanger: {
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },

  Goods: {
    flex: 1,
    marginLeft: 30,
    alignItems: 'center',
  },

  image: {
    width: 30,
    height: 30,
  },

  sevenseaters: {
    marginTop: 8,
    marginRight: 10,
  },
});
