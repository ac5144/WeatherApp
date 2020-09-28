import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/dist/FontAwesome';

const LocationSearch = () => {

	return (

		<View style={styles.searchView}>
			<TextInput
				placeholder="Search location..."
				style={styles.searchInput}
			/>
			<TouchableOpacity style={styles.searchBtn}>
				<Text style={styles.searchBtnText}>
					<Icon name="search" size={20} />
				</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({

	searchView: {

		flexDirection: 'row',
		padding: 15
	},
	searchInput: {

		flex: 9,
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: 'dodgerblue',
		fontSize: 16,
		padding: 10
	},
	searchBtn: {

		flex: 1,
		backgroundColor: 'dodgerblue',
		padding: 10,
		alignItems: 'center'
	},
	searchBtnText: {

		color: 'white'
	}
});

export default LocationSearch;
