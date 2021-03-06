import * from 'react'
import { Component } from 'react';

import './styles/App.css';
import Weather from './Weather';

const logo = require('./assets/logo.svg');

class App extends Component {
render() {
return (
<div className ="App">
		<header className="App-header'>
			<img src={logo} className="App-logo" alt="logo" />
			<h1 className="App-title">Shoe local weather</h1>
		</header>
		<Weather />
	</div>
	);
	}
}

export default App;


