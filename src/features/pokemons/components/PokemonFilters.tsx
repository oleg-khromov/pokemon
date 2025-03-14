import React, { useState } from "react";
import { useDebounce } from "hooks/useDebounce";

interface Props {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filterType: string;
  setFilterType: (type: string) => void;
  types: string[];
  isTypesLoading: boolean;
}

const PokemonFilters: React.FC<Props> = ({
  searchTerm,
  setSearchTerm,
  filterType,
  setFilterType,
  types,
  isTypesLoading,
}) => {
  const [search, setSearch] = useState(searchTerm);
  const debouncedSearch = useDebounce(search, 500);

  React.useEffect(() => {
    setSearchTerm(debouncedSearch);
  }, [debouncedSearch, setSearchTerm]);

  return (
    <div className="flex gap-4 mb-4">
      <input
        type="text"
        placeholder="Search Pokemon..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <select
        value={filterType}
        onChange={(e) => setFilterType(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">All Types</option>
        {isTypesLoading ? (
          <option>Loading...</option>
        ) : (
          types?.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))
        )}
      </select>
    </div>
  );
};

export default PokemonFilters;
