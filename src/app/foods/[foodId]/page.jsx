import React from 'react';

const FoodDetailPage = async ({params}) => {
    const { foodId } = await params;
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`);
    const data = await res.json();
    const food = data.data;

    const {id, dish_name, description} = food;

    return (
        <div>
            <h2>Show details: {foodId}</h2>
            <p>{dish_name}</p>
            <p>{description}</p>
        </div>
    );
};

export default FoodDetailPage;