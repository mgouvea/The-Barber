import Plataform from 'react-native';

const server =
  Plataform.OS === 'ios' ? 'http://localhost:3001' : 'http://10.0.2.2:3001';

export {server};
