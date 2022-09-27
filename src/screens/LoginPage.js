import React, {Component} from 'react';
import {
  StyleSheet, 
  View, 
  Text,
  Image,
  ActivityIndicator,
  SafeAreaView,
  TextInput,
  Button
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const styles = StyleSheet.create({

  MainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  Indicator : {
    marginTop : 5

  },

  UserName  : {
    height: 40,
    width : 200,
    padding: 10,
    fontSize: 15,
  },

  ImageLogo : {
    width: 200,
    height: 200
  },

  Password   : {
    height: 40,
    width : 200,
    padding: 10,
    fontSize: 15,
  },

  BtnLogin   : {
    height: 40,
    width : 1000,
    padding: 10,
    fontSize: 15,
  },

});

function LoginPage ({ navigation }) {
    return (
       <SafeAreaView style={{flex: 1}}>
        <View style={styles.MainView}>
          <Image
              source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
              style={styles.ImageLogo}
            />
            <Text>Please Login</Text>

           <TextInput
              style={styles.UserName}
               placeholder="User Name" >
           </TextInput> 

         <TextInput style={styles.Password}
              placeholder="Password"
              placeholderTextColor="#9a73ef"
              returnKeyType='go'
              secureTextEntry
              autoCorrect={false}
          />

            <Button
              style={styles.BtnLogin}
              title="Login"
              type ="password"
              onPress={() => alert('Simple Button pressed')}>
            </Button>
        </View>

       </SafeAreaView>  
    )
}

export { LoginPage }