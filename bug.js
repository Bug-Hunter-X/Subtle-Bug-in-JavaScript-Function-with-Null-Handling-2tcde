function foo(a, b) {
  if (a === null || b === null) {
    return 0; // This handles null correctly
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