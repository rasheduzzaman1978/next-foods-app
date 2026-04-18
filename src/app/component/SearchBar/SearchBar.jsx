'use client';

import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleClick = () => {
    onSearch(searchText);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search your favorite food..."
        className="w-full px-5 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-sm bg-white"
      />

      <button
        onClick={handleClick}
        className="px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-medium shadow-md transition-all duration-300"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;



