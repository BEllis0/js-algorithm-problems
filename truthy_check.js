// Check if the predicate (second argument) is truthy on all elements
// of a collection (first argument).

// In other words, you are given an array collection of objects. 
//The predicate pre will be an object property and you need to return true 
//if its value is truthy. Otherwise, return false.

function truthCheck(collection, pre) {

    let answers = [];

    for(let i = 0; i < collection.length; i++) {
  
      if (collection[i][pre]) {
        answers.push(true);
      }
      else {
        answers.push(false);
      }
    }
    return (answers.includes(false)) ? false : true;
  
  }
  
  console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")); //true
  
  console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")); // false
  
  console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age")); // false
  
  console.log(truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat")); // true
  
  console.log(truthCheck([{"single": "yes"}], "single")); // true
  
  console.log(truthCheck([{"single": "double"}, {"single": undefined}], "single")); // false
  
  console.log(truthCheck([{"single": "double"}, {"single": NaN}], "single")); // false