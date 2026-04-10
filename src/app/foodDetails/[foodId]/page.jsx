import Image from 'next/image';

const FoodDetailsPage = async ({ params }) => {
  const { foodId } = await params;

  const res = await fetch(
    `https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`,
    {
      cache: 'no-store',
    }
  );

  const data = await res.json();
  const food = data.data;

  if (!food) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-semibold text-red-500">
        Food not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-red-100 py-8 px-4 md:px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
        <div className="relative w-full h-[220px] md:h-[280px] bg-slate-100">
          <Image
            src={food.image_link}
            alt={food.dish_name}
            fill
            className="object-contain p-4"
            priority
          />
        </div>

        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
                {food.dish_name}
              </h1>

              {food.alternative_names?.length > 0 && (
                <p className="text-slate-500 italic text-sm">
                  {food.alternative_names.join(', ')}
                </p>
              )}
            </div>

            <div className="text-right">
              <p className="text-2xl md:text-3xl font-bold text-orange-500">
                ৳{food.price}
              </p>
              <p className="text-yellow-500 font-semibold text-lg">
                ⭐ {food.rating}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-4 py-2 rounded-full bg-orange-100 text-orange-600 font-medium text-sm">
              {food.category}
            </span>

            <span className="px-4 py-2 rounded-full bg-green-100 text-green-600 font-medium text-sm">
              {food.cuisine}
            </span>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold text-slate-800 mb-3">
              Main Ingredients
            </h2>

            <div className="flex flex-wrap gap-2">
  {food.main_ingredients?.map((ingredient, index) => (
    <span
      key={index}
      className="flex items-center gap-2 px-3 py-2 rounded-full bg-slate-100 text-slate-700 text-sm"
    >
      <span className="text-green-500 font-bold">✓</span>
      {ingredient}
    </span>
  ))}
</div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-800 mb-3">
              Cooking Steps
            </h2>

            <ol className="space-y-2 list-decimal list-inside text-slate-600 leading-relaxed text-sm">
              {food.cooking_steps?.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetailsPage;