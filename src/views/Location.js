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
  Title,
} from 'react-native-paper';

import CommonStyles from '../CommonStyles';
import imgServices from '../../assets/imgs/servicos.png';
import imgLocation from '../../assets/imgs/maps.jpg';

const leftContent = props => <Avatar.Icon {...props} icon="folder" />;

export default ({navigation}) => {
  return (
    <View style={styles.body}>
      <Appbar.Header style={styles.appBar}>
        <Appbar.BackAction
          onPress={() => {
            navigation.navigate('HomePage');
          }}
        />
        <Appbar.Content title="Localização" />
      </Appbar.Header>

      {/* Card */}
      <View style={styles.cardPage}>
        {/* Card Location */}
        <Card>
          <Card.Title title="Veja nossa localização" />
          <Card.Cover style={styles.cardImg} source={imgLocation} />
          <Button
            style={styles.ButtonCard}
            mode="contained"
            icon="map"
            onPress={() => console.warn('Iniciando Navegação')}>
            Navegar
          </Button>
        </Card>
      </View>

      <View style={styles.address}>
        <Title>Endereço</Title>
        <Text style={styles.TextAddress}>
          Condomínio RJNET, Conjunto Centauros
        </Text>
        <Text style={styles.TextAddress}>Lote 25. Região dos Lagos</Text>
        <Text style={styles.TextAddress}>Brasília - DF</Text>
      </View>

      <View>
        <FAB
          style={styles.fab}
          icon="check"
          label="Agendar"
          color="#FFF"
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
  cardPage: {
    padding: 35,
    marginTop: 20,
  },
  cardImg: {},
  ButtonCard: {
    backgroundColor: CommonStyles.colors.secondary,
    marginBottom: 15,
  },
  IconButton: {
    margin: -2.5,
  },
  address: {
    padding: 20,
    margin: 5,
    borderColor: CommonStyles.colors.tertiary3,
    borderWidth: 1,
  },
  TextAddress: {
    fontSize: 15,
  },
  fab: {
    position: 'absolute',
    margin: 30,
    right: 90,
    bottom: -100,
    backgroundColor: CommonStyles.colors.secondary,
  },
});
