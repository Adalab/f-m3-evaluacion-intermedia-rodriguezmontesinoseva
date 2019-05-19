import React, { Component } from 'react';
import './../stylesheets/index.scss';
import PokeList from './PokeList';
import { pokemon } from '../services/arrPokemon'

class App extends Component {
	render() {
		return (
			<div>
				<h1 className="title">Mi lista de Pokemon</h1>
				<PokeList arrPokemon={pokemon} />
			</div>
		);
	}
}

export default App;

