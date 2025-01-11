import React from 'react';

const ShoppingList = ({ shoppingList, updateQuantity, removeItem }) => {
  return (
    <div>
      <h2>🛒 Shopping List</h2>
      {shoppingList.length === 0 ? (
        <p>No items added yet!</p>
      ) : (
        <ul>
          {shoppingList.map((item, index) => (
            <li key={index}>
              {item.ingredient} - 
              <input 
                type="number" 
                value={item.quantity} 
                onChange={(e) => updateQuantity(index, e.target.value)} 
                min="1"
              />
              <button onClick={() => removeItem(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => window.print()}>🖨️ Print List</button>
    </div>
  );
};

export default ShoppingList;