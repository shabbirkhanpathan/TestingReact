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
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  userInfoContainer: {
    flex: 1
  },
  userName: {
    fontWeight: 'bold'
  },
  userEmail: {
    color: '#666'
  }
});

export default UserItem;
