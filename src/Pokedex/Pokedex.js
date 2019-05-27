import React, { Component } from 'react';
import Pokecard from '../Pokecard/Pokecard';
import classes from './Pokedex.module.css';

class Pokedex extends Component {
  render() {
    let title;
    if (this.props.isWinner) {
      title = <h1 className={classes.Pokedex_winner}>Winning Hand</h1>;
    } else {
      title = title = <h1 className={classes.Pokedex_loser}>Losing Hand</h1>;
    }
    return (
      <div className={classes.Pokedex}>
        {title}
        <h4>Total Experience: {this.props.exp}</h4>
        <div className={classes.Pokedex_cards}>
          {this.props.pokemon.map(p => {
            let type =
              p.type.charAt(0).toUpperCase() + p.type.slice(1).toLowerCase();
            return (
              <Pokecard
                id={p.id}
                name={p.name}
                type={type}
                exp={p.base_experience}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Pokedex;
