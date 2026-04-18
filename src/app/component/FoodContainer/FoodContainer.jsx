'use client';

import React, { useEffect, useState } from 'react';
import FoodCard from '../FoodCard/FoodCard';
import SearchBar from '../SearchBar/SearchBar';
import NoFoodFound from '../NoFoodFound/NoFoodFound';
import CategoryFilter from '../CategoryFilter/CategoryFilter';

const FoodContainer = ({ foods = [] }) => {
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    if (Array.isArray(foods)) {
      setFilteredFoods(foods);
    }
  }, [foods]);

  const handleSearch = (text) => {
    if (!Array.isArray(foods)) return;

    const searchText = text.toLowerCase().trim();

    let filtered = foods.filter((food) =>
      (food?.dish_name || '').toLowerCase().includes(searchText)
    );

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(
        (food) =>
          (food?.category || '').toLowerCase() ===
          selectedCategory.toLowerCase()
      );
    }

    setFilteredFoods(filtered);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);

    let filtered = foods;

    if (category !== 'all') {
      filtered = foods.filter(
        (food) =>
          (food?.category || '').toLowerCase() ===
          category.toLowerCase()
      );
    }

    setFilteredFoods(filtered);
  };

  const handleReset = () => {
    setSelectedCategory('all');
    setFilteredFoods(foods);
  };

  return (
    <div>
      <div className="mt-8 max-w-3xl mx-auto">
        <SearchBar onSearch={handleSearch} />

        <CategoryFilter onCategoryChange={handleCategoryChange} />
      </div>

      <div className="mt-6 inline-flex items-center gap-2 bg-white rounded-2xl px-5 py-3 shadow-md border border-slate-200">
        <span className="text-slate-500 font-medium">Total Foods:</span>
        <span className="text-2xl font-bold text-orange-500">
          {filteredFoods.length}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
        {filteredFoods.length > 0 ? (
          filteredFoods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))
        ) : (
          <NoFoodFound onReset={handleReset} />
        )}
      </div>
    </div>
  );
};

export default FoodContainer;