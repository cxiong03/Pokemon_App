// useState enables us to store state in our function component
import React, {useState} from 'react';
import PokemonList from './PokemonList';

function App() {
  // pokemon will be our actual data while setPokemon will be the way which allows
  // us to update the list when we go to another page
  
  // to see how our app will look like we will add some default state of two different pokemon
  const [pokemon, setPokemon] = useState(['bulbasaur', 'charmander']);
  return (
    // we want to render PokemonList and pass in the props which is pokemon & it neeeds a list of 
    // all the the pokemon to render so now we are passing our pokemon down to our PokemonList
    <PokemonList pokemon={pokemon} />
  );
}

export default App;
