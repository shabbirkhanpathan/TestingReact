import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const Detail = (props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={props.imgSrc} />
     <View style={{flexDirection:'column'}}>
     <Text style={styles.textName}>{props.developerName}</Text>
      <Text style={styles.subName}>{props.framework}</Text>
     </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    padding:10
  },
  img:{
    width:50,
    height:50,
    marginRight:10
  },
  textName:{
    fontWeight:'bold',
    fontSize: 20,
    flexDirection:'column', 
  },
  subName:{
    flexDirection:'column'
  }
})
export default Detail;