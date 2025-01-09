import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons
import React from 'react';
import Home from './Home';
import Offer from './Offer';
import Myorder from './Myorder';
import Translition from './Translition';
import Account from './Account';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            position: 'absolute', 
            bottom: 0, 
            width: '100%', 
          },
        }}
      >
        {/* Home Tab with Icon */}
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: true, 
            headerTitle: 'Hi Shiva', 
            headerStyle: {
              backgroundColor: '#f8f8f8', 
              height: 60, 
            },
            headerTitleStyle: {
              fontWeight: 'bold', 
              fontSize: 20, 
            },
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={30} /> // Add Icon here
            ),
          }}
        />
        
        {/* Myorder Tab with Icon */}
        <Tab.Screen
          name="Myorder"
          component={Myorder}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="shopping-basket" color={color} size={30} /> // Add Icon for Myorder
            ),
          }}
        />
        
        {/* Translition Tab with Icon */}
        <Tab.Screen
          name="Translition"
          component={Translition}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="language" color={color} size={30} /> // Add Icon for Translition
            ),
          }}
        />
        
        {/* Offer Tab with Icon */}
        <Tab.Screen
          name="Offer"
          component={Offer}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="gift" color={color} size={30} /> // Add Icon for Offer
            ),
          }}
        />
        
        {/* Account Tab with Icon */}
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="user" color={color} size={30} /> // Add Icon for Account
            ),
          }}
        />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Tabs;

const styles = StyleSheet.create({});
