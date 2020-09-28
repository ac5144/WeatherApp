import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {

	return(
		<View style={styles.header}>
			<Text style={styles.headerText}>Weather Forecast</Text>
		</View>
	);
}

const styles = StyleSheet.create({

	header: {

		backgroundColor: 'midnightblue',
		padding: 15
	},
	headerText: {

		color: 'white',
		fontSize: 20,
		textAlign: 'center',
	}
});

export default Header;
