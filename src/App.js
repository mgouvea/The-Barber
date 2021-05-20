import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider as PaperProvider} from 'react-native-paper';
import HomePage from './views/HomePage';
import Services from './views/Services';
import Location from './views/Location';
import Operation from './views/Operation';
import Barbers from './views/Barbers';
import ModalReservation from './components/ModalReservation';
import MyReservations from './views/MyReservations';

const Stack = createStackNavigator();

export default () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="HomePage"
          // initialRouteName="Location"
          // initialRouteName="Services"
          // initialRouteName="Operation"
          // initialRouteName="Barber"
          // initialRouteName="Modal"
          // initialRouteName="MyReservations"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="HomePage" component={HomePage} headerShown />
          <Stack.Screen name="Services" component={Services} />
          <Stack.Screen name="Location" component={Location} />
          <Stack.Screen name="Operation" component={Operation} />
          <Stack.Screen name="Barber" component={Barbers} />
          <Stack.Screen name="Modal" component={ModalReservation} />
          <Stack.Screen name="MyReservations" component={MyReservations} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};
