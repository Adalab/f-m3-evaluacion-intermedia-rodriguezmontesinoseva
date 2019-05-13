import React, { Component } from 'react';
import './../stylesheets/index.scss';
import Pokemon from './Pokemon';

class PokeList extends Component {
    render() {
        const { arrPokemon } = this.props;
        const arrayOfPokemon = arrPokemon.map((element, index) => {
            return <li key={index}>
                <Pokemon
                    name={element.name}
                    image={element.url}
                    types={element.types}
                />
            </li>
        });

        return (
            <ul className="item-list">
                {arrayOfPokemon};
				</ul>
        );
    }
}

export default PokeList;