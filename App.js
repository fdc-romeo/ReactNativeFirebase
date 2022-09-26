import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ImportComponent } from './src/screens/LoadingPage';


function App() {
  return (
    <ImportComponent />
  );
}

export default App;
