import React from "react";
import {StyleSheet, View, Text, Image} from "react-native";

// import maiusculaPrimLetra from "../util/maiusculaPrimLetra";
/*PARA IMPORTAR COMO DESTRUCT IGUAL ACIMA "import {StyleSheet} from ... ; É NECESSARIO COLOCAR A PASTA PARA O NODE IMPORTAR NO CASO: "util" QUE É ONDE ESTÁ A FUNÇÃO
É NECESSARIO ADICIONAR A IMPORTAÇÃO NUM ARQUIVO CHAMADO "index.js" QUE É ONDE O NODE JS PROCURA A PASTA IMPORTADA*/
import { maiusculaPrimLetra } from "../util";

const ListaPessoasItem = props => {
	const {pessoas} = props;
	const {title, first, last} = pessoas.name;
	return (
		<View style={estilo.linha}>
			<Image style={estilo.avatar} source={{ uri: pessoas.picture.thumbnail }} />
			<Text style={estilo.linhaText}>{ `${maiusculaPrimLetra(title)} ${maiusculaPrimLetra(first)} ${maiusculaPrimLetra(last)}` }</Text>
		</View>
	);
}

const estilo = StyleSheet.create ({
	linha:{
		height: 60,
		borderBottomWidth: 1,
		borderBottomColor: "#bbb",
		alignItems: "center",
		flexDirection: "row"
	},
	linhaText:{
		fontSize: 20,
		paddingLeft: 15,
		flex: 7
	},
	avatar:{
		aspectRatio: 1, // ESSA PROPRIEDADE É PARA QUE O REACT NÃO DISTORÇA A IMAGEM, OU SEJA MANTEM A PROPORÇÃO
		flex: 1,

		marginLeft: 15,
		borderRadius: 50

	}
})

export default ListaPessoasItem;