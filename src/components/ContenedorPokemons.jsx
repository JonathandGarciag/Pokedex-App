import React from 'react';

export const ContenedorPokemons = ({ pokemon }) => {
  if (!pokemon) {
    return <p>No se encuentra ningún Pokémon</p>;
  }

  return (
    <>
      <div className="card mb-3">
        <div className="row g-0"> 
          <div className="col-md-4">
            <img src={pokemon.sprite} alt={pokemon.name} className="img-fluid" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3>{pokemon.name} (ID: {pokemon.id})</h3>
              <p>Type: {pokemon.types.join(', ')}</p> 
              <p>Ability: {pokemon.abilities.join(', ')}</p> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
}





