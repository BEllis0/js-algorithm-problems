function addTogether(...num) {
  

    for (let i = 0; i < num.length; i++) {
      if (typeof num[i] !== "number") {
        return undefined;
      }
    }
  
    if (num.length === 1) {
  
      return function sumTwoAnd(num2) {
  
        if (typeof num2 !== "number") {
          return undefined;
        }
        else {
          return num[0] + num2;
        }
      }
    }
    else {
    return num.reduce((a,b) => a + b);
    }
  
  }
  
  console.log(addTogether(2,3)); // 5
  console.log(addTogether(2)(3)); // 5
  console.log(addTogether("http://bit.ly/IqT6zt")); // undefined
  console.log(addTogether(2, "3")); //undefined
  console.log(addTogether(2)([3])); //undefined