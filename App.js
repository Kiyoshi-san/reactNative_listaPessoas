import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Cabecalho from "./src/components/Cabecalho";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Cabecalho
          titulo="Usuários"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
