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
import axios from 'axios';

import Avatar from '../../components/avatar/Avatar';
import Divider from '../../components/divider/Divider';
import {Heading6, Subtitle1, Subtitle2} from '../../components/text/CustomText';
import TouchableItem from '../../components/TouchableItem';
import Colors from '../../theme/colors';
import Button from '../../components/buttons/Button';


const demoId = "5ee7753cf3ef148b28c038e0";
const urlUsers = "http://localhost:5000/users/";

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
    marginTop: 350,
  },
});

// SetingsB
export default class Porfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currUser: []
    }

  }

  componentDidMount() {
    let url = `${urlUsers}${demoId}`;
    axios.get(url).then(res => {
      this.setState({currUser: res.data})
    });
  }

  componentDidUpdate(){
    let url = `${urlUsers}${demoId}`;
    axios.get(url).then(res => {
      this.setState({currUser: res.data})
    });
  }

  navigateTo = (screen, params) => () => {
    //console.log(params)
    const {navigation} = this.props;
    navigation.navigate(screen, params);

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
                <Subtitle1 style={styles.name}> {this.state.currUser.username}     </Subtitle1>
                <Subtitle2 style={styles.email}> {this.state.currUser.email}   </Subtitle2>
                <Subtitle2 style={styles.address}> {this.state.currUser.address}   </Subtitle2>
              </View>
            </View>
          </View>

          <Divider />
          <Button
            title = "Edit profile"
            onPress={ this.navigateTo('EditProfile', {currUser: this.state.currUser}) }
            setting="Edit profile"
            type="editprofile"
          />

        {/*
          <Divider />
          <Button
            title = "Server Test"
            onPress={this.getDataFromServer}
            setting="Server Test"
            type="servertest"
          />
        */}





          <Text style={{fontWeight: '600'}}>
              {"\n\n\t"}location map here:
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

{/*
  axios.get('http://localhost:5000/farmproducts/').then(res => console.log(res.data));
  axios.get(urlUsers+"5ee7753cf3ef148b28c038e0").then(res => console.log(res.data));
    const {tmpData} =axios.get(urlUsers+"5ee7753cf3ef148b28c038e0").then(res => {console.log(res.data); return res.data;  } );
  */}
