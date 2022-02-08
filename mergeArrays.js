function merge(arr1, arr2) {
  let newArr = []
  for (let i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i]); 
  }
  for (let j = 0; j < arr2.length; j++) {
    newArr.push(arr2[j]);    
  }
  return newArr.sort();
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]));
console.log(merge([ 4 ], [ 2, 5, 8 ]));
console.log(merge([ 1, 2, 6 ], []));
