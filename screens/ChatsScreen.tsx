import { FlatList } from 'react-native';
import React from 'react';
import ChatListItem from '../components/ChatListItem';
import chats from '../data/chats.json';


const ChatsScreen= () => {
  return (
    <FlatList
      data={chats}
      renderItem={({ item }) => <ChatListItem chat={item} />}
    />
  );
};

export default ChatsScreen;
