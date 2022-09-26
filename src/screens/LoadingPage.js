import React, {Component} from 'react';
import {StyleSheet, View, Text,Image,ActivityIndicator} from 'react-native';
import { NavigationActions } from "react-navigation";
import { LoginComponent } from './/LoadingPage';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

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

function ImportComponent( {navigation}, props ){
      setTimeout(() => {
       navigation.navigate('LoginComponent');
     }, 2500);
    return (
        <View style={styles.MainView}>
          <Image
            source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
            style={{width: 200, height: 200}}
          />
           <Text>Hello, I am your cat!</Text> 
           <ActivityIndicator style={styles.Indicator} size="large" color="#0000ff" />
        </View>
    )
}

export { ImportComponent }