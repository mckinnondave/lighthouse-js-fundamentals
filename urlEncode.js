function urlEncode(str) {
  let arr = str.split("")
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === " ") {
      arr[i] = "%20"
    }
  }
  return arr.join("")
}

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));