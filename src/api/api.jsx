// Fetch meals by search query
export const fetchRecipes = async (query) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };
  
  // Fetch meals with api
  export const fetchRandomMeal = async () => {
    const url = `https://www.themealdb.com/api/json/v1/1/random.php`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch meal');
    }
    return response.json();
  };