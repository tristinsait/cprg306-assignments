"use client";

import { useState, useEffect } from 'react';

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  const getMealIdeas = async (ingredient) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      const data = await response.json();
      return data.meals || [];
    } catch (error) {
      console.error("error getting meal ideas:", error);
      return [];
    }
  };

  const loadMealIdeas = async () => {
    const mealData = await getMealIdeas(ingredient);
    setMeals(mealData);
  };

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  return (
    <div className="meal-ideas">
      <h2 className="text-2xl font-bold mb-4">meal ideas including {ingredient}</h2>
      <ul className="space-y-4">
        {meals.map((meal) => (
          <li key={meal.idMeal} className="meal-item flex items-center space-x-4 bg-pink-800 rounded-xl">
            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-16 h-16 rounded-xl" />
            <div className="text-lg font-semibold">{meal.strMeal}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealIdeas;
