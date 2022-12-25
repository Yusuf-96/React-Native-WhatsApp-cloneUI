import React from 'react';
import { View, Text, Image } from 'react-native';
import { IChats } from '../type/IChats';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

type ChatType = {
  chat: IChats;
};

const ChatListItem: React.FC<ChatType> = ({ chat }) => {
  return (
    <View className="flex flex-row mx-4 my-2 h-[70px] mb-5 ">
      <Image
        source={{
          uri: chat.user.image,
        }}
        style={{ width: 60, height: 60 }}
        className="h-30 w-30 rounded-full mr-3 "
      />
      <View className="flex-1 border-b border-gray-200">
        <View className="flex-row flex mb-2">
          <Text className="flex-1 font-bold" numberOfLines={1}>
            {chat.user.name}
          </Text>
          <Text className="text-gray-600">
            {dayjs(chat.lastMessage.createdAt).fromNow(true)}
          </Text>
        </View>
        <Text className="text-gray-600" numberOfLines={2}>
          {chat.lastMessage.text}
        </Text>
      </View>
    </View>
  );
};

export default ChatListItem;
