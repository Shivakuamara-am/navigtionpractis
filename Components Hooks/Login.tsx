
import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'


const Login = ({navigation}) => {
  return (
    <View>
      <Text>Login</Text>
      <Button title='home'onPress={()=>navigation.navigate("home")}/>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})


// import { Button, StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const Login = ({navigation}) => {
//   return (
//     <View>
//       <Text>Login</Text>
//       <Button title='Home'onPress={()=>navigation.navigate("Homescreen")}/>
//     </View>
//   )
// }

// export default Login

// const styles = StyleSheet.create({})


