import React, { Component } from 'react';
import './../stylesheets/index.scss';
import PokeList from './PokeList';
import { pokemon } from '../services/arrPokemon'



class App extends Component {
	render() {
		return (<PokeList arrPokemon={pokemon} />);

	}


}






export default App;

