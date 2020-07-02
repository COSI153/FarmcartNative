/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React, { useState } from "react";
import { StyleSheet, Text, Image, View, SafeAreaView } from "react-native";
import axios from 'axios';

import Screen from "../../components/Screen";
import Button from "../../components/buttons/Button";
import AppTextInput from "../../components/AppTextInput";
//import Profile from './Profile';

const urlUpdate = "http://localhost:5000/users/update/";

export default function EditProfile({route, navigation}) {

  const {currUser} = route.params;

  const [username, setUsername] = useState(currUser.username);
  const [email, setEmail] = useState(currUser.email);
  const [password, setPassword] = useState(currUser.password);
  const [address, setAddress] = useState(currUser.address);
  const [farmproducts, setFarmproducts] = useState([]);
  const [location, setLocation] = useState([]);

  const navigateTo = (scrn) => () => {
    let url = `${urlUpdate}${currUser._id}`;
    let url2 = `/update/${currUser._id}`;




    currUser.username = username;
    currUser.email = email;
    currUser.password = password;
    currUser.address = address;

    console.log(currUser);
    console.log(url);

    axios.post(url, currUser).then(res => console.log(res.data));;

    console.log("so far ok");
    navigation.navigate(scrn);
  };




  const test = () => {
    currUser.username = username;
    console.log(currUser.username);
  }


  return (
    <SafeAreaView style={styles.container} >

      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="tag"
        //keyboardType="name"
        placeholder={username}
        textContentType="name"
        onChangeText={(text) => setUsername(text)}
      />

      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="email"
        keyboardType="email-address"
        placeholder={email}
        textContentType="emailAddress"
        onChangeText={(text) => setEmail(text)}
      />
    {/*
      <AppTextInput
        autoCapitaliza="none"
        autoCorrect={false}
        icon="lock"
        placeholder={password}
        SecureTextEntry
        textContentType="password"
        onChangeText={(text) => setPassword(text)}
      />
    */}

      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="home"
        //keyboardType="address"
        placeholder={address}
        //textContentType="address"
        onChangeText={(text) => setAddress(text)}
      />

      <View style={styles.bottom}>
      <Button style = {styles.button}
          onPress={navigateTo('Profile')}
          title = "Update"
          setting="profile"
          type="profile"
      />
      </View>


      <Button
        title = "Edit Test"
        onPress={test}
        setting="Edit Test"
        type="edittest"
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    height: 80,
    width: 170,
    marginBottom: -30,
    marginTop: 50,
    alignSelf: "center",
    fontSize: 35,
    fontWeight: "bold",
    color: "#423838",
  },

  container: {
    flex: 1,
    marginTop: 100,
    paddingTop: 100,
  },

  button: {
    position: 'absolute',
    bottom:10,
    color: '#ffffff',
    fontWeight: "bold",
  },

  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 50,
    marginTop: 150,
  },
});
