'use client';

import React from 'react';

const CategoryFilter = ({ onCategoryChange }) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-5">
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
        <option value="biryani">Biryani</option>
        <option value="beverage">Beverage</option>
      </select>
    </div>
  );
};

export default CategoryFilter;
