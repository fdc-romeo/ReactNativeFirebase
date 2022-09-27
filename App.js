import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoadingPage } from './src/screens/LoadingPage';
import { LoginPage } from './src/screens/LoginPage';

function LoadingScreen({ navigation }) {

  setTimeout(() => {
       navigation.navigate('LoginPageScreen');
  }, 2000);

  return (
    <LoadingPage/>
  );
}
function LoginPageScreen({ navigation }) {
  return (
      <LoginPage/>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoadingApp">
            <Stack.Screen  options={{headerShown: false}} name="LoadingApp" component={LoadingScreen} />
            <Stack.Screen  options={{headerShown: false}} name="LoginPageScreen" component={LoginPageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
