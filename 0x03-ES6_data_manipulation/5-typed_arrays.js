/* eslint-disable */
// Function to create an Int8 Typed Array with a specific value at a given position
const createInt8TypedArray = (length, position, value) => {
  // Create a new ArrayBuffer with the specified length
  const buffer = new ArrayBuffer(length);

  // Create a new Int8Array using the created buffer
  const int8Array = new Int8Array(buffer);

  // Check if the specified position is within the range of the Int8Array
  if (position > int8Array.length) throw new Error('Position outside range');

  // Set the value at the specified position in the Int8Array
  int8Array[position] = value;

  // Return a new DataView created from the buffer
  return new DataView(buffer);
};

// Export the function
export default createInt8TypedArray;
