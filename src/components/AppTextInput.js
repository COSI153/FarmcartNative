import React from 'react';
import {View, TextInput, StyleSheet, Platform} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

function AppTextInput({icon, ...otherProps}) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={30}
          style={styles.icon}
          color="#fc5c65"
        />
      )}
      <TextInput style={styles.textInput} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff0f5',
    //#fff5ee
    //#fff0f5
    borderRadius: 25,
    flexDirection: 'row',
    width: 400,
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 15,
  },
  textInput: {
    color: '#0c0c0c',
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
});

export default AppTextInput;
