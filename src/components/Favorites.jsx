import React from 'react';

const Favorites = ({ favorites, onSelect }) => {
  return (
    <div>
      <h2>Your Favorites ❤️</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet!</p>
      ) : (
        <div className="recipe-list">
          {favorites.map((recipe) => (
            <div key={recipe.idMeal} onClick={() => onSelect(recipe)}>
              <img src={recipe.strMealThumb} alt={recipe.strMeal} />
              <h3>{recipe.strMeal}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;