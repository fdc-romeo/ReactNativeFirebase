import React, { Component , useState,} from 'react';
import {
  StyleSheet, 
  View, 
  Text,
  Image,
  ActivityIndicator,
  SafeAreaView,
  TextInput,
  Button,
  Alert,
  Linking
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { realtimeDb } from '../config/db';

import { ListItemPage }  from '../screens1/ListItem';


import * as RootNavigation from '../config/RootNavigation';

const styles = StyleSheet.create({

  MainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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

  Text : {
     // color: 'blue'
  },
  listCats : {
   marginTop : 10
  }

});

function addItem (data) {

    var name = data.name;
    var color = data.color;
  
    if (name !="" && color !="") {
       realtimeDb.ref('/Meow').push({
          name: data.name,
          color : data.color
       });
    }
    setTimeout(() => {
          Alert.alert( "Sucessfully Save!");
    }, 2000);
  
    return (

      <ActivityIndicator style={styles.Indicator} size="large" color="#0000ff" />
    );
   
}

function ListItemScreen({ navigation }) {
  return (

      <ListItemPage/>
  );
}

function LoginPage ({ navigation }) {
    const [nameCat,setCat ] = useState('');
    const [colorCat, setColor] = useState('');
    const  data = {
         name :  nameCat,
         color:  colorCat
    };


    const clearInput = () => {
       setCat('');
       setColor('');
    }

    return (
       <SafeAreaView style={{flex: 1}}>
        <View style={styles.MainView}>
          <Image
              source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
              style={styles.ImageLogo}
            />
            <Text style={styles.Text}>Please Add Your Cat Name</Text>

            <TextInput
                style={styles.UserName}
                placeholder="Name" 
                autoCorrect={false}
                onChangeText={newCat => setCat(newCat)}
                value={nameCat}
               >
            </TextInput> 

            <TextInput style={styles.Password}
                 placeholder="Color"
                 onChangeText={newColor => setColor(newColor)}
                 autoCorrect={false}
                 value={colorCat}
               >
            </TextInput> 
            <Button
                style={styles.BtnLogin}
                title="Submit"
                onPress={() => {addItem(data) ,clearInput()} }>
            </Button>


            <Text style={styles.listCats}
                   onPress={() =>   RootNavigation.navigate('ListItemScreen')    }>
                  See All Cats
            </Text>
        </View>

       </SafeAreaView>  
    )
}

export { LoginPage }