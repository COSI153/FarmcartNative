/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React, { useState } from "react";
import { StyleSheet, Text, Image, View, SafeAreaView } from "react-native";
import Screen from "../../components/Screen";
import Button from "../../components/buttons/Button";
import AppTextInput from "../../components/AppTextInput";
import Profile from './Profile';


export default function EditProfile(props) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [address, setAddress] = useState();

  const navigateTo = scrn => () => {
    const {navigation} = props;
    navigation.navigate(scrn);
  };

  return (
    <SafeAreaView style={styles.container} >

      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="tag"
        //keyboardType="name"
        placeholder="Name"
        textContentType="name"
        onChangeText={(text) => setName(text)}
      />

      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="email"
        keyboardType="email-address"
        placeholder="Email"
        textContentType="emailAddress"
        onChangeText={(text) => setEmail(text)}
      />

      <AppTextInput
        autoCapitaliza="none"
        autoCorrect={false}
        icon="lock"
        placeholder="Password"
        SecureTextEntry
        textContentType="password"
        onChangeText={(text) => setPassword(text)}
      />

      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="home"
        //keyboardType="address"
        placeholder="Address"
        //textContentType="address"
        onChangeText={(text) => setAddress(text)}
      />


      <View style={styles.bottom}>
      <Button style = {styles.button}
          onPress={navigateTo('Profile')}
          title = "Update" />
      </View>


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
