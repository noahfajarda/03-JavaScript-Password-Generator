// Assignment Code
var generateBtn = document.querySelector("#generate");


// IDEAL QUESTIONS TO ANSWER:
// what characters does user want password to include?
// how many characters should does the user want the password to be?


// global variables declaration for all possible characters

// look into CharCode

var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lowercase = uppercase.map(letter => letter.toLowerCase())
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var special = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~']


// function clickIt(){
//   console.log(document.querySelector("#here").checked)
// }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // prompt() == input() in python, gets **string** user input via browser
  var passwordLength = prompt("How many characters should the password be? (8-128 Characters)");
  // validate if length is 8-128
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Invalid character count. How many characters should the password be? (8-128 Characters)")
  }

  // implement an object to make it more efficient
  // state = {
  //   uppercase:false,
  //   lowercase:false,
  //   numbers:false,
  //   special:false
  // }
  // keys = Object.keys(state);

  // for (key in keys) {
  //   state[key] = confirm(`Would you like to use ${key} characters?`);
  // }


  // confirm() == ONLY 'yes' or 'no' (**boolean**) response from user via browser
  var uppercaseDecision = confirm("Would you like to use uppercase characters?");
  var lowercaseDecision = confirm("Would you like to use lowercase characters?");
  var numbersDecision = confirm("Would you like to use numbers characters?");
  var specialDecision = confirm("Would you like to use special characters?");

  var decisions = [uppercaseDecision, lowercaseDecision, numbersDecision, specialDecision];
  var possibleChars = [uppercase, lowercase, numbers, special];
  // list for all inclusive characters for user password:
  var acceptableChars = [];

  // ex user values: 12   true   false    true    true

  // check variable data types first, then check for values
  for (let i = 0; i < decisions.length; i++) {
    if (decisions[i]) { // adds each array to accpChars array (1D array) IF condition is met
      // concat() == combine two lists together
      // DON'T USE PUSH() B/C IT'LL BE A 2D LIST, WHERE THE VALUE YOU'RE PUSHING IS THE 1ST INDEX
      acceptableChars = acceptableChars.concat(possibleChars[i]);
    }
  }

  // acceptableChars will contain all acceptable characters
  console.log(acceptableChars)
  var userPassword = "";

  checkLast = 0;
  for (let i = 0; i < passwordLength; i++) {
    // get random index within accpChars array
    var random = Math.floor(Math.random() * acceptableChars.length);
    // characters don't repeat continuously
    while (random == checkLast) {
      random = Math.floor(Math.random() * acceptableChars.length);
    }
    checkLast = random;
    // append character to password
    userPassword = userPassword.concat(acceptableChars[random]);
  }
  console.log(userPassword);
  
  // return the generated password
  return userPassword;
}



























// SOLUTION FROM JS DAY 3 DEMO:




// // choose a random character from the list of all accepted characters
// function getRandomInt(max) {
//   return Math.ceil(Math.random() * max)
// }

// // Function to generate password
// function generatePassword() {
//   // Step 1 Ask if how many characters does the user want the password to be?
//   // passwordLength = INT
//   var passwordLength = prompt("How many characters would you like your password to be? (8 - 128)", "12")
  
//   // Step 2 Ask if the user wants to use uppercase
//   var useUppercase = confirm("Would you like to include uppercase letters?")
  
//   // Step 3 Ask if the user wants to use lowercase
//   var useLowercase = confirm("Would you like to include lowercase letters?")
  
//   // Step 4 Ask if the user wants to use numbers
//   var useNumbers = confirm("Would you like to include numbers letters?")
  
//   // Step 5 Ask if the user wants to use special chars
//   var useSpecialChars = confirm("Would you like to include special characters?")

//   // Arange the proper characters and letters and numbers, into a data structure, that we can extract a random character for each number of the length.

//   // Create the structure of potential characters
//   var potentialChars = []
//   // useUppercase is a boolean value
//   if (useUppercase) {
//     potentialChars = potentialChars.concat(uppercase)
//   }
//   if (useLowercase) {
//     potentialChars = potentialChars.concat(lowercase)
//   }
//   if (useNumbers) {
//     potentialChars = potentialChars.concat(numbers)
//   }
//   if (useSpecialChars) {
//     potentialChars = potentialChars.concat(special)
//   }

//   // Create the password of "passwordLength" length

//   var password = ""
//   for (var i = 0; i < passwordLength; i++) {
//     password = password + potentialChars[getRandomInt(potentialChars.length)]
//   }

//   return password
// }