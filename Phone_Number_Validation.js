//FCC Algorithms and Data Structures Project: Telephone Number Validation
//Instructions: Return true if the passed string looks like a valid US phone number.
//The user may fill out the form field any way they choose as long as it has the format of a valid US number. 
//For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. 
//Your job is to validate or reject the US phone number based on any combination of the formats provided above. 
//The area code is required. If the country code is provided, you must confirm that the country code is 1. 
//Return true if the string is a valid US phone number; otherwise return false.


function telephoneCheck(str) {
  
    let regEx = RegExp(/^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/);
  
    return regEx.test(str);
  
  
  }
  
  console.log(telephoneCheck("1 555 555-5555"))