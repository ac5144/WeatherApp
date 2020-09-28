import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Header from './components/Header';
import LocationSearch from './components/LocationSearch';

class App extends Component {

	render() {

		return(
			<View>
				<Header />
				<LocationSearch />
			</View>
		);
	}
}

export default App;
