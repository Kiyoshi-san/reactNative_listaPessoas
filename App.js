import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Cabecalho from "./src/components/Cabecalho";
import Lista from "./src/components/Lista";


export default class App extends React.Component {
  render() {
    return (
      <View>
        <Cabecalho
          titulo="Usuários"
        />
        <Lista />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
