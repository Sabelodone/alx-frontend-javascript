// Function to update unique items in a Map
const updateUniqueItems = (items) => {
  // Check if the input is a Map
  if (!(items instanceof Map)) {
    // If not, throw an error
    throw new Error('Cannot process');
  }
  
  // Iterate through each key-value pair in the Map
  for (const [k, v] of items.entries()) {
    // Check if the value is equal to 1 (unique item)
    if (v === 1) {
      // If so, update the value to 100
      items.set(k, 100);
    }
  }
  
  // Return the updated Map
  return items;
};

// Export the function
export default updateUniqueItems;
