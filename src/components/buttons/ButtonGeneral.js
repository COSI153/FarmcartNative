import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

function ButtonGeneral({title, onPress}) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fc5c65',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    width: 400,
    height: 50,
    marginTop: 20,
  },
  text: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: 25,
  },
});

export default ButtonGeneral;
