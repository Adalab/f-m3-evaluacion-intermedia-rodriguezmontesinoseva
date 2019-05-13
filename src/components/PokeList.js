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
            <div>
                <h1>Mi lista de Pokemon</h1>
                <ul className="item-list">


                    {arrayOfPokemon};
				</ul>
            </div>
        );
    }
}

export default PokeList;