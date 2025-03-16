import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface Pokemon {
  id: number;
  name: string;
  types: string[];
  sprite: string;
  abilities: string[];
  stats: { name: string; value: number }[];
}

interface PokemonTableProps {
  pokemons: Pokemon[];
}

const PokemonTable: FC<PokemonTableProps> = ({ pokemons }) => {
  const navigate = useNavigate();
  return (
    <table className="min-w-full border-collapse border">
      <thead>
        <tr className="border">
          <th className="border p-1">ID</th>
          <th className="border p-1">Name</th>
          <th className="border p-1">Type(s)</th>
          <th className="border p-1">Image</th>
        </tr>
      </thead>
      <tbody>
        {pokemons.map(({ id, name, types, sprite }) => (
          <tr
            key={id}
            className="cursor-pointer hover:bg-gray-100 border"
            onClick={() => navigate(`/pokemon/${name}`)}
          >
            <td className="border p-1 text-center">{id}</td>
            <td className="border p-1 text-center">{name}</td>
            <td className="border p-1 text-center">{types.join(", ")}</td>
            <td className="border p-1 text-center">
              <img src={sprite} alt={name} className="w-12 h-12 inline-flex" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PokemonTable;
