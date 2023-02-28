import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const UserItem = ({ item }) => (
  <View style={styles.userContainer}>
    <Image style={styles.userImage} source={{ uri: item.avatar }} />
    <View style={styles.userInfoContainer}>
      <Text style={styles.userName}>{item.first_name} {item.last_name}</Text>
      <Text style={styles.userEmail}>{item.email}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom:20
  },
  userImage: {
    width: 200,
    height: 200,
    borderRadius: 25,
    flex:1
  },
  userInfoContainer: {
    flex: 1
  },
  userName: {
    fontWeight: 'bold',
    textAlign:'center',
    marginVertical: 5
  },
  userEmail: {
    color: '#666',
    textAlign:'center'
  }
});

export default UserItem;
