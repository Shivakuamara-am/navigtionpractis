import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const About = ({navigation}) => {
  return (
    <View>
      <Text>About</Text>
      <Button title="home"onPress={()=>navigation.navigate()}/>
    </View>
  )
}

export default About

const styles = StyleSheet.create({})


// import { Button, StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const About = ({navigation}) => {
//   return (
//     <View>
//       <Text>About</Text>
//       <Button title='Go home'onPress={()=>navigation.navigate("Homescreen")}/>
//     </View>
//   )
// }

// export default About

// const styles = StyleSheet.create({})

