export default function taskBlock(trueOrFalse) {
  let task = false; // Using let instead of var
  let task2 = true; // Using let instead of var

  if (trueOrFalse) {
    let task = true; // Declared inside the if block
    let task2 = false; // Declared inside the if block
  }

  return [task, task2];
}
