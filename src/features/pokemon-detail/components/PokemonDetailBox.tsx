import { FC } from "react";

interface Pokemon {
  id: number;
  name: string;
  types: string[];
  sprite: string;
  abilities: string[];
  stats: { name: string; value: number }[];
}

interface PokemonDetailProps {
  pokemon: Pokemon;
}

const PokemonDetailBox: FC<PokemonDetailProps> = ({
  pokemon: { name, types, abilities, stats, sprite },
}) => {
  return (
    <div className="flex gap-4">
      <img src={sprite} alt={name} className="w-32 h-32" />
      <div>
        <h1 className="text-2xl font-bold mb-4 uppercase">{name}</h1>
        <p>
          <b>Type(s):</b> {types.join(", ")}
        </p>
        <p>
          <b>Abilities:</b> {abilities.join(", ")}
        </p>
        <h2 className="mt-4 font-bold">Stats:</h2>
        <ul>
          {stats.map(({ name, value }) => (
            <li key={name}>
              {name}: {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokemonDetailBox;
