import React from 'react';

const RecipeCard = ({ recipe, onSelect }) => {
  return (
    <div className="recipe-card" onClick={onSelect}>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h3>{recipe.strMeal}</h3>
      <p><strong>Category:</strong> {recipe.strCategory}</p>
      <p><strong>Cuisine:</strong> {recipe.strArea}</p>
    </div>
  );
};

export default RecipeCard;