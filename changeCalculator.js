function calculateChange (total, cash) {
  let change = cash - total;
  let finalAmount = {
    twentyDollars: 0,
    tenDollars: 0,
    fiveDollars: 0,
    twoDollars: 0,
    oneDollar: 0,
    quarter: 0,
    dime: 0,
    nickel: 0,
    penny: 0
  }
  while (change !== 0) {
    if (change/2000 >= 1) {
      finalAmount.twentyDollars++
      change -= 2000
    } else if (change/1000 >= 1) {
      finalAmount.tenDollars++
      change -= 1000
    } else if (change/500 >= 1) {
      finalAmount.fiveDollars++
      change -= 500
    } else if (change/200 >= 1) {
      finalAmount.twoDollars++
      change -= 200
    } else if (change/100 >= 1) {
      finalAmount.oneDollar++
      change -= 100
    } else if (change/25 >= 1) {
      finalAmount.quarter++
      change -= 25
    } else if (change/10 >= 1) {
      finalAmount.dime++
      change -= 10
    } else if (change/5 >= 1) {
      finalAmount.nickel++
      change -= 5
    } else if (change/1 >= 1) {
      finalAmount.penny++
      change -= 1
    }  
  }
  for (const key in finalAmount) {
    if (finalAmount[key] === 0) {
      delete finalAmount[key];
    }
  }
  return finalAmount;
}

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));