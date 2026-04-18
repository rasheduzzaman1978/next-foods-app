'use client';

import React from 'react';

const NoFoodFound = ({ onReset }) => {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-16">
      <h2 className="text-3xl font-bold text-slate-700 mb-3">
        No Foods Found
      </h2>

      <p className="text-slate-500 text-base max-w-md text-center mb-6">
        Sorry, we could not find any food matching your search.
      </p>

      <button
        onClick={onReset}
        className="px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-medium shadow-md transition-all duration-300"
      >
        Go Back
      </button>
    </div>
  );
};

export default NoFoodFound;