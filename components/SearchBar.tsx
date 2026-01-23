
"use client";

import { useState } from "react";

interface Props {
  onSearch: (city: string) => void;
}

export default function SearchBar({ onSearch }: Props) {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (!city.trim()) return;
    onSearch(city.trim());
  };

  return (
    <div className="flex w-full gap-2">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Search city..."
        className="flex-1 p-3 rounded-lg text-black bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />

      <button
        onClick={handleSearch}
        className="px-5 rounded-lg bg-pink-700 text-white font-medium hover:bg-blue-700 transition"
      >
        Search
      </button>
    </div>
  );
}
