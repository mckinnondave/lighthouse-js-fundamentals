function concat(arr1, arr2) {
  let newArr = []
  for (let i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i]); 
  }
  for (let j = 0; j < arr2.length; j++) {
    newArr.push(arr2[j]);    
  }
  return newArr;
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]));
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]));
console.log(concat([], [ 9, 7, 2 ]));
console.log(concat([ 5, 10 ], []));
