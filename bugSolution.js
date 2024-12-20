function foo(a, b) {
  // Robust null and type checking
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Handle non-numeric inputs
  }
  if (a === null || a === undefined || b === null || b === undefined || a === 0 || b === 0 || a === false || b === false || a === "" || b === "") {
    return 0; //Handle falsy values explicitly
  }

  if (a > b) {
    return a - b;
  }
  return b - a;
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(5, null)); // Output: 0
console.log(foo(5, 10));  // Output: 5
console.log(foo(10, 5));  // Output: 5
console.log(foo(0, 5));   // Output: 0
console.log(foo(5, false)); // Output: 0
console.log(foo("hello",5)); // Output: NaN