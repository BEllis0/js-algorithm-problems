//FFC Algorithms and Data Structures Projects: Palindrome Checker
//Instructions: Return true if the given string is a palindrome. Otherwise, return false.

function palindrome(str) {
  

    let cleaned = str.replace(/[\W_]/g, '').toLowerCase()
    let reverse = cleaned.split('').reverse().join('');
    
    return (cleaned === reverse) ? true : false;
  
  }
  
  console.log(palindrome("0_0 (: /-\ :) 0-0")); // true
  console.log(palindrome("_eye")) //true
  console.log(palindrome("never odd or even")) //true
  console.log(palindrome("race car")) // true
  console.log(palindrome("A man, a plan, a canal. Panama")) //true 
  console.log(palindrome("five|\_/|four")) //false
  console.log(palindrome("not a palindrome")) //false
  console.log(palindrome("nope")) //false