/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  backgroundColor,
  SafeAreaView,
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import Button from '../../components/buttons/Button';
import PublisherDetail from '../../components/PublisherDetail';

function ProductDetail({navigation}) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.icon}>
          <Ionicons
            name="ios-arrow-back"
            size={30}
            color="black"
            onPress={() => navigation.navigate('HomeNavigator')}
          />
        </View>
        <Image
          style={styles.image}
          source={require('../../assets/img/farmproductimage/lemons.jpg')}
        />
        <View style={styles.detailContainer}>
          <Text style={styles.name}>Lemons</Text>
          <Text style={styles.price}>$2.14/pound</Text>
          <Text style={styles.stock}>In Stock</Text>
          <Text style={styles.stock}>
            Freshness Guarantee: We guarantee that you will be satisfied with
            the freshness and quality of this product, and that it will be
            delivered to your home within any applicable use by, sell by, best
            by or expiration dates.
          </Text>
        </View>
        <PublisherDetail
          name="Farm A"
          location="South Street, Waltham, Massachusetts"
          image={require('../../assets/img/farmsImage/farm1.jpg')}
        />
        <Button style={styles.Button} title="Add to Cart" />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    //top: 40,
    left: 20,
  },
  image: {
    width: '80%',
    height: 300,
    position: 'relative',
    right: -40,
  },
  detailContainer: {
    marginBottom: 20,
    marginLeft: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'dodgerblue',
    lineHeight: 50,
  },
  price: {
    fontSize: 18,
    //fontWeight: "bold",
    color: 'dodgerblue',
    lineHeight: 33,
  },
  stock: {
    fontSize: 18,
    //fontWeight: "bold",
    color: 'dodgerblue',
    lineHeight: 33,
  },
});

export default ProductDetail;
