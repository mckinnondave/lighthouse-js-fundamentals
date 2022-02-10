function camelCase (input) {
  let arr = input.split(" ")
  let output = [arr[0]]
  for (let i = 1; i < arr.length; i++) {
    output.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase());
  }
  return output.join("");
}

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));