import React from 'react';
import { Text, View } from 'react-native';

import Cabecalho from "./src/components/Cabecalho";
import ListaPessoas from "./src/components/ListaPessoas";

import axios from "axios"; // agora ja tenho acesso ao objeto axios

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pessoas: []
    }
  }


  /*VAMOS COLOCAR O OBJETO AXIOS NA FUNÇÇÃO componentDidMount() DO REACT - É UM EVENTO DO TIPO onReady*/
  componentDidMount() {
    axios
      /*get - FAZENDO A CHAMADA ASSINCRONA*/
      .get("https://randomuser.me/api/?nat=br&results=5")
      /*then - CALL BACK
      response é passado pelo axios*/
      .then(response => {
        const { results } = response.data;
        this.setState({
          pessoas: results
        })
      })
  }

  render() {
    return (
      <View>
        <Cabecalho
          titulo="Usuários"
        />
        <ListaPessoas 
          pessoas={this.state.pessoas}
        />
      </View>
    );
  }
}