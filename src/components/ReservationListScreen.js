import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {List} from 'react-native-paper';
import {server} from '../services/Axios';

export default props => {
  const [data, setData] = useState([]);

  // Modal
  function showModal(value) {
    return value;
  }

  useEffect(() => {
    async function getItems() {
      try {
        const res = await fetch(`${server}/reservation`);
        const json = await res.json();
        setData(json.reservations);
      } catch (error) {
        console.warn(error);
      }
    }
    getItems();
  }, []);

  function getReservationItems({item: myRes}) {
    return (
      <List.Item
        key={myRes.id}
        title={myRes.name}
        description={`${myRes.date} - ${myRes.time} \n${myRes.service}`}
        onPress={() => {
          const aux = showModal(props.value);
          props.funcao(aux);
        }}
      />
    );
  }

  return (
    <View>
      <FlatList
        keyExtractor={item => `${item.id}`}
        data={data}
        renderItem={getReservationItems}
      />
    </View>
  );
};
