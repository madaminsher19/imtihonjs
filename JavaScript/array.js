let numArray = [-20, 10, 7, -7, 53, -35, 14, -41];
function countNumbers(numbers) {
  let neg = 0;
  let pos = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      neg += numbers[i];
    } else {
      pos++;
    }
  }
  return [pos, neg];
}
let result = countNumbers(numArray);
console.log(result);