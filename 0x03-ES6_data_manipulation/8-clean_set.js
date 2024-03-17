/* eslint-disable */
// Function to clean a Set by removing strings that do not start with a specified string
const cleanSet = (set, startString) => {
  // Initialize an empty array to store cleaned strings
  const strings = [];

  // If the startString is empty or not a string, return an empty string
  if (startString === '' || typeof startString !== 'string') return '';

  // Iterate through each element in the set
  set.forEach((s) => {
    // Check if the element is a string and starts with the specified startString
    if (typeof s === 'string' && s.startsWith(startString)) {
      // If it does, push the substring (excluding startString) to the strings array
      strings.push(s.slice(startString.length));
    }
  });

  // Join the cleaned strings with '-' delimiter and return as a single string
  return strings.join('-');
};

// Export the function
export default cleanSet;
