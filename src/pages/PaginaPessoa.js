import React from 'react';
import { Text, View } from 'react-native';

/*NÃO SERA MAIS USADO ESSE COMPONENTE, POIS ESTAMOS USANDO UM COMPONENTE PROPRIO PARA NAVEGAÇÃO*/
// import Cabecalho from "../components/Cabecalho";
import ListaPessoas from "../components/ListaPessoas";

import axios from "axios"; // agora ja tenho acesso ao objeto axios

export default class PaginaPessoa extends React.Component {
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
      .get("https://randomuser.me/api/?nat=br&results=1500") // Trazendo 1500 registros
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
    // ENVIADA ESSA FUNÇÃO PARA: F:\kiu\Projetos\ReactNative\listaDePessoas\src\components\ListaPessoasItem.js
    // this.props.navigation.navigate(/* Chave da página */, /* state */)
    // this.props.navigation.navigate("ChaveDetalhePessoas");
    return (
      <View>
        {/*<Cabecalho
          titulo="Usuários"
        />*/}
        <ListaPessoas 
          pessoas={this.state.pessoas}          
          //clicouItem={() => {
          //  this.props.navigation.navigate("ChaveDetalhePessoas")
          //}}

          /*this.props.navigation.navigate("ChaveDetalhePessoas")
          Esse navigate() recebe 2 parametros
          - a chave da pagina (nome/id) que foi declarado no App.js
          - um parametro que volta para o Navigation do App.js em que podemos setar o titulo da pagina por ex
          
          - Entao vamos passar o parametro "paginaParams" tb*/
          clicouItem={paginaParams => {
            this.props.navigation.navigate("ChaveDetalhePessoas", paginaParams) /* Esse "paginaParams" foi para a App.js - vamos acessar atraves do objeto "navigation" - navigationOptions: ({navigation})
            - Assim que passamos dados de uma pagina para outra
            */
          }}
        />
      </View>
    );
  }
}