import { useState } from 'react';

export const BuscarPokemon = ({ handleGetPokemon }) => {
  const [pokemonesId, setPokemonesId] = useState('');

  return (
    <>
      <div className="d-flex flex-row justify-content-center align-items-center mt-3 mb-4 text-bg-secondary">
      </div>
      <div className="container">
        <div className="d-flex flex-row justify-content-center align-items-center mt-3">
          <form className="d-flex" onSubmit={(e) => { handleGetPokemon(e, pokemonesId) }}>
            <input
              type="text"
              className="form-control me-2"
              onChange={(e) => { setPokemonesId(e.target.value.toLowerCase()) }}
              placeholder="Ingrese nombre o ID"
            />
            <input
              type="submit"
              value="Buscar"
              className="btn btn-outline-success" 
            />
          </form>
        </div>
      </div>
    </>
  )
}


 




