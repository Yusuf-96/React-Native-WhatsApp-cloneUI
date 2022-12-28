import { View, Text } from 'react-native';
import React from 'react';
import { IMessages } from '../type/IMessage';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const Messages: React.FC<{ messages: IMessages }> = ({ messages }) => {
  const isMe = (): Boolean => {
    return messages.user.id === 'u1';
  };

  return (
    <View
      className={
        isMe()
          ? 'bg-green-200 m-1 rounded-xl p-2.5 max-w-[80%] self-end'
          : 'bg-gray-50 m-1 rounded-xl p-2.5 max-w-[80%] self-start'
      }
    >
      <Text>{messages.text}</Text>
      <Text className="text-gray-500 self-end">
        {dayjs(messages.createdAt).fromNow(true)}
      </Text>
    </View>
  );
};

export default Messages;
