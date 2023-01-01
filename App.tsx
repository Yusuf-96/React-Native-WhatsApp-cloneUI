import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View } from 'react-native';
import Navigator from './navigation/Navigator';

const App = () => {
  return (
    <SafeAreaView className="flex-1 justify-center bg-gray-50">
      <Navigator />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default App;
