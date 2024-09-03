import { useState } from 'react';
import { BuscarPokemon } from './BuscarPokemon';
import { ContenedorPokemons } from './ContenedorPokemons';
import { usePokemon } from '../hooks/usePokemon';

export const PokeApp = () => {
  const {handleGetPokemon, pokemon} = usePokemon('')

  return (
    <>
      <div  className="text-center">
        <h1>PokeApp</h1>
        <h2>Pokedex</h2>
        <BuscarPokemon onSearch={handleGetPokemon} />
        <ContenedorPokemons pokemon={pokemon}  />
      </div>
    </>
  )
}

