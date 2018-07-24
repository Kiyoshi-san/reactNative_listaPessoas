import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

class PaginaPessoaDetalhes extends React.Component {
	render(){
		/*pessoas vindo de "ListaPessoasItem.js" - irParaDetalhes({ pessoas });*/
		const { pessoas } = this.props.navigation.state.params;
		return(
			<View style={estilo.container}>

				<Image source={{ uri: pessoas.picture.large }}
					style={ estilo.avatar } />
				<View style={estilo.detalheContainer}>
					<View style={estilo.linha}>
						<Text style={estilo.celulaLabel}>E-mail: </Text>
						<Text style={estilo.celulaConteudo}>{ pessoas.email }</Text>
					</View>
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
	},
	linha: {
		flexDirection: "row", // como default é "column"
		paddingTop: 3,
		paddingBottom: 3,
		borderWidth: 1,
		borderColor: "#e2f9ff"
	},
	celulaLabel: {
		fontSize: 18,
		paddingLeft: 5,
		fontWeight: "bold"
	},
	celulaConteudo: {
		fontSize: 18,
		paddingLeft: 5
	}
});

export default PaginaPessoaDetalhes;