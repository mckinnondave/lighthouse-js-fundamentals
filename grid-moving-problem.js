const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

const finalPosition = function(moves) {
  let arr = [0, 0]
  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === "east") {
      arr[0] += 1;
    } else if (moves[i] === "west") {
      arr[0] -= 1;
    } else if (moves[i] === "north") {
      arr[1] += 1;
    } else if (moves[i] === "south") {
      arr[1] -= 1;
    }
  }
  return arr;
}

console.log(finalPosition(moves));