# Subtle Bug in JavaScript Function with Null Handling

This repository demonstrates a subtle bug in a JavaScript function that handles null values. The function `foo` aims to return the absolute difference between two numbers.  However, its handling of `null` values, while seemingly correct, can lead to unexpected results in edge cases.

## Bug Description
The function correctly handles cases where either `a` or `b` is explicitly `null`. However, it does not consider scenarios where other falsy values (e.g., 0, false, "") are passed as arguments.  These might be interpreted as null, or cause other problems depending on how the function's logic is implemented.

## Solution
The solution provided implements more robust null checks to explicitly handle falsy values and prevent unexpected results. It also includes error handling for non-numeric inputs.

## How to reproduce
1. Clone this repository.
2. Run `bug.js` to see the unexpected behaviour.
3. Run `bugSolution.js` to see how it is fixed.
