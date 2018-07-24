import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import Linha from "../components/Detalhes_LinhaTabelaDados";

class PaginaPessoaDetalhes extends React.Component {
	render(){
		/*pessoas vindo de "ListaPessoasItem.js" - irParaDetalhes({ pessoas });*/
		const { pessoas } = this.props.navigation.state.params;
		return(
			<View style={estilo.container}>

				<Image source={{ uri: pessoas.picture.large }}
					style={ estilo.avatar } />
				<View style={estilo.detalheContainer}>
					<Linha label="Email:" conteudo={pessoas.email}/>
					<Linha label="Cidade:" conteudo={pessoas.location.city}/>
					<Linha label="Estado:" conteudo={pessoas.location.state}/>
					<Linha label="Tel:" conteudo={pessoas.location.phone}/>
					<Linha label="Cel:" conteudo={pessoas.location.cel}/>
					<Linha label="Nacionalidade:" conteudo={pessoas.nat}/>
				</View>
			</View>
		);
	}
}

const estilo = StyleSheet.create({
	avatar: {
		aspectRatio: 1,
		borderRadius: 200,
		borderStyle: "solid",
	    borderWidth: 5,
		borderColor: "#d8e7ea"
	},
	container: {
		padding: 15
	},
	detalheContainer: {
		backgroundColor: "#e2f9ff",
		marginTop: 20,
		elevation: 1
	}
});

export default PaginaPessoaDetalhes;