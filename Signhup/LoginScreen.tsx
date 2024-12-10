








// import React, { useState } from 'react';
// import { View, TextInput, Button, Text, StyleSheet,Alert } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const LoginScreen = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigation = useNavigation(); 

//   const handleLogin = () => {
//     // For the purpose of this example, use a simple condition for login
//     if (email === 'test@example.com' && password === 'password') {
//       Alert.alert('Login successful');
//       // Navigate to the home screen or dashboard if login succeeds
//     } else {
//       Alert.alert('email password in wrong');
//     }
//   };

//   // This function navigates to the CreateAccount screen
//   const navigateToCreateAccount = () => {
//     navigation.navigate('CreateAccount'); 
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Login</Text>
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
//       <Button title="Login" onPress={handleLogin} />
//       <Text style={styles.link} onPress={navigateToCreateAccount}>
//         Don't have an account? Create one
//       </Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { 
//     flex: 1,
//      justifyContent: 'center',
//       alignItems: 'center' },
//   heading: {
//      fontSize: 24,
//      marginBottom: 20 },
//   input: { 
//     width: 250,
//      height: 40,
//       borderColor: 'gray', 
//       borderWidth: 1,
//        marginBottom: 15,
//        paddingHorizontal: 10
//      },
//   link: {
//      marginTop: 20,
//       color: 'blue'
//      },
// });

// export default LoginScreen;
