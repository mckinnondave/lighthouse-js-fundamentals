function smartGarbage(trash, bins) {
  let newArr = Object.keys(bins)
  for (let i = 0; i < newArr.length; i++) {
    if(trash === newArr[i]) {
      bins[trash] += 1
    }
  }
  return bins
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));