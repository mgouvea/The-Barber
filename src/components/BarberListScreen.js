import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {List, Avatar} from 'react-native-paper';

import BarberList from '../data/BarberList';

export default () => {
  function getBarberList({item: barber}) {
    return (
      <List.Item
        key={barber.id}
        title={barber.name}
        left={props => (
          <Avatar.Image {...props} source={{uri: barber.avatarUrl}} size={70} />
        )}
      />
    );
  }

  return (
    <View>
      <FlatList
        keyExtractor={barber => barber.id.toString()}
        data={BarberList}
        renderItem={getBarberList}
      />
    </View>
  );
};
