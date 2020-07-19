import React from 'react'

// we are destructuring props.pokemon to just pokemon which is a variable
export const PokemonList = ({ pokemon }) => {
    return (
        <div>
            /* here we are rendering the information from pokemon & loop through
            all these using map & for each pokemon in that collection
            */
            {pokemon.map(p => (
                /* p variable is just a list of array of names */
                /* in react we need a key for everything inside of the array 
                and the key must be unique to each element*/
                <div key={p}>{p}</div>
            ))}
        </div>
    )
}
export default PokemonList;