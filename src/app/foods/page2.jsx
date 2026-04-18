import React from 'react';

const FoodsPage = async () => {
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods');
    const data = await res.json();
    const foods = data.data;;
    return (
        <div>
            <h2>Foods : </h2>
            <ul>
                {foods.map((food) => (
                    <li key={food.id}>{food.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default FoodsPage;