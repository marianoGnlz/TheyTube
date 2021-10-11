import { HomeScreen } from '@TheyTube/screens';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';


  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text>Hola uwu</Text>
      <HomeScreen />
    </SafeAreaView>
  );
};

export default App;
