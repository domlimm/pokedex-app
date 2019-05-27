import React, { Component } from 'react';
import classes from './Pokecard.module.css';

// const POKE_API =
//   'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

const padToThree = number => (number <= 999 ? `00${number}`.slice(-3) : number);

class Pokecard extends Component {
  render() {
    let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;

    return (
      <div className={classes.Pokecard}>
        <h1 className={classes.Pokecard_title}>{this.props.name}</h1>
        <div className={classes.Pokecard_image}>
          <img src={imgSrc} alt={this.props.name} />
        </div>
        <div className={classes.Pokecard_data}>Type: {this.props.type}</div>
        <div className={classes.Pokecard_data}>EXP: {this.props.exp}</div>
      </div>
    );
  }
}

export default Pokecard;
