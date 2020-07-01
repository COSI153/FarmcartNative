import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import PublisherDetail from '../../components/PublisherDetail';
import {View, SafeAreaView} from 'react-native';

const farmInfos = [
  {
    id: 1,
    name: 'farm1',
    location: ' Waltham, Massachussets',
    image: require('../../assets/img/farmsImage/farm1.jpg'),
  },
  {
    id: 2,
    name: 'farm2',
    location: 'Watertown, Massachussets',
    image: require('../../assets/img/farmsImage/farm2.jpg'),
  },
  {
    id: 3,
    name: 'farm3',
    location: 'Newton, Massachussets',
    image: require('../../assets/img/farmsImage/farm3.jpg'),
  },
];

function MessageScreen(props) {
  return (
    <SafeAreaView>
      <FlatList
        data={farmInfos}
        keyExtractor={(Info) => Info.id.toString()}
        renderItem={({item}) => (
          <PublisherDetail
            name={item.name}
            location={item.location}
            image={item.image}
          />
        )}
      />
    </SafeAreaView>
  );
}

export default MessageScreen;
