import api from "services/api";

export const getPokemonByUrl = async (url: string) => {
  const {
    data: { id, name, types, sprites, abilities, stats },
  } = await api.get(url);
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

export const getPokemons = async () => {
  const {
    data: { count: maxLimit },
  } = await api.get(`pokemon?limit=${1}&offset=${1}`);
  const {
    data: { results, count },
  } = await api.get(`pokemon?limit=${maxLimit}&offset=${0}`);
  return { data: results, count: count };
};

// export const getPokemons = async (limit: number, offset: number) => {
//   const {
//     data: { results, count },
//   } = await api.get(`pokemon?limit=${limit}&offset=${offset}`);
//   return { data: results, count: count };
// };

export const getPokemonsByType = async (type: string) => {
  const { data } = await api.get(`type/${type}`);
  const result = data.pokemon.map((p: any) => p.pokemon);
  return { data: result, count: result.length };
};

export const getPokemonTypes = async () => {
  const { data } = await api.get(`type`);
  return data.results.map((type: any) => type.name);
};
