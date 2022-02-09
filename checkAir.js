function checkAir(samples, threshold) {
  let sum = 0
  for (const condition of samples) {
    if (condition === "dirty") {
      sum += 1
    } 
  }
  let quality = sum / samples.length
  if (quality >= threshold) {
    return "polluted"
  } else {
    return "clean"
  }
}

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))