import React, { useState } from 'react';
import {
	StyleSheet ,
	Text,
	TouchableOpacity,
	View
} from 'react-native';

const DayForecast = ({weatherData}) => {

	const [detailed, setDetailed] = useState(false);

	const date = new Date(weatherData[0].dt * 1000);

	const simpleView = <Text style={styles.forecastText} >{`${date.getMonth() + 1}/${date.getDate()}`}</Text>
	const detailedView = weatherData.map((data, index) => <Text style={styles.forecastText} key={index}>{JSON.stringify(data)}</Text>)

	const changeView = () => {

		setDetailed(!detailed);
	}

	return (
		<TouchableOpacity
			style={styles.forecastContainer}
			onPress={changeView}
		>
			{detailed ? detailedView : simpleView}
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	forecastContainer: {
		margin: 15,
		padding: 10,
		borderStyle: 'solid',
		borderBottomWidth: 1,
		borderBottomColor: 'midnightblue'
	},
	forecastText: {
		fontSize: 16
	}
});

export default DayForecast;
