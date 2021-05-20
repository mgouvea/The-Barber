import React from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {
  TextInput,
  RadioButton,
  Title,
  Button,
  ActivityIndicator,
} from 'react-native-paper';
import CommonStyles from '../CommonStyles';
import {TimePickerModal} from 'react-native-paper-dates';

import DateTimePickerModal from 'react-native-modal-datetime-picker';

import moment from 'moment';
import axios from 'axios';
import {server} from '../services/Axios';

export default props => {
  // states InputTexts
  const [name, setName] = React.useState('');
  const [tel, setTel] = React.useState('');

  // States RadioButtons
  const [checked, setChecked] = React.useState('cabelo');
  const [barberValue, setBarberValue] = React.useState('');

  // States Date
  const [date, setDate] = React.useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    const dateString = moment(date).format('D [de] MMMM [de] YYYY');
    setDate(dateString);
    hideDatePicker();
  };

  // States Time
  const [visible, setVisible] = React.useState(false);
  const [time, setTime] = React.useState();

  const onDismiss = React.useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  const onConfirm = React.useCallback(
    ({hours, minutes}) => {
      setVisible(false);
      setTime(`${hours}:${minutes}`);
    },
    [setVisible],
    [setTime],
  );

  // save reservations
  const save = async value => {
    try {
      await axios.post(`${server}/reservation`, {
        id: Math.random(),
        name: name,
        tel: tel,
        service: checked,
        barber: barberValue,
        date: date,
        time: time,
      });
      Alert.alert('Sua reserva foi salva com sucesso!');
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <View>
      {/* InputTexts */}
      <View style={{marginBottom: 5}}>
        <TextInput
          style={styles.textInputLayout}
          label="Nome"
          value={name}
          onChangeText={name => setName(name)}
        />
        <TextInput
          style={styles.textInputLayout}
          label="Telefone"
          placeholder="(xx) xxxx xxxx "
          value={tel}
          onChangeText={tel => setTel(tel)}
        />
      </View>

      {/* CheckBoxs Services */}
      <View style={styles.ServicesView}>
        <Title>Serviço</Title>
        <View style={styles.RadioButtonView}>
          <RadioButton
            value="Cabelo"
            status={checked === 'Cabelo' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Cabelo')}
            color={CommonStyles.colors.tertiary3}
          />
          <Text>Cabelo</Text>
        </View>

        <View style={styles.RadioButtonView}>
          <RadioButton
            value="Barba"
            status={checked === 'Barba' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Barba')}
            color={CommonStyles.colors.tertiary3}
          />
          <Text>Barba</Text>
        </View>

        <View style={styles.RadioButtonView}>
          <RadioButton
            value="Cabelo + Barba"
            status={checked === 'Cabelo + Barba' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Cabelo + Barba')}
            color={CommonStyles.colors.tertiary3}
          />
          <Text>Cabelo + Barba</Text>
        </View>
      </View>

      {/* CheckBoxs Barbers */}
      <View style={styles.ServicesView}>
        <Title>Barberiro de Preferência</Title>
        <View style={{flexDirection: 'row', marginLeft: 5}}>
          <View>
            <View style={styles.RadioButtonView}>
              <RadioButton
                value="Geremias"
                status={barberValue === 'Geremias' ? 'checked' : 'unchecked'}
                onPress={() => setBarberValue('Geremias')}
                color={CommonStyles.colors.tertiary3}
              />
              <Text>Geremias</Text>
            </View>
            <View style={styles.RadioButtonView}>
              <RadioButton
                value="Marginho"
                status={barberValue === 'Marginho' ? 'checked' : 'unchecked'}
                onPress={() => setBarberValue('Marginho')}
                color={CommonStyles.colors.tertiary3}
              />
              <Text>Marginho</Text>
            </View>
          </View>
          <View style={{marginLeft: 5}}>
            <View style={styles.RadioButtonView}>
              <RadioButton
                value="Hernane"
                status={barberValue === 'Hernane' ? 'checked' : 'unchecked'}
                onPress={() => setBarberValue('Hernane')}
                color={CommonStyles.colors.tertiary3}
              />
              <Text>Hernane</Text>
            </View>
            <View style={styles.RadioButtonView}>
              <RadioButton
                value="Hermam"
                status={barberValue === 'Hermam' ? 'checked' : 'unchecked'}
                onPress={() => setBarberValue('Hermam')}
                color={CommonStyles.colors.tertiary3}
              />
              <Text>Hermam</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.ServicesView}>
        <Title>Data e Hora</Title>
        <View style={styles.DateTime}>
          <View style={styles.Date}>
            <Button
              onPress={showDatePicker}
              uppercase={false}
              mode="contained"
              style={styles.buttonsModal}>
              Data
            </Button>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </View>
          <View style={styles.Time}>
            <TimePickerModal
              visible={visible}
              onDismiss={onDismiss}
              onConfirm={onConfirm}
              hours={12} // default: current hours
              minutes={14} // default: current minutes
              label="Hora Desejada" // optional, default 'Select time'
              cancelLabel="Cancelar" // optional, default: 'Cancel'
              confirmLabel="Confirmar" // optional, default: 'Ok'
              animationType="fade" // optional, default is 'none'
              // locale={'en'} // optional, default is automically detected by your system
            />
            <Button
              onPress={() => setVisible(true)}
              mode="contained"
              uppercase={false}
              style={styles.buttonsModal}>
              Hora
            </Button>
          </View>
        </View>
      </View>
      <View>
        <Button
          // onPress={save}
          onPress={() => {
            const aux = save(props.value);
            props.funcao(aux);
          }}
          mode="contained"
          icon="check"
          style={styles.buttonsModal}>
          Salvar
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  RadioButtonView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInputLayout: {
    height: 60,
    marginBottom: 7,
  },
  ServicesView: {
    borderWidth: 0.5,
    borderColor: CommonStyles.colors.tertiary3,
    borderRadius: 7,
    marginBottom: 7,
  },
  DateTime: {
    flexDirection: 'row',
  },
  Date: {
    flex: 1,
    margin: 5,
  },
  Time: {
    flex: 1,
    margin: 5,
  },
  buttonsModal: {
    backgroundColor: CommonStyles.colors.secondary,
  },
});
