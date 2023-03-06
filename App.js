import React from "react";
import { Text, View} from "react-native";
import Detail from "./components/detail";


const App = () => {
  // const users=[
  //   {
  //     id:1,
  //     name:"John",
  //   },
  //   {
  //     id:2,
  //     name:"Sara",
  //   },
  //   {
  //     id:3,
  //     name:"Remo",
  //   },
  //   {
  //     id:4,
  //     name:"Ruen",r
  //   },
  //   {
  //     id:5,
  //     name:"doe",
  //   }
  // ]
  // return(
  //   <SafeAreaView style={{paddingHorizontal:20}}>  
  //     <Text style={{fontSize:40, fontWeight:"bold", color:"#000", marginBottom:40, marginTop:25}}>User Static List</Text>
  //     <FlatList 
  //     data={users}
  //     renderItem={({item})=><Text style={{fontSize:20, fontWeight:"bold", color:"#222"}}>{item.id}  {item.name}</Text>}
  //     keyExtractor={item=>item.id}

  //     />
  //   </SafeAreaView>
  // )
  return(
    <View>
      <Detail developerName="Developer Name: John Doe" framework="Working Framework: React-Native" imgSrc={{
          uri: 'https://cdn-icons-png.flaticon.com/512/4140/4140048.png',
        }} />
      <Detail developerName="Developer Name: Martin Adam" framework="Working Framework: Angular Developer" imgSrc={{
          uri: 'https://cdn-icons-png.flaticon.com/512/236/236831.png',
        }} />
    </View>
  )
};

export default App;