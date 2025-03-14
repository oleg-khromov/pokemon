import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2";

const getPokemonByUrl = async (url: string) => {
  const {
    data: { id, name, types, sprites },
  } = await axios.get(url);
  return {
    id,
    name,
    types: types.map((t: any) => t.type.name),
    sprite: sprites.front_default,
  };
};

export const getPokemonList = async (limit: number, offset: number) => {
  const response = await axios.get(
    `${API_URL}/pokemon?limit=${limit}&offset=${offset}`
  );
  const result = await Promise.all(
    response.data.results.map(async (pokemon: any) =>
      getPokemonByUrl(pokemon.url)
    )
  );
  return result;
};

export const getPokemonTypes = async () => {
  const response = await axios.get(`${API_URL}/type`);
  return response.data.results.map((type: any) => type.name);
};
