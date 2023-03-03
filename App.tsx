import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import UserItem from './components/UserItem';

function App() {
  const [users, setUsers] = useState<any>([]);

  const fetchUsers = async () => {
    const response = (await axios.get('https://reqres.in/api/users/')).data.data;
    setUsers(response);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const renderItem = ({ item }: any) => {
    return <UserItem user={item} />;
  }

  const keyExtractor = (user: any) => {
    return user.id.toString(); 
  };

  return (
    <View>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
}

export default App;