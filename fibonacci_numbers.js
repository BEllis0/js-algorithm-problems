// Given a positive integer num, return the sum of all odd Fibonacci numbers
//that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. 
//Every additional number in the sequence is the sum of the two previous numbers.
// The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

function sumFibs(num) {

    let add;
    let fibo = [1,1] // starts the sequence

    //while the last number in the array is less than the given number,
    //continue adding the fibonacci sequence

    while (fibo[fibo.length-2] <= num) {
      add = fibo[fibo.length-2] + fibo[fibo.length-1];
      fibo.push(add);
    }
  
    return fibo.filter(belowNum => belowNum <= num) // filter to include nums <=
        .filter(odd => odd % 2 !== 0) // filter odd numbers
        .reduce((a,b) => a + b); // add them together
  
  }
  
  console.log(sumFibs(1)); // 2
  console.log(sumFibs(1000)); // 1785
  console.log(sumFibs(4000000)); // 4613732
  console.log(sumFibs(4)); // 5
  console.log(sumFibs(75024)); // 60696
  console.log(sumFibs(75025)); // 135721