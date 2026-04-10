import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FoodCard = ({ food }) => {
  const {
    dish_name,
    id,
    alternative_names,
    main_ingredients,
    category,
    rating,
    price,
    cuisine,
    image_link,
  } = food;

  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:-translate-y-2 w-full max-w-sm flex flex-col h-full">
      <figure className="relative overflow-hidden h-64 w-full bg-slate-100 flex items-center justify-center">
  <Image
    src={image_link}
    alt={dish_name}
    fill
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
  />

  <div className="absolute top-4 left-4 flex gap-2">
    <span className="bg-gradient-to-r from-pink-500 to-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
      {category}
    </span>

    <span className="bg-white/90 backdrop-blur-md text-yellow-500 text-xs font-bold px-3 py-1 rounded-full shadow-md">
      ⭐ {rating}
    </span>
  </div>
</figure>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h2 className="text-xl font-bold text-slate-800 line-clamp-2 leading-snug">
            {dish_name}
          </h2>

          <span className="text-lg font-bold text-orange-500 whitespace-nowrap">
            ৳{price}
          </span>
        </div>

        {alternative_names?.length > 0 && (
          <p className="text-slate-500 text-sm mb-3 line-clamp-2 italic">
            {alternative_names[0]}
          </p>
        )}

        <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-4">
          {main_ingredients?.slice(0, 3).join(', ')}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-medium">
            {category}
          </span>

          <span className="px-3 py-1 rounded-full bg-green-100 text-green-600 text-xs font-medium line-clamp-1">
            {cuisine?.split(' ')[0]}
          </span>

          <span className="px-3 py-1 rounded-full bg-pink-100 text-pink-600 text-xs font-medium">
            ID: {String(id).slice(-3)}
          </span>
        </div>

        <Link
          href={`/foodDetails/${id}`}
          className="mt-auto w-full text-center py-3 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold hover:opacity-90 transition duration-300 shadow-md"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default FoodCard;