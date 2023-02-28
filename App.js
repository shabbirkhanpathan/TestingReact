import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import UserItem from './components/UserItem';

function App() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await fetch("https://reqres.in/api/users/");
    const json = await res.json();
    setUsers(json.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <View>
      <FlatList
        data={users}
        renderItem={({ item }) => <UserItem item={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

export default App;