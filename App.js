import { StackNavigator } from "react-navigation";

import PaginaPessoa from "./src/pages/PaginaPessoa";
import PaginaPessoaDetalhes from "./src/pages/PaginaPessoaDetalhes";

// import maiusculaPrimLetra from "./src/util/maiusculaPrimeiraLetra"
import {maiusculaPrimLetra} from "./src/util"

/*StackNavigator recebe 2 parametros
- Declaramos as paginas
- Opçoes globais
*/
export default StackNavigator({
  "PaginaPrincipal": {
    screen: PaginaPessoa
  },
  "ChaveDetalhePessoas": {
    screen: PaginaPessoaDetalhes,
    /*navigationOptions: {
      title: "PaginaPessoaDetalhes"
    }
    Ou podemos passar uma função que retorne um objeto "navigation"
    */
    // navigationOptions: ({navigation}) => {
    navigationOptions: ({navigation}) => {

      // acessando o objeto recebido da "PaginaPessoa.js" - this.props.navigation.navigate("ChaveDetalhePessoas", paginaParams) - navegacao é o objeto paginaParams
      const nomePessoa = navigation.state.params.pessoas.name.first;
      return ({
        title: maiusculaPrimLetra(nomePessoa),
        headerTitleStyle: {
          color: "#fff",
          fontSize: 30
        }
      });
    }
  }
},{
  /*Configuração do Header*/
  navigationOptions: {
    title: "Pessoas",
    headerTintCOlor: "fff", // cor default para o texto do header nos outros componentes
    headerStyle: {
      backgroundColor: "#BFEBFF",
      borderBottomWidth: 1,
      borderColor: "#C5C5C5"
    },
    headerTitleStyle: {
      color: "#fff",
      fontSize: 30,
      alignSelf: "center"
    }
  }
});

// export default PaginaPessoa;