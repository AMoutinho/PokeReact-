import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './style.js';

const RotuloEvolucao = (props) => {
  return (
    <View>
      <Text style={styles.titulo}>{props.titulo}</Text>
    </View>
  );
};

export default RotuloEvolucao;