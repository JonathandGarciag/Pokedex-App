export const reqPokemon = async (pokemonesId) => {
  try {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonesId.toLowerCase()}`);
    if (!resp.ok) {
      throw new Error(`Error: ${resp.status}`);
    }

    const data = await resp.json();
    const pokemon = {
      id: data.id,
      name: data.name,
      sprite: data.sprites.other.home.front_default,
      abilities: data.abilities.map(ability => ability.ability.name),
      types: data.types.map(typeInfo => typeInfo.type.name)
    };

    return pokemon;
  } catch (error) {
    console.error('Error Pokemon No Encontrado:', error); 
    return null;
  }
}




