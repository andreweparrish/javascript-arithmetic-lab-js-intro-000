function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function increment(n) {
  return n += 1;
}

function decrement(n) {
  return n -= 1;
}

function makeInt(n) {
<<<<<<< HEAD
   var n = parseInt(n, 10);
=======
  parseInt(n, 10);
>>>>>>> e850a766db3699db040f2f0313ef8b8d996b36b7
  return n;
}

function preserveDecimal(n) {
<<<<<<< HEAD
  var n = parseFloat(n);
=======
  parseFloat(n);
>>>>>>> e850a766db3699db040f2f0313ef8b8d996b36b7
  return n;
}
