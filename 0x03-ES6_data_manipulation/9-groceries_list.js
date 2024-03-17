// Function to create a groceries list using a Map
const groceriesList = () => {
  // Initialize a new Map
  const map = new Map();

  // Set the quantities for each item in the groceries list
  map.set('Apples', 10);
  map.set('Tomatoes', 10);
  map.set('Pasta', 1);
  map.set('Rice', 1);
  map.set('Banana', 5);

  // Return the groceries list as a Map
  return map;
};

// Export the function
export default groceriesList;
