import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, Button, StyleSheet, View } from "react-native";


function App() {
  const [name, setName] = useState();
  const [pass, setPass] = useState();
  const [email, setEmail] = useState();
  const [display, setDisplay] = useState(false);

  const resetFormData = () => {
    setDisplay(false);
    setName("");
    setPass("");
    setEmail("");
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Form Validation</Text>
      <TextInput style={styles.textInput} placeholder="your name" onChangeText={(text) => setName(text)} value={name} />
      <TextInput style={styles.textInput} placeholder="your Password" onChangeText={(text) => setPass(text)} secureTextEntry={true} value={pass} />
      <TextInput style={styles.textInput} placeholder="your Email" onChangeText={(text) => setEmail(text)} value={email} />
      <View style={{ marginBottom: 10,}}>
        <Button title="Display Details" color={"green"} onPress={() => setDisplay(true)} />
      </View>

      <Button title="Clear Details" color={"blue"} onPress={() => resetFormData()} />
      { 
        display ?
          <View>
            <Text style={styles.detail}>{name}</Text><Text style={styles.detail}>{pass}</Text><Text style={styles.detail}>{email}</Text>
          </View> : null
      }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor:"#111",
    paddingTop:25,
    color:"#fff"
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    justifyContent: 'center',
    color: 'blue',
    fontWeight: "bold",
    marginBottom: 30
  },
  textInput: {
    borderWidth: 1,
    backgroundColor: '#000',
    color: "#fff",
    borderColor: "#ccc",
    marginBottom: 15,
    paddingHorizontal: 15,
    maxHeight:50,
    borderStyle:"dashed"
  },
  detail: {
    color:"#fff"
  },
  button: {
    height: 70,
    marginTop:20
  }
})
export default App;