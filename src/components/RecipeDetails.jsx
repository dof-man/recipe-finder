import React from 'react';

const RecipeDetails = ({ recipe, onBack }) => {
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push(`${ingredient} - ${measure}`);
    }
  }

  return (
    <div className="recipe-details">
      <button onClick={onBack}>🔙 Back</button>
      <h2>{recipe.strMeal}</h2>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h3>Ingredients</h3>
      <ul>
        {ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <p>{recipe.strInstructions}</p>
      {recipe.strYoutube && (
        <div className="video">
          <h3>Video Tutorial</h3>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${recipe.strYoutube.split('=')[1]}`}
            title={recipe.strMeal}
            allowFullScreen
          ></iframe>
        </div>
      )}
      {recipe.strSource && (
        <a href={recipe.strSource} target="_blank" rel="noopener noreferrer">View Full Recipe</a>
      )}
    </div>
  );
};

export default RecipeDetails;