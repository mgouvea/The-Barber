import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  Button,
  FAB,
  Card,
  Appbar,
  Title,
  Avatar,
  Modal,
  Portal,
  Provider,
  Snackbar,
  IconButton,
} from 'react-native-paper';
import ReservationListScreen from '../components/ReservationListScreen';
import CommonStyles from '../CommonStyles';
import {Rating, AirbnbRating} from 'react-native-ratings';

export default ({navigation}) => {
  // Show Modal
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  function modalProps(value) {
    value = showModal();
  }

  // Show SnackBar
  const [visibleSnack, setVisibleSnack] = React.useState(false);
  const onToggleSnackBar = () => setVisibleSnack(!visible);
  const onDismissSnackBar = () => setVisibleSnack(false);

  // rating
  const [ratingPoints, setRatingPoints] = React.useState(3);
  function ratingCompleted(rating) {
    setRatingPoints(rating);
  }

  return (
    <View style={styles.body}>
      <Provider>
        <Appbar.Header style={styles.appBar}>
          <Appbar.BackAction
            onPress={() => {
              navigation.navigate('HomePage');
            }}
          />
          <Appbar.Content title="Minhas Reservas" />
        </Appbar.Header>

        <View style={styles.bodyNCards}>
          <View>
            <Avatar.Image
              source={{
                uri:
                  'https://scontent.fbsb27-1.fna.fbcdn.net/v/t31.18172-8/11187829_850412135034145_4529791987170154426_o.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=1AfOwTmlUyMAX9XOj2A&_nc_ht=scontent.fbsb27-1.fna&oh=6a99801c544aba32b1f7825ada1a350d&oe=608F1074',
              }}
              size={70}
            />
          </View>

          <Card style={styles.cardPage}>
            <Card.Title title="Cortes marcados " />
            <ReservationListScreen funcao={modalProps} />
          </Card>
        </View>

        <IconButton
          style={styles.fab}
          size={20}
          icon="information-outline"
          color="white"
          onPress={onToggleSnackBar}>
          {visibleSnack ? 'Hide' : 'Show'}
        </IconButton>

        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={styles.containerStyle}>
            <Text>Avaliar atendimento</Text>
            {/* <Rating
              defaultRating={0}
              ratingColor="#F7B436"
              ratingBackgroundColor="#c8c7c8"
              ratingCount={5}
              imageSize={30}
              onFinishRating={ratingCompleted}
              style={{paddingVertical: 10}}
            /> */}
            <AirbnbRating
              count={5}
              reviews={['Ruim', 'Rasoável', 'Bom', 'Muito Bom', 'Excelente']}
              defaultRating={ratingPoints}
              onFinishRating={ratingCompleted}
              size={20}
            />
          </Modal>
        </Portal>

        <View style={styles.Snackbar}>
          <Snackbar
            visible={visibleSnack}
            onDismiss={onDismissSnackBar}
            action={{
              label: 'OK',
              onPress: () => {
                // Do something
              },
            }}>
            Clique na reserva para avaliar
          </Snackbar>
        </View>
      </Provider>
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: CommonStyles.colors.backgroundColor,
  },
  bodyNCards: {
    padding: 20,
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
  containerStyle: {
    backgroundColor: CommonStyles.colors.backgroundColor,
    padding: 20,
    marginHorizontal: 20,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: CommonStyles.colors.secondary,
  },
  Snackbar: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
