import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  Avatar,
  Button,
  Card,
  Appbar,
  Icon,
  IconButton,
  FAB,
} from 'react-native-paper';

import CommonStyles from '../CommonStyles';
import imgLogo from '../../assets/imgs/logo2Barber.png';
import imgServices from '../../assets/imgs/servicos.png';

export default ({navigation}) => {
  return (
    <View style={styles.body}>
      <Appbar.Header style={styles.appBar}>
        <Appbar.BackAction
          onPress={() => {
            navigation.navigate('HomePage');
          }}
        />
        <Appbar.Content title="Serviços" />
      </Appbar.Header>

      {/* Card */}
      <View style={styles.cardPage}>
        {/* Card Cabelo */}
        <Card style={styles.cardImg}>
          <Card.Title title="Cabelo" />
          <Card.Cover
            source={{
              uri:
                'https://cdn.pixabay.com/photo/2012/04/13/18/13/barber-33118__340.png',
            }}
          />
        </Card>

        {/* Card Barba */}
        <Card style={styles.cardImg}>
          <Card.Title title="Barba" />
          <Card.Cover
            source={{
              uri:
                'https://cdn.pixabay.com/photo/2017/10/05/21/27/beard-2821057__340.png',
            }}
          />
        </Card>
      </View>

      <View style={styles.cardPageHairBarber}>
        {/* Card Cabelo + Barba */}
        <Card>
          <Card.Title title="Cabelo + Barba" />
          <Card.Cover source={imgServices} />
        </Card>
      </View>

      <View>
        <FAB
          style={styles.fab}
          icon="check"
          label="Agendar"
          color="#fff"
          onPress={() => console.warn('Pressed')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: CommonStyles.colors.backgroundColor,
  },
  appBar: {
    backgroundColor: CommonStyles.colors.primary,
  },
  avatarLogo: {
    padding: 20,
    marginLeft: -20,
    marginRight: 15,
    backgroundColor: CommonStyles.colors.primary,
  },
  cardPage: {
    flexDirection: 'row',
    padding: 30,
    marginTop: 30,
  },
  cardPageHairBarber: {
    padding: 19,
    marginTop: 150,
    marginLeft: 13,
  },
  cardImg: {
    width: 160,
    height: 50,
    marginRight: 20,
  },
  ButtonCard: {
    backgroundColor: CommonStyles.colors.primary,
    marginBottom: 15,
  },
  IconButton: {
    margin: -2.5,
  },
  fab: {
    position: 'absolute',
    margin: 25,
    right: 0,
    bottom: -80,
    backgroundColor: CommonStyles.colors.secondary,
  },
});
