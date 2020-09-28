import React, { Component } from 'react';
import {
	StyleSheet,
	ScrollView,
	Text,
	View,
} from 'react-native';

import Header from './components/Header';
import LocationSearch from './components/LocationSearch';
import DayForecast from './components/DayForecast';

class App extends Component {
	API_KEY = 'af59233bd2f12af5bb5f2a3d6ae34d15';
	units = 'imperial';

	constructor(props) {
		super(props);

		this.state = {
			location: '',
			weatherData: null,
			slicedWeatherData: [],
			error: false,
			errorMsg: ''
		}
	}

	setLocation = (newLocation) => {
		const newState = {
			...this.state,
			location: newLocation
		}
		this.setState(newState, this.fetchWeatherData);
	}

	fetchWeatherData = () => {
		if (!this.API_KEY || !this.state.location) {
			return;
		}

		const url = `https://api.openweathermap.org/data/2.5/forecast?zip=${this.state.location},us&units=${this.units}&appid=${this.API_KEY}`;

		fetch(url)
			.then(res => res.json())
			.then(weatherData => {
				let newState = {
					...this.state
				};
				
				if (weatherData.cod !== "200") {
					weatherData: null,
					newState.slicedWeatherData = []
					newState.error = true;
					newState.errorMsg = weatherData.message;
				} else {
					newState.weatherData = weatherData;
					newState.slicedWeatherData = this.sliceHourlyWeatherData(weatherData);
					newState.error = false;
					newState.errorMsg = '';
				}

				this.setState(newState);
			})
			.catch(err => console.log(err));
	}

	sliceHourlyWeatherData = (weatherData) => {
		const slicedWeatherData = [];
		const interval = 8;

		if (weatherData) {
			for (let i = 0; i < weatherData.list.length; i = i + interval) {

				slicedWeatherData.push(weatherData.list.slice(i, i + interval));
			}
		}

		return slicedWeatherData;
	}

	render() {

		return(
			<View style={styles.container}>
				<Header />
				<LocationSearch setLocation={this.setLocation} />
				<ScrollView>
					{this.state.error && <Text style={styles.errorText}>There was an error: {this.state.errorMsg}</Text>}
					{this.state.slicedWeatherData.map((weatherData, index) => <DayForecast key={index} weatherData={weatherData} />)}
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	errorText: {
		padding: 15,
		fontSize: 16,
		color: 'firebrick'
	}
})

export default App;
