import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import RecipeCard from './components/RecipeCard';
import RecipeDetails from './components/RecipeDetails';
import { fetchRecipes, fetchRandomMeal } from './api/api';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetching meals on first load
  useEffect(() => {
    const loadRandomMeals = async () => {
      setLoading(true);
      try {
        const promises = Array.from({ length: 10 }, () => fetchRandomMeal());
        const responses = await Promise.all(promises);
        const randomMeals = responses.flatMap(res => res.meals);
        setRecipes(randomMeals);
      } catch (err) {
        setError('Failed to load random meals.');
      } finally {
        setLoading(false);
      }
    };

    loadRandomMeals();
  }, []);

  // Search function
  const handleSearch = async (query) => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchRecipes(query);
      if (data.meals) {
        setRecipes(data.meals);
      } else {
        setRecipes([]);
        setError('No recipes found.');
      }
    } catch (err) {
      setError('Failed to fetch data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Recipe Finder 🍲</h1>
      <SearchBar onSearch={handleSearch} />
      
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {!selectedRecipe ? (
        <div className="recipe-list">
          {recipes.map((recipe) => (
            <RecipeCard 
              key={recipe.idMeal} 
              recipe={recipe} 
              onSelect={() => setSelectedRecipe(recipe)} 
            />
          ))}
        </div>
      ) : (
        <RecipeDetails 
          recipe={selectedRecipe} 
          onBack={() => setSelectedRecipe(null)} 
        />
      )}
    </div>
  );
};

export default App;