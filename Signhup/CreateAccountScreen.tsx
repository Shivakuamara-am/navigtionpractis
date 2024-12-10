















// import React, { useState } from 'react';
// import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native'; 

// const CreateAccountScreen = () => {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const navigation = useNavigation(); 

//   const handleCreateAccount = () => {
//     if (password !== confirmPassword) {
//       console.log('Passwords do not match');
//       return;
//     }
//     console.log('Account created successfully');
//     // Navigate to the login screen after successful account creation
//     navigation.navigate('Login');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Create Account</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         secureTextEntry
//         value={password}
//         onChangeText={setPassword}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Confirm Password"
//         secureTextEntry
//         value={confirmPassword}
//         onChangeText={setConfirmPassword}
//       />
//       <Button title="Create Account" onPress={handleCreateAccount} />
//       <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
//         Already have an account? Log in
//       </Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, 
//     justifyContent: 'center', 
//     alignItems: 'center' },
//   heading: { 
//     fontSize: 24,
//      marginBottom: 20 },
//   input: {
//      width: 250, 
//      height: 40,
//       borderColor: 'gray', 
//       borderWidth: 1, 
//       marginBottom: 15,
//        paddingHorizontal: 10 },
//   link: { 
//     marginTop: 20, 
//     color: 'blue' },
// });

// export default CreateAccountScreen;
