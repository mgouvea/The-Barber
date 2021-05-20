import React from 'react';
import {View, Text, StyleSheet, Linking} from 'react-native';
import {
  Avatar,
  Button,
  Card,
  Appbar,
  Icon,
  IconButton,
  FAB,
  Title,
  Paragraph,
} from 'react-native-paper';

import CommonStyles from '../CommonStyles';
import imgServices from '../../assets/imgs/servicos.png';
import imgLocation from '../../assets/imgs/maps.jpg';

const phoneNumber = '61999990000';

export default ({navigation}) => {
  return (
    <View style={styles.body}>
      <Appbar.Header style={styles.appBar}>
        <Appbar.BackAction
          onPress={() => {
            navigation.navigate('HomePage');
          }}
        />
        <Appbar.Content title="Funcionamento" />
      </Appbar.Header>

      <View style={styles.hourOperation}>
        <Title style={{fontSize: 20}}>Horário de Funcionamento</Title>
        <Paragraph style={styles.hourText}>Seg.: 08:30 – 21:00</Paragraph>
        <Paragraph style={styles.hourText}>Ter.: 08:30 – 21:00</Paragraph>
        <Paragraph style={styles.hourText}>Qua.: 08:30 – 21:00</Paragraph>
        <Paragraph style={styles.hourText}>Qui.: 08:30 – 21:00</Paragraph>
        <Paragraph style={styles.hourText}>Sex.: 08:30 – 21:00</Paragraph>
        <Paragraph style={styles.hourText}>Sáb.: 08:30 – 21:00</Paragraph>
        <Paragraph style={styles.hourText}>Dom.: Fechado</Paragraph>
      </View>
      <View style={styles.hourOperation}>
        <Title style={{fontSize: 20}}>Contato</Title>
        <View style={styles.contact}>
          <Text style={styles.hourText}>(61) 99999-0000</Text>
          <FAB
            size={50}
            icon="phone"
            color="#fff"
            style={styles.zapIcon}
            onPress={() => Linking.openURL(`tel:${phoneNumber}`)}
          />
        </View>
      </View>

      <View style={styles.hourOperation}>
        <Title>Depoimentos</Title>
        <View style={{flexDirection: 'row'}}>
          <Button mode="text" icon="star" color="#F7B436" />
          <Button mode="text" icon="star" color="#F7B436" />
          <Button mode="text" icon="star" color="#F7B436" />
          <Button mode="text" icon="star" color="#F7B436" />
          <Button mode="text" icon="star-outline" color="#F7B436" />
        </View>
        <Text style={styles.hourText}>
          "Lugar agradável e bonito com um excelente profissional, Tallisson."
        </Text>
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
  hourOperation: {
    padding: 20,
    margin: 5,
    borderColor: CommonStyles.colors.tertiary3,
    borderWidth: 1,
  },
  hourText: {
    fontSize: 16,
  },
  contact: {
    flexDirection: 'row',
  },
  zapIcon: {
    backgroundColor: '#00E676',
    position: 'absolute',
    right: 10,
    bottom: 0,
  },
  fab: {
    position: 'absolute',
    margin: 30,
    right: 100,
    bottom: -100,
    backgroundColor: CommonStyles.colors.secondary,
  },
});
