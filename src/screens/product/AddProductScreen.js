import React, {useEffect, useState} from 'react';
import * as ImagePicker from 'expo-image-picker';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import AppTextInput from '../../components/AppTextInput';
import ButtonGeneral from '../../components/buttons/ButtonGeneral';

function AddProductScreen(props) {
  useEffect(() => {
    requestPermission();
  }, []);

  navigateTo = (screen) => () => {
    const {navigation} = props;
    navigation.navigate(screen);
  };

  const [imageUri, setImageUri] = useState();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [category, setCategory] = useState();
  const [description, setDescription] = useState();

  navigateTo = (screen) => () => {
    const {navigation} = props;
    navigation.navigate(screen);
  };

  const requestPermission = async () => {
    const {granted} = await ImagePicker.requestCameraRollPermissionsAsync();
  };

  const PressSelection = () => {
    if (!imageUri) selectImage();
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) setImageUri(result.uri);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <SafeAreaView style={styles.containerOutside}>
      <TouchableOpacity onPress={PressSelection}>
        <View style={styles.container}>
          {!imageUri && (
            <MaterialCommunityIcons name="camera" size={80} color="#fc5c65" />
          )}
          {imageUri && <Image source={{uri: imageUri}} style={styles.image} />}
        </View>
      </TouchableOpacity>
      <View style={styles.inputContainer}>
        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          icon="rename-box"
          placeholder="Product name"
          keyboardType="email-address"
          textContentType="emailAddress"
          onChangeText={(text) => setName(text)}
        />
        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          icon="rename-box"
          placeholder="Price "
          onChangeText={(text) => setPrice(text)}
        />
        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          icon="rename-box"
          placeholder="Category"
          onChangeText={(text) => setCategory(text)}
        />
        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          icon="rename-box"
          placeholder="Description "
          onChangeText={(text) => setDescription(text)}
        />
      </View>
      <View style={styles.button}>
        <ButtonGeneral title="Add" onPress={this.navigateTo('HomeNavigator')} />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  containerOutside: {
    alignItems: 'center',
    backgroundColor: 'white',
  },
  container: {
    backgroundColor: '#fff0f5',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    width: 200,
    marginTop: 20,
  },
  inputContainer: {
    paddingTop: 20,
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 100,
  },
  button: {
    paddingTop: 20,
  },
});
export default AddProductScreen;
