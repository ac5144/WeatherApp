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

	const changeView = () => {

		setDetailed(!detailed);
	}
	const getAverageTemp = () => {
		if(!weatherData) {
			return;
		}

		let sum = 0;

		for (let i = 0; i < weatherData.length; i++) {
			sum += weatherData[i].main.temp;
		}

		return sum / weatherData.length;
	}

	const detailedView = <View style={styles.detailedView}>
							{weatherData.map((data, index) =>
								<View key={index} style={styles.hourView}>
									<Text style={styles.hourTextSmall}>{new Date(data.dt * 1000).getHours()}:00</Text>
									<Text style={styles.hourTextSmall}>{((data.main.temp_min + data.main.temp_max) / 2).toFixed(0) + '\u00b0' + 'F'}</Text>
									<Text style={styles.hourTextBig}>Humidity: {data.main.humidity}%</Text>
									<Text style={styles.hourTextSmall}>{data.weather[0].main}</Text>
								</View>
							)}
						 </View>

	return (
		<TouchableOpacity
			style={styles.forecastContainer}
			onPress={changeView}
		>
			<View style={styles.simpleView}>
				<Text style={styles.dateText}>{`${date.getMonth() + 1}/${date.getDate()}`}</Text>
				<Text style={styles.tempText}>{`${getAverageTemp().toFixed(0) + '\u00b0'}F`}</Text>
			</View>
			{detailed && detailedView}
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	forecastContainer: {
		margin: 15,
		padding: 5,
		borderStyle: 'solid',
		borderBottomWidth: 1,
		borderBottomColor: 'midnightblue'
	},
	dateText: {
		fontSize: 16
	},
	tempText: {
		fontSize: 16,
		fontWeight: 'bold'
	},
	simpleView: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	detailedView: {
		marginTop: 10,
		flex: 1
	},
	hourView: {
		flexDirection: 'row'
	},
	hourTextSmall: {
		flex: 1,
		fontSize: 14
	},
	hourTextBig: {
		flex: 2,
		fontSize: 14
	}
});

export default DayForecast;
