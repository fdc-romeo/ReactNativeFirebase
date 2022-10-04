import React, {Component} from 'react';
import {StyleSheet, View, Text,Image,ActivityIndicator,SafeAreaView} from 'react-native';
import { NavigationActions } from "react-navigation";
import { LoginScreen } from './/LoginPage';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Indicator : {
    marginTop : 10

  }
});

function LoadingPage({ navigation }) {
  
    return (
       <SafeAreaView style={{flex: 1}}>
          <View style={styles.MainView}>
            <Image
              source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
              style={{width: 200, height: 200}}
            />
             <Text>Welcome To Cat Café</Text> 
             <ActivityIndicator style={styles.Indicator} size="large" color="#0000ff" />
          </View>
        </SafeAreaView>
  );
}

export { LoadingPage }