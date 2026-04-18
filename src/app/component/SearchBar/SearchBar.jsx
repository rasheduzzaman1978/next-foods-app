'use client';

import React, { useState } from 'react';

const SearchBar = ({ onSearch, onCategoryChange }) => {
  const [searchText, setSearchText] = useState('');

  const handleClick = () => {
    onSearch(searchText);
  };

  return (
    <div className="mt-8 flex flex-col gap-4 max-w-3xl mx-auto">
      {/* Search Section */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
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

      {/* Filter Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <label className="text-slate-700 font-medium">
          Filter By Category:
        </label>

        <select
          onChange={(e) => onCategoryChange(e.target.value)}
          className="px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          <option value="all">All Categories</option>
          <option value="dish">Dish</option>
          <option value="burger">Burger</option>
          <option value="biriyani">Biriyani</option>
          <option value="beverage">Beverage</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar;