import { FC } from "react";

interface PokemonPaginationProps {
  setPagination: (newOffset: number) => void;
  offset: number;
  limit: number;
  count: number;
}

const PokemonPagination: FC<PokemonPaginationProps> = ({
  setPagination,
  offset,
  limit,
  count,
}) => {
  const currentPage = offset / limit + 1;
  const pageTotal = Math.ceil(count / limit);
  const previousPage = Math.max(offset - limit, 0);
  const nextPage = offset + limit;

  return (
    <div className="flex justify-between mt-4">
      <button
        onClick={() => setPagination(previousPage)}
        disabled={offset === 0}
        className="p-2 border rounded bg-gray-200 disabled:opacity-50"
      >
        Previous
      </button>
      <div className="text-center">
        <div>
          Page: {currentPage} of {pageTotal}
        </div>
        <div>Total items: {count}</div>
      </div>
      <button
        onClick={() => setPagination(nextPage)}
        disabled={currentPage === pageTotal}
        className="p-2 border rounded bg-gray-200 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default PokemonPagination;
