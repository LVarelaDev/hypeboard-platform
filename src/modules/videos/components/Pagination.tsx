import React from "react";

interface PaginationProps {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
  totalRecords: number;
}
const Pagination = ({
  page,
  totalPages,
  setPage,
  totalRecords,
}: PaginationProps) => {
  return (
    <section className="flex justify-between items-center">
      <h1 className="font-bold text-gray-700">
        Total registros: {totalRecords}
      </h1>
      <div className="flex items-center justify-center gap-4 ">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="px-4 py-2 bg-white rounded disabled:opacity-50"
        >
          Anterior
        </button>

        <span>
          Página {page} de {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className="px-4 py-2 bg-white rounded disabled:opacity-50"
        >
          Siguiente
        </button>
      </div>
    </section>
  );
};

export default Pagination;
