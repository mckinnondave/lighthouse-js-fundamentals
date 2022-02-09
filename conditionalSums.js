function conditionalSum(numbers, condition) {
  let sum = 0
  for (const number of numbers) {
    if (condition === "even") {
      if (number % 2 === 0) {
        sum += number
      } 
    } else if (number % 2 !== 0) {
      sum += number
    }
  }
  return(sum);
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));