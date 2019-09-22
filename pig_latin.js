
// Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant cluster) 
//of an English word, moves it to the end of the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.

function translatePigLatin(str) {

    let vowelReg = /^[aeiou]/i;
    let consonantReg = /[qwrtypsdfghjklzxcvbnm]{1,}/i;
  
  
    if (vowelReg.test(str)) {
      return str.concat("way");
    }
  
    else if (consonantReg.test(str)) {
      return str.replace(str.match(consonantReg),"").concat(str.match(consonantReg)).concat("ay");
    }
  
    else {return str};
  }
  
  console.log(translatePigLatin("consonant")); // onsonantcay
  console.log(translatePigLatin("california")); // aliforniacay
  console.log(translatePigLatin("paragraphs")); // aragraphspay
  console.log(translatePigLatin("glove")); // oveglay
  console.log(translatePigLatin("algorithm")); // algorithmway
  console.log(translatePigLatin("eight")); // eightway