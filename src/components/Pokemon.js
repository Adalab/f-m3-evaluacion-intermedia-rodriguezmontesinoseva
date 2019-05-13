import React, { Component } from 'react';
import './../stylesheets/index.scss';
import PokeList from './PokeList';

class Pokemon extends Component {
    render() {
        const { image, name, types } = this.props;
        return (
            <div className="item">
                <img src={image} alt="" />
                <p>{name}</p>
                <div>
                    <span className="powers">{types}</span>
                </div>

            </div>
        );
    }
}

export default Pokemon;