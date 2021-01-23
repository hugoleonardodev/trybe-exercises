import React from 'react'
import pokemons from './data'
import PropTypes from 'prop-types'

const arrayPokemonsWithRequiredDatas = pokemons.reduce((acc, cur) => {
  const a = { 
    image: cur.image, name: cur.name, type: cur.type,
    "average weight": cur.averageWeight.value + ' ' + cur.averageWeight.measurementUnit
  };

  const array = [];
  array.push(a.name);
  array.push(a.type);
  array.push(a["average weight"]);
  array.push(a.image);

  acc.push(array);

  return acc;
}, []);

class Pokemons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value:  arrayPokemonsWithRequiredDatas
    }
  }

  createListElement() {
    return arrayPokemonsWithRequiredDatas.map(e =>
      <li key={e[0]}>
        <img src={e[3]} alt={e[0]}/>
        <div id="infos-container">
          <div id="infos">
            <h3>Name:</h3><p>{e[0]}</p>
          </div>
          <div id="infos">
            <h3>Type:</h3><p>{e[1]}</p>
          </div>
          <div id="infos">
            <h3>Average Weight:</h3><p>{e[2]}</p>
          </div>
        </div>
      </li>
    );
  }

  render() { 
    return (
      <ol>
        {this.createListElement()}
      </ol>
    );
  }
}

Pokemons.propTypes = {
  optionalArray: PropTypes.array,
  optionalNode: PropTypes.node,
  optionalElement: PropTypes.element,
  optionalElementType: PropTypes.elementType,
  optionalEnum: PropTypes.oneOf(['News', 'Photos']),
  requiredAny: PropTypes.any.isRequired,
};

export default Pokemons;