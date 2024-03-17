// Create a new WeakMap instance
export const weakMap = new WeakMap();

// Function to query API endpoints
export const queryAPI = (endpoint) => {
  // Check if the endpoint exists in the WeakMap
  if (weakMap.has(endpoint)) {
    // If it exists, retrieve the data associated with the endpoint
    const endpointData = weakMap.get(endpoint);
    
    // Check if the endpoint load is high (more than or equal to 4)
    if (endpointData >= 4) {
      // If so, throw an error indicating high endpoint load
      throw new Error('Endpoint load is high');
    }
    
    // Increment the endpoint load counter in the WeakMap
    weakMap.set(endpoint, (endpointData + 1));
  } else {
    // If the endpoint doesn't exist in the WeakMap, set its load to 1
    weakMap.set(endpoint, 1);
  }
};
