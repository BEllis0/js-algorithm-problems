
  //We'll pass you an array of two numbers.
  //Return the sum of those two numbers plus the sum of all the numbers between them.
  //The lowest number will not always come first.

function sumAll(arr) {
  
  let list = []

  let orderList = arr.sort(function(a, b){
    return a > b;
  })

  if (orderList[0] === orderList[1]) {
    list = orderList[0] + orderList[1];
  }

  else { 
    while (orderList[0] < orderList[1]+1) {
    list.push(orderList[0]);
    orderList[0]++;
    }
    
    return list.reduce(function(a, b) {
      return a + b;
    });
  };
  
  return list;
}

console.log(sumAll([10, 5]));

