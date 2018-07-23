import React from "react";
import { StyleSheet, View, Text } from "react-native";

import ListaPessoasItem from "./ListaPessoasItem";

const ListaPessoas = props => {
	const { pessoas } = props;
	/*const nomeElementos = pessoas.map(pessoas => {
		const { first } = pessoas.name;
		return (
			<View key={ first } style={estilo.linha}>
				<Text style={estilo.linhaText}>{ first }</Text>
			</View>
		);
	});*/

	const itens = pessoas.map(pessoas => {
		return <ListaPessoasItem 
			key={pessoas.name.first} 
			pessoas={pessoas} 
		/>
	})

	return (
		<View style={estilo.container}>
			{ itens }
		</View>
	)
};

/**/

const estilo = StyleSheet.create({
	container:{
		backgroundColor: "#6879f6"
	}
});



export default ListaPessoas;
