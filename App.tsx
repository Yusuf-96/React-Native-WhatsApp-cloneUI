import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import ChatsScreen from './screens/ChatsScreen';
import ChatScreen from './screens/ChatScreen';


const App = () => {
  return (
    <View className="flex-1 justify-center py-14">
      {/* <ChatsScreen /> */}
      <ChatScreen/>
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
