import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Productitem from '../Productitem'
import { PRODUCTS_LIST } from './constan.D'
import Separter from './Separter'


const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <FlatList
      data={PRODUCTS_LIST}
      keyExtractor={item=>item.id}
      ItemSeparatorComponent={Separter}
      renderItem={({item})=>(
        <Pressable onPress={()=>{
          navigation.navigate('Detailes',{
           product:item
          })
        }}>
          <Productitem product={item}/>
        </Pressable>
      )}/>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 12,
    backgroundColor: '#FFFFFF',
},
})