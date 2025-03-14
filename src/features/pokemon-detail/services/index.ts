import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2";

export const getPokemonById = async (pokemondId: string) => {
  const {
    data: { id, name, types, sprites, abilities, stats },
  } = await axios.get(`${API_URL}/pokemon/${pokemondId}`);
  return {
    id,
    name,
    types: types.map((t: any) => t.type.name),
    sprite: sprites.front_default,
    abilities: abilities.map((a: any) => a.ability.name),
    stats: stats.map((s: any) => ({
      name: s.stat.name,
      value: s.base_stat,
    })),
  };
};
