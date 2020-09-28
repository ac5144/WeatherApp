import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Header from './components/Header';
import LocationSearch from './components/LocationSearch';

class App extends Component {

	API_KEY = 'af59233bd2f12af5bb5f2a3d6ae34d15';

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

		const url = `https://api.openweathermap.org/data/2.5/forecast?zip=${this.state.location},us&units=imperial&appid=${this.API_KEY}`;

		fetch(url)
			.then(res => res.json())
			.then(weatherData => this.setState({weatherData}))
			.catch(err => console.log(err));
	}

	render() {

		return(
			<View>
				<Header />
				<LocationSearch
					setLocation={this.setLocation}
				/>
			</View>
		);
	}
}

export default App;
