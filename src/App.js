import React, { Component } from 'react';
import EinsteinQuoteComponent from './EinsteinQuoteComponent'
import CatComponent from './CatComponent'
import MouseComponent from './MouseComponent'


class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				<CatComponent />
				<EinsteinQuoteComponent />
				<MouseComponent />
				
				{/* one more component missing */}
			</div>
		);
	}
}

export default App;
