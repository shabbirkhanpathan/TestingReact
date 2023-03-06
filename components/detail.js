import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const Detail = (props) => {
  return (
    <View>
      <Image style={styles.img} source={props.imgSrc} />
      <Text style={styles.textName}>{props.developerName}</Text>
      <Text>{props.framework}</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  img:{
    width:50,
    height:50
  },
  textName:{
    fontWeight:'bold',
    fontSize: 20
  }
})
export default Detail;