import { StackNavigator } from "react-navigation";

import PaginaPessoa from "./src/pages/PaginaPessoa";
import PaginaPessoaDetalhes from "./src/pages/PaginaPessoaDetalhes";


export default StackNavigator({
  "PaginaPrincipal": {
    screen: PaginaPessoa
  },
  "ChaveDetalhePessoas": {
    screen: PaginaPessoaDetalhes
  }
},{
  /*Configuração do Header*/
  navigationOptions: {
    title: "Pessoas",
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