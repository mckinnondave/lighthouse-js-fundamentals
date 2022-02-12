function loopyLighthouse(range, multiples, word) {
  while (range[0] <= range[1]) {
    if (range[0] % multiples[0] === 0 && range[0] % multiples[1] === 0) {
      console.log(word[0] + word[1]);
    } else if (range[0] % multiples[0] === 0) {
      console.log(word[0]);
    } else if (range[0] % multiples[1] === 0) {
      console.log(word[1]);
    } else {
      console.log(range[0]);
    }
    range[0]++
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);