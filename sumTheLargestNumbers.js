function sumLargestNumbers(arr) {
  let num1 = 0
  let num2 = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num1) {
      num1 = arr[i]
    }
  }
  arr.splice(arr.indexOf(num1, 1));

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > num2) {
      num2 = arr[j]
    } 
  }
  return num1 + num2
}



console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));