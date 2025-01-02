import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import React, { useRef, useState } from 'react';

const App = () => {
  const [myNum, setMyNum] = useState(0);

  // Create refs for the two TextInput fields
  const inputOne = useRef();
  const inputTwo = useRef();

  // Function to focus the first input
  const focusInputOne = () => {
    inputOne.current?.focus(); // Focus the first input field
  };

  // Function to focus the second input
  const focusInputTwo = () => {
    inputTwo.current?.focus(); // Focus the second input field
  };

  return (
    <View style={styles.container}>
      <Text>Learn Code Line</Text>

      {/* First TextInput with ref */}
      <TextInput
        ref={inputOne} // Attach the ref to this TextInput
        value={String(myNum)} // Ensure the value is a string for TextInput
        placeholder="Enter the num"
        keyboardType="numeric"
        onChangeText={(index) => setMyNum(index)} // Update state when text changes
        style={styles.input}
      />

      {/* Second TextInput with ref */}
      <TextInput
        ref={inputTwo} // Attach the ref to the second TextInput
        value={String(myNum)} // Same value as first input for consistency
        placeholder="Enter the num second"
        keyboardType="numeric"
        style={styles.input}
      />

      {/* Display current value */}
      <Text>Value is: {myNum}</Text>

      {/* Buttons to focus the inputs */}
      <Button title="Focus Input One" onPress={focusInputOne} />
      <Button title="Focus Input Two" onPress={focusInputTwo} style={{ marginTop: 10 }} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    width: '80%',
    paddingLeft: 10,
  },
});










// import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
// import React, { useRef, useState } from 'react';

// const App = () => {
//   const [myNum, setMyNum] = useState(0);

//   // Create refs for the two TextInput fields
//   const inputOne = useRef();
//   const inputTwo = useRef();

//   // Function to handle click on the first TextInput and increase its width
//   const increaseWidthInputOne = () => {
//     // Update the style of inputOne dynamically
//     inputOne.current.setNativeProps({
//       style: { width: '100%' }, // Set width to 100% or any other width you'd like to increase to
//     });
//   };

//   // Function to focus the second input
//   const focusInputTwo = () => {
//     inputTwo.current?.focus(); // Focus the second input field
//   };

//   return (
//     <View style={styles.container}>
//       <Text>Learn Code Line</Text>

//       {/* First TextInput with ref */}
//       <TextInput
//         ref={inputOne} // Attach the ref to this TextInput
//         value={String(myNum)} // Ensure the value is a string for TextInput
//         placeholder="Enter the num"
//         keyboardType="numeric"
//         onChangeText={(index) => setMyNum(index)} // Update state when text changes
//         style={styles.input}
//         onFocus={increaseWidthInputOne} // Increase width when input is clicked (focused)
//       />

//       {/* Second TextInput with ref */}
//       <TextInput
//         ref={inputTwo} // Attach the ref to the second TextInput
//         value={String(myNum)} // Same value as first input for consistency
//         placeholder="Enter the num second"
//         keyboardType="numeric"
//         style={styles.input}
//       />

//       {/* Display current value */}
//       <Text>Value is: {myNum}</Text>

//       {/* Button to focus the second input */}
//       <Button title="Focus Input Two" onPress={focusInputTwo} style={{ marginTop: 10 }} />
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 20,
//     width: '80%', // Initial width is 80%
//     paddingLeft: 10,
//   },
// });
