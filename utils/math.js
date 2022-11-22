export function add(x, y) {
  return parseFloat(x === "" ? 0 : x, 10) + parseFloat(y === "" ? 0 : y, 10);
}
export function subtract(x, y) {
  return x - y;
}
export function multiply(x, y) {
  return x * y;
}

export function divide(x, y) {
  return x / y;
}
export function exp(x, y) {
  return x ^ y;
}
