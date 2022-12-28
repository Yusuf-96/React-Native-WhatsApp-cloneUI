import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import ChatsScreen from './screens/ChatsScreen';
import ChatScreen from './screens/ChatScreen';
import Navigator from './navigation/Navigator';


const App = () => {
  return (
    <View className="flex-1 justify-center py-14">
      <Navigator />
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
