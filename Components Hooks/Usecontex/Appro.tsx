// Appro.js
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Usercontext } from './Usercontext'; // Import the context
import Mycomponents from './Mycomponents'; // Import the child component

const Appro = () => {
  // Define state with user information
  const [user] = useState({
    name: "Bug Ninja",
    email: "bugninjaemail.com"
  });

  return (
    <Usercontext.Provider value={user}>
      
      <Mycomponents />
    </Usercontext.Provider>
  );
};

export default Appro;

const styles = StyleSheet.create({
  // Define styles here if needed
});
