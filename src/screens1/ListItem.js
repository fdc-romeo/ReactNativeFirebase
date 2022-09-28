import React, {Component} from 'react';
import {StyleSheet, View, Text,Image,ActivityIndicator,SafeAreaView} from 'react-native';
import { NavigationActions } from "react-navigation";


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

function ListItem({ navigation }) {
    return (
       <SafeAreaView style={{flex: 1}}>
          <View style={styles.MainView}>
            <Image
              source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
              style={{width: 200, height: 200}}
            />
          
          </View>
        </SafeAreaView>
  );
}

export { ListItem }