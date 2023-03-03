import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

type UserItemProps = {
  user: any;
}

const UserItem = ({ user }: UserItemProps) => {
  return (
    <View style={styles.userContainer}>
      <Image style={styles.userImage} source={{ uri: user.avatar }} />
      <View style={styles.userInfoContainer}>
        <Text style={styles.userName}>{user.first_name} {user.last_name}</Text>
        <Text style={styles.userEmail}>{user.email}</Text>
      </View>
    </View>
  );
};

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


type User = {
  name: string,
  number: number
} 

const a: User = {
  name: 'shrey',
  number: 778
};

const b: User = {
  name: 'shabbir',
  number: 250
}

console.log(a.number);