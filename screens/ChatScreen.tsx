import {
  ImageBackground,
  View,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Messages from '../components/Messages';
import messages from '../data/messages.json';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

const ChatScreen = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1"
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
            <AntDesign name="plus" size={24} color="sky" />
          </View>
          <TextInput
            placeholder="Message"
            className="bg-white p-3 m-3 rounded-full flex-1"
          />
          <View className="bg-sky-500 items-center justify-center w-10 h-10 rounded-full overflow-hidden ">
            <MaterialIcons name="send" size={24} color="white" />
          </View>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;
