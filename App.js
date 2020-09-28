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
			weatherData: null
		}
	}

	setLocation = (newLocation) => {
		this.setState({location: newLocation}, this.fetchWeatherData);
	}

	fetchWeatherData = () => {
		if (!this.API_KEY || !this.state.location) {
			return;
		}

		const url = `https://api.openweathermap.org/data/2.5/forecast?zip=${this.state.location},us&units=${this.units}&appid=${this.API_KEY}`;

		fetch(url)
			.then(res => res.json())
			.then(weatherData => this.setState({weatherData}))
			.catch(err => console.log(err));
	}

	sliceHourlyWeatherData = () => {
		const slicedWeatherData = [];
		const interval = 8;

		if (this.state.weatherData) {
			for (let i = 0; i < this.state.weatherData.list.length; i = i + interval) {

				slicedWeatherData.push(this.state.weatherData.list.slice(i, i + interval));
			}
		}

		return slicedWeatherData;
	}

	render() {
		const slicedWeatherData = this.sliceHourlyWeatherData();

		return(
			<View style={styles.container}>
				<Header />
				<LocationSearch setLocation={this.setLocation} />
				<ScrollView>
					{slicedWeatherData.map((weatherData, index) => <DayForecast key={index} weatherData={weatherData} />)}
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})

export default App;
