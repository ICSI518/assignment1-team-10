// Function to multiply two numbers
function multiply(a, b) {
     return a * b;  // b*a == a*b 
}

// Function to add two numbers
function add(a, b) {
  const c = a+b;
  return c;
}

// Function to subtract two numbers
function subtract(a, b) {
   return a - b; //Implemeted-subtract-function
}

// Function to divide two numbers
function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero";   // when b is 0, diviion by zero is returned
  }
  return a / b;  // else a/b value is returned
}

// Example usage
const a = 10;
const b = 5;

// Display results on console
console.log(`Addition: ${a} + ${b} = ${add(a, b)}`);
console.log(`Subtraction: ${a} - ${b} = ${subtract(a, b)}`);
console.log(`Multiplication: ${a} * ${b} = ${multiply(a, b)}`);
console.log(`Division: ${a} / ${b} = ${divide(a, b)}`);
