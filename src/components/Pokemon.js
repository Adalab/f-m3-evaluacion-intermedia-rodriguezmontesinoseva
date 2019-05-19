import React, { Component } from 'react';
import './../stylesheets/index.scss';

class Pokemon extends Component {
    render() {
        const { image, name, types } = this.props;
        return (
            <div className="item">
                <img src={image} alt="" />
                <h2 className="item-name">{name}</h2>
                <div>
                    <span className="powers">{types.map(element => <p className="item-powers">{(element).toUpperCase()}</p>)}</span>
                </div>

            </div>
        );
    }
}

export default Pokemon;