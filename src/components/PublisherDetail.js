import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

function PublisherDetail({image, name, location}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginRight: 10,
  },
  detailContainer: {
    paddingTop: 5,
  },
  name: {
    fontSize: 20,
    //fontWeight: "bold",
    //color: "dodgerblue",
    lineHeight: 30,
  },
  location: {
    fontSize: 15,
    color: 'grey',
  },
});
export default PublisherDetail;
