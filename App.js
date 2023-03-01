import React, { useState } from "react";
import {View, Text, TextInput, Button} from "react-native";

function App ()  {
  const [name, setName] = useState();
  return(
    <View style={{marginHorizontal:20}}>
      <Text> Hello </Text> 
      <Text>Type Your Name: {name} </Text>
     <TextInput style={{borderWidth:2, borderColor:'blue'}} placeholder="name" value={name} onChangeText={(text)=>setName(text)}/>
     <Button title="Clear Input" onPress={()=>setName()}/>
    </View>
  )}

export default App;