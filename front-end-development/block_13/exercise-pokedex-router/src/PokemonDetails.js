import React from "react";
import Pokemon from "./Pokemon";

class PokemonDetails extends React.Component {
  fetchFilteredPokemons() {
    const { pokemons } = this.props;
    const pokemonId = parseInt(this.props.location.pathname.match(/\d+/)[0]);

    return pokemons.filter((pokemon) => {
      return pokemon.id === pokemonId;
    });
  }

  render() {
    const pokemon = this.fetchFilteredPokemons()[0];
    return (
      <div className="pokedex">
        {console.log(this.props)}
        {console.log(typeof this.props.location.pathname.match(/\d+/)[0])}
        {console.log(this.props.pokemons)}
        {console.log(this.fetchFilteredPokemons())}
        {console.log(pokemon)}
        <Pokemon pokemon={this.fetchFilteredPokemons()[0]} />
        <p>{pokemon.summary}</p>
        <ul>
          {pokemon.foundAt.map((e) => (
            <li key={e.location}>
              <img src={e.map} alt="Pokemon Found at Map" />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PokemonDetails;
