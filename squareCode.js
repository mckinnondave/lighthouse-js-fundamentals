function squareCode (message) {
  let squaredNum = Math.ceil(Math.sqrt((message).length))
  let letters = message.split("")
  let output1 = ""
  let output2 = ""
  let count = 0
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] === " ") {
      delete letters[i] 
    } else {
      output1 += letters[i]
    }
  }
  output1 = output1.split("")
  for (let i = 0; i < output1.length; i++) {
    if (count < squaredNum) {
      output2 += output1[i] 
      count++
    } else {
      output2 += output1[i] + "\n"
      count = 0
    }
  }
  return output2
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));