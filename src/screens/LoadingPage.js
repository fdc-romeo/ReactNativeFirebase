import React, {Component} from 'react';
import {StyleSheet, View, Text,Image,ActivityIndicator} from 'react-native';

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

function ImportComponent() {

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