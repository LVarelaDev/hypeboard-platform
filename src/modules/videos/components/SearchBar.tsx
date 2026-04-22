"use client";

import { useState } from "react";

type SearchField = "author" | "title";

interface SearchBarProps {
  onSearch: (field: SearchField, value: string) => void;
  onReset?: () => void;
}

const SearchBar = ({ onSearch, onReset }: SearchBarProps) => {
  const [field, setField] = useState<SearchField>("title");
  const [value, setValue] = useState("");

  const handleSearch = () => {
    onSearch(field, value);
  };

  const handleReset = () => {
    setValue("");
    setField("title");
    onReset?.();
  };

  return (
    <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow">
      <select
        value={field}
        onChange={(e) => setField(e.target.value as SearchField)}
        className="border rounded px-2 py-2"
      >
        <option value="title">Título</option>
        <option value="author">Autor</option>
      </select>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={`Buscar por ${field}...`}
        className="border rounded px-3 py-2 w-64"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Buscar
      </button>
      <button onClick={handleReset} className="bg-gray-200 px-4 py-2 rounded">
        Limpiar
      </button>
    </div>
  );
};

export default SearchBar;
