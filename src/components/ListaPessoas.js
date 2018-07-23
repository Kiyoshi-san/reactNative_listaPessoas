import React from "react";
import { StyleSheet, View, Text } from "react-native";

const ListaPessoas = props => {
	const { pessoas } = props;
	const nomeElementos = pessoas.map(pessoas => {
		const { first } = pessoas.name;
		return (
			<View key={ first } style={estilo.linha}>
				<Text style={estilo.linhaText}>{ first }</Text>
			</View>
		);
	});

	return (
		<View style={estilo.container}>
			{ nomeElementos }
		</View>
	)
};


const estilo = StyleSheet.create({
	container:{
		backgroundColor: "#6879f6"
	},
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
	}
});



export default ListaPessoas;
