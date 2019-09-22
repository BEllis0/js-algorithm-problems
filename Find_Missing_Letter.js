
//alphabet is an array of the letters in the alphabet; used for comparing and referencing

let alphabet = "abcdefghijklmnopqrstuvwxyz".split('');

function fearNotLetter(str) {

  let newStr = str.split('');
  let letters = [];
  let i = 0;

  //handles the condition of the string being equal to the entire alphabet

  if (str === alphabet.join('')) {
    return undefined;
  }

  //Iterates through the string array and checks to make sure that the following index is only 1 letter/number above

  while(alphabet.indexOf(newStr[i]) + 1 >= alphabet.indexOf(newStr[(i+1)])){
    letters.push(alphabet.indexOf(newStr[i]) + 2)
    i++;
  };

  //targets and returns the letter associated with the last index number

  return alphabet[letters.slice(-1)]

}

console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("abce"));
console.log(fearNotLetter("stv"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));