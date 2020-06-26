/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React, {Component} from 'react';
import {
  Text,Alert,SafeAreaView,ScrollView,StatusBar,StyleSheet,View,FlatList
} from 'react-native';

import Avatar from '../../components/avatar/Avatar';
import Divider from '../../components/divider/Divider';
import {Heading6, Subtitle1, Subtitle2} from '../../components/text/CustomText';
import TouchableItem from '../../components/TouchableItem';
import Colors from '../../theme/colors';
import Button from '../../components/buttons/Button';

// Jae June25,2020
import tmpUserData from './tmpUserData';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  contentContainerStyle: {
    paddingBottom: 16,
  },
  titleContainer: {
    paddingHorizontal: 16,
  },
  titleText: {
    paddingTop: 16,
    paddingBottom: 16,
    fontWeight: '700',
    textAlign: 'left',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  profileContainer: {
    // height: 88
    paddingVertical: 16,
  },
  leftSide: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  profileInfo: {
    paddingLeft: 16,
  },
  name: {
    fontWeight: '500',
    textAlign: 'left',
    paddingVertical: 8,
  },
  email: {
    paddingVertical: 8,
  },
  orderHistory: {
    paddingVertical: 8,
    margin: 10,
  },
  sectionHeader: {
    paddingTop: 16,
    paddingHorizontal: 16,
    textAlign: 'left',
  },
  sectionHeaderText: {
    textAlign: 'left',
  },
  setting: {
    height: 48,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    width: 24,
    height: 24,
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 50,
    marginTop: 400,
  },
});

// SetingsB
export default class Porfile extends Component {
  constructor(props) {
    super(props);
    //this.state = {};

    // (Jae) temporary data retreival from tmpUserData
    // will be retrieved from database
    const currUserId = 102;
    const currUser = tmpUserData.filter((user) => {
      return user.id === currUserId;
    })

    this.state = {currUser: currUser[0]};


  }

  navigateTo = (screen) => () => {
    const {navigation} = this.props;
    navigation.navigate(screen);
  };

  logout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {text: 'Cancel', onPress: () => {}, style: 'cancel'},
        {text: 'OK', onPress: () => {}},
      ],
      {cancelable: false},
    );

  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          backgroundColor={Colors.statusBarColor}
          barStyle="dark-content"
        />

        <ScrollView contentContainerStyle={styles.contentContainerStyle}>
          <View style={styles.titleContainer}>
            <Heading6 style={styles.titleText}>My Profile</Heading6>
          </View>


          <View style={[styles.row, styles.profileContainer]}>
            <View style={styles.leftSide}>
              <Avatar
                imageUri={require('../../assets/img/profile_1.jpeg')}
                size={60}
                rounded
              />
              <View style={styles.profileInfo}>
                <Subtitle1 style={styles.name}> {this.state.currUser.name}     </Subtitle1>
                <Subtitle2 style={styles.email}> {this.state.currUser.email}   </Subtitle2>
                <Subtitle2 style={styles.address}> {this.state.currUser.address}   </Subtitle2>
              </View>
            </View>
          </View>

          <Divider />
          <Button
            title = "Edit profile"
            onPress={this.navigateTo('EditProfile')}
            setting="Edit profile"
            type="editprofile"
          />


          <Text style={{fontWeight: '600'}}>
              {"\n"}Order History:
          </Text>
          <View style={styles.orderHistory}>
            <Text>
              {this.state.currUser.orderHistory}
            </Text>
          </View>


          <View style={styles.bottom}>
          <Button
            title = "Log out"
            onPress={this.logout}

            setting="Log Out"
            type="logout"
          />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
