// useState enables us to store state in our function component
import React, {useState, useEffect} from 'react';
import PokemonList from './PokemonList';
import axios from 'axios';

function App() {
  // pokemon will be our actual data while setPokemon will be the way which allows
  // us to update the list when we go to another page
  
  // set the useState as an empty array because pokemon is undefined by default
  const [pokemon, setPokemon] = useState([]);
  // this state tracks our current page we are on
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true) // by default our page is loading

  // this function runs everytime base on the props we passed in the array down on line 18.
  useEffect(() => {
    setLoading(true)// everytime we make a request loading is true
    let cancel
    axios.get(currentPageUrl, { cancelToken: new axios.CancelToken(c => cancel = c) 
    }).then(res => {
      setLoading(false)//after request is successful meaning we got our data we set loading to false we no longer am loading anything
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
      setPokemon(res.data.results.map(p => p.name))
    })

    // cancel our request everytime we make a new request
    return () => cancel()
    // we pass an array of arguement & everytime our argument change it will rerun our effect
  }, [currentPageUrl]) // we leave the array empty becasue we don't want our effect to rerender itself so the effect runs one single time
                      // now our code is saying evertime currentPageUrl changes rerun the code inside of it
                      // and if it doesn't change don't bother rerunning the code
  if (loading) return "Loading..."

  return (
    // we want to render PokemonList and pass in the props which is pokemon & it neeeds a list of 
    // all the the pokemon to render so now we are passing our pokemon down to our PokemonList
    <PokemonList pokemon={pokemon} />
  );
}

export default App;
