import React from 'react';
import FoodContainer from '../component/FoodContainer/FoodContainer';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

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
  const foods = data?.data ?? [];

  return (
    
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-red-100 py-10 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span
            className={`${roboto.className} inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-600 font-medium text-sm mb-4 shadow-sm`}
          >
            Delicious Food Collection
          </span>

          <h1
            className={`${roboto.className} text-4xl md:text-5xl font-extrabold text-slate-800 mb-4`}
          >
            Explore Tasty Foods
          </h1>

          <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Discover a variety of healthy, delicious, and popular dishes from
            different cuisines.
          </p>

          <FoodContainer foods={foods} />
        </div>
      </div>
    </div>
  );
};

export default FoodsPage;