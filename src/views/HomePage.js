import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  Avatar,
  Button,
  Card,
  Appbar,
  IconButton,
  FAB,
  Modal,
  Provider,
  Portal,
  Title,
  Snackbar,
} from 'react-native-paper';

import CommonStyles from '../CommonStyles';
import imgLogo from '../../assets/imgs/logo2Barber.png';
import imgServices from '../../assets/imgs/servicos.png';
import imgLocation from '../../assets/imgs/maps.jpg';
import ModalReservation from '../components/ModalReservation';

const iconButtonBar = props => (
  <IconButton {...props} icon="calendar" size={30} style={styles.IconButton} />
);

export default ({navigation}) => {
  const [visible, setVisible] = React.useState(false);
  const [stateFAB, setStateFAB] = React.useState({open: false});

  const onStateChange = ({open}) => setStateFAB({open});
  const {open} = stateFAB;

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: CommonStyles.colors.backgroundColor,
    padding: 20,
    margin: 20,
  };

  // Show SnackBar
  const [visibleSnack, setVisibleSnack] = React.useState(false);
  const onToggleSnackBar = () => setVisibleSnack(!visible);
  const onDismissSnackBar = () => setVisibleSnack(false);

  function modalHandle(value) {
    value = hideModal();
  }

  return (
    <Provider>
      {/* Modal */}
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}>
          <Title>Agende seu Horário</Title>
          <ModalReservation funcao={modalHandle} />
        </Modal>
      </Portal>

      {/* View */}
      <View style={styles.body}>
        <Appbar.Header style={styles.appBar}>
          <Avatar.Image source={imgLogo} size={100} style={styles.avatarLogo} />
          <Appbar.Content title="The Barber" />
          <Appbar.Action icon={iconButtonBar} size={40} onPress={showModal} />
        </Appbar.Header>

        {/* Card */}
        <View style={styles.cardPage}>
          {/* Card Services */}
          <Card>
            <Card.Cover style={styles.cardImg} source={imgServices} />
          </Card>
          <Button
            style={styles.ButtonCard}
            mode="contained"
            onPress={() => navigation.navigate('Services')}>
            Serviços
          </Button>

          {/* Card Location */}
          <Card>
            <Card.Cover style={styles.cardImg} source={imgLocation} />
          </Card>
          <Button
            style={styles.ButtonCard}
            mode="contained"
            onPress={() => navigation.navigate('Location')}>
            Localização
          </Button>
        </View>

        <View>
          <Portal>
            <FAB.Group
              color="#FFF"
              fabStyle={{backgroundColor: CommonStyles.colors.secondary}}
              open={open}
              icon={open ? 'calendar-today' : 'plus'}
              actions={[
                {
                  icon: 'human-male-male',
                  label: 'Funcionários',
                  onPress: () => navigation.navigate('Barber'),
                },
                {
                  icon: 'clock-time-eight',
                  label: 'Agendar Horário',
                  onPress: () => showModal(),
                },
                {
                  icon: 'clock-fast',
                  label: 'Minhas Reservas',
                  onPress: () => navigation.navigate('MyReservations'),
                },
                {
                  icon: 'clock-start',
                  label: 'Horário de Funcionamento',
                  onPress: () => navigation.navigate('Operation'),
                },
              ]}
              onStateChange={onStateChange}
              onPress={() => {
                if (open) {
                  // do something if the speed dial is open
                }
              }}
            />
          </Portal>
        </View>
      </View>
    </Provider>
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
    padding: 35,
    marginTop: 20,
  },
  cardImg: {},
  ButtonCard: {
    backgroundColor: CommonStyles.colors.primary,
    marginBottom: 15,
  },
  IconButton: {
    margin: -2.5,
  },
});
