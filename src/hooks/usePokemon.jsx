import { useState } from 'react';
import { reqPokemon } from '../services/pokemon';

export const usePokemon = () => {
  const [pokemon, setPokemon] = useState(null); // Inicialmente `null` en lugar de cadena vacía
  const [pokemonesId, setPokemonesId] = useState('');
  const [error, setError] = useState(null);

  const handleGetPokemon = (e, name) => {
    e.preventDefault();
    setError(null);

    reqPokemon(name)
      .then((data) => {
        if (data) {
          setPokemon(data);
          setPokemonesId(name);
        } else {
          setError('El Pokémon No Se Ha Encontrado');
        }
      })
      .catch((error) => { 
        console.error('Error fetching Pokémon:', error);
        setError('Ocurrió un error al buscar el Pokémon');
      });
  };

  return {
    pokemonesId,
    pokemon,
    error,
    handleGetPokemon,
  };
}




