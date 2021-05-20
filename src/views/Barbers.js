import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, Card, Appbar, Title} from 'react-native-paper';
import BarberListScreen from '../components/BarberListScreen';
import CommonStyles from '../CommonStyles';

export default ({navigation}) => {
  return (
    <View style={styles.body}>
      <Appbar.Header style={styles.appBar}>
        <Appbar.BackAction
          onPress={() => {
            navigation.navigate('HomePage');
          }}
        />
        <Appbar.Content title="Funcionários" />
      </Appbar.Header>

      <Card style={styles.cardPage}>
        <Card.Title title="Conheça Nossos Funcionários" />
        <Card.Content>
          <Title>Eles são os melhores</Title>
        </Card.Content>
        <BarberListScreen />
      </Card>
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
  cardPage: {
    padding: 35,
    marginTop: 20,
  },
  fab: {
    position: 'absolute',
    margin: 30,
    right: 0,
    bottom: -50,
    backgroundColor: CommonStyles.colors.secondary,
  },
});
