import React from 'react';

const RecipeList = ({ recipes, searchQuery, setRecipes, favorites, setFavorites }) => {
  const filteredRecipes = searchQuery
    ? recipes.filter((recipe) =>
        recipe.strMeal.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : recipes;

  const addToFavorites = (recipe) => {
    if (!favorites.find((fav) => fav.idMeal === recipe.idMeal)) {
      setFavorites([...favorites, recipe]);
    }
  };

  const addToShoppingList = (ingredients) => {
    const list = ingredients.map((ing) => `${ing.name}: ${ing.measure}`);
    const printableList = list.join('\n');
    alert(`Shopping List:\n${printableList}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredRecipes.map((recipe) => (
        <div key={recipe.idMeal} className="border rounded shadow-lg p-4 bg-white">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full rounded" />
          <h3 className="text-lg font-bold mt-2">{recipe.strMeal}</h3>
          <p>Category: {recipe.strCategory}</p>
          <p>Cuisine: {recipe.strArea}</p>
          <div className="flex space-x-2 mt-2">
            <button
              className="p-1 bg-yellow-400 rounded text-white"
              onClick={() => addToFavorites(recipe)}
            >
              Add to Favorites
            </button>
            <button
              className="p-1 bg-yellow-500 rounded text-white"
              onClick={() =>
                addToShoppingList([
                  { name: 'Chicken', measure: '1kg' },
                  { name: 'Salt', measure: '1 tsp' },
                ]) // Replace with actual recipe ingredients
              }
            >
              Shopping List
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;