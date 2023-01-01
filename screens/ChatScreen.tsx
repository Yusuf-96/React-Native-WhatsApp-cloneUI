import {
  ImageBackground,
  View,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import Messages from '../components/Messages';
import messages from '../data/messages.json';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';

type RouteType = {
  key: string;
  name: string;
  params: { name: string };
  path: any;
};

const ChatScreen = () => {
  const [newMessage, setNewMessage] = useState<string>('');

  const route = useRoute<RouteType>();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: route.params.name });
  }, [route.params.name]);

  const onSend = (): void => {
    console.warn('Sending a new massages!', newMessage);
    setNewMessage('');
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1" keyboardVerticalOffset={90}
    >
      <ImageBackground
        source={require('../assets/images/BG.png')}
        className="flex-1"
      >
        <FlatList
          data={messages}
          renderItem={({ item }) => <Messages messages={item} />}
          className="p-2.5"
        />
        <View className="flex flex-row items-center p-1.5">
          <View className="text-blue-400">
            <AntDesign name="plus" size={24} color={'royalblue'} />
          </View>
          <TextInput
            placeholder="Message"
            className="bg-white p-3 m-3 rounded-full flex-1"
            value={newMessage}
            onChangeText={setNewMessage}
          />
          <View className="bg-sky-500 items-center justify-center w-10 h-10 rounded-full overflow-hidden ">
            <MaterialIcons
              name="send"
              size={24}
              color="white"
              onPress={onSend}
            />
          </View>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;
