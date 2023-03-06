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
      <Detail developerName="Developer Name: Shrey Patel" framework="Working Framework: React-Native" imgSrc={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }} />
      <Detail developerName="Developer Name: Shabbir Pathan" framework="Working Framework: Angular Developer" />
    </View>
  )
};

export default App;