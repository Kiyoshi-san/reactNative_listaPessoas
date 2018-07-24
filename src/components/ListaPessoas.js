import React from "react";
import { StyleSheet, FlatList, Text } from "react-native";

import ListaPessoasItem from "./ListaPessoasItem";

const ListaPessoas = props => {
	const { pessoas, clicouItem } = props;
	/*const nomeElementos = pessoas.map(pessoas => {
		const { first } = pessoas.name;
		return (
			<FlatList key={ first } style={estilo.linha}>
				<Text style={estilo.linhaText}>{ first }</Text>
		);
	});*/


	// ALTERADO PARA O "FlatList"
	/*const itens = pessoas.map(pessoas => {
		return <ListaPessoasItem 
			key={pessoas.name.first} 
			pessoas={pessoas} 
			irParaDetalhes={clicouItem}
		/>
	})*/

	return (
		/*<View style={estilo.container}>
			{ itens }
		</View>*/
		/*
			HÁ 2 PROPS QUE DEVERÃO SER PASSADOS NO FLATLIST
			- DATA - ESPERA UM ARRAY DE ITENS
			- RENDERITEM - É CHAMADO QUANDO ESTA SENDO FEITO O SCROLL PARA QUE RENDERIZE MAIS ITEMS - CHAMANDO A FUNÇÃO QUE ESTÁ SENDO INSTANCIADA PELA "renderItem"
		*/
		<FlatList
			style={estilo.container} 
			data={pessoas}
			renderItem={({ item }) => (
				<ListaPessoasItem 
					pessoas={item} 
					irParaDetalhes={clicouItem}
				/>
			)}
		/>
	)
};

/**/

const estilo = StyleSheet.create({
	container:{
		backgroundColor: "#e7f6fd"
	}
});



export default ListaPessoas;
