/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {enableScreens} from 'react-native-screens';
import ListingDetailScreen from './src/screens/product/ListingDetailScreen';
import MessageScreen from './src/screens/message/MessageScreen';
import ProductDetail from './src/screens/product/ProductDetail';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
enableScreens();

import MainNavigator from './src/navigation/MainNavigator';
import {View, Button, SafeAreaView, Image} from 'react-native';
import {useState} from 'react';

// APP
function App() {
  return (
    <SafeAreaProvider>
      <MainNavigator />
    </SafeAreaProvider>
  );
}

export default App;
