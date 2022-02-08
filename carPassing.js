function carPassing(cars, speed) {
  let newArr = [];
  let newObj = {};
  for (let i = 0; i < cars.length; i++) {
    newArr.push(cars[i]);
  }
  newObj.time = Date.now(speed);
  newObj.speed = speed;
  newArr.push(newObj);
  return newArr;
}

const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

console.log(carPassing(cars, 38))