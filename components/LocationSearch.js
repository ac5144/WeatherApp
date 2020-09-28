import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/dist/FontAwesome';

const LocationSearch = ({setLocation}) => {

	const [locationText, setLocationText] = useState('');

	const onChange = (location) => setLocationText(location);

	return (

		<View style={styles.searchView}>
			<TextInput
				style={styles.searchInput}
				placeholder="Search zip code or city name..."
				onChangeText={onChange}
			/>
			<TouchableOpacity
				style={styles.searchBtn}
				onPress={() => setLocation(locationText)}
			>
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
