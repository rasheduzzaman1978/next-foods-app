import React from 'react';
import FoodCard from '../component/FoodCard/FoodCard';

const FoodsPage = async () => {
  const res = await fetch(
    'https://phi-lab-server.vercel.app/api/v1/lab/foods',
    {
      cache: 'no-store',
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch foods');
  }

  const data = await res.json();
  const foods = data.data || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-red-100 py-10 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-600 font-medium text-sm mb-4 shadow-sm">
            Delicious Food Collection
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4">
            Explore Tasty Foods
          </h1>

          <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Discover a variety of healthy, delicious, and popular dishes from
            different cuisines. Choose your favorite meal and explore its
            details.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 bg-white rounded-2xl px-5 py-3 shadow-md border border-slate-200">
            <span className="text-slate-500 font-medium">Total Foods:</span>
            <span className="text-2xl font-bold text-orange-500">
              {foods.length}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {foods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodsPage;