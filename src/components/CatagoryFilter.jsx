import React from 'react';

const categories = ['Dessert', 'Seafood', 'Vegetarian', 'Breakfast', 'Beef'];

const CategoryFilter = ({ onFilter }) => {
  return (
    <div className="category-filter">
      {categories.map((category) => (
        <button key={category} onClick={() => onFilter(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;