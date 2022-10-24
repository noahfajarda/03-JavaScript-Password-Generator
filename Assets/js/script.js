// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowercase = uppercase.map((letter) => letter.toLowerCase());
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = [
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

// store all potential characters to array
var allChars = [uppercase, lowercase, numbers, special];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// get random Int between 2 digits
// used from: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function getRandomChar(arr) {
  // ~~ == math.floor
  var index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // ask user for char count
  var passwordLength = prompt(
    "How many characters should the password be? (8-128 Characters)"
  );
  // validate if length is 8-128
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt(
      "Invalid character count. How many characters should the password be? (8-128 Characters)"
    );
  }

  // ask user 'yes'/'no' for char sets
  var uppercaseDecision = confirm(
    "Would you like to use uppercase characters?"
  );
  var lowercaseDecision = confirm(
    "Would you like to use lowercase characters?"
  );
  var numbersDecision = confirm("Would you like to use numbers characters?");
  var specialDecision = confirm("Would you like to use special characters?");

  // if user says 'no' to all, ask again (invalid answer)
  while (
    uppercaseDecision == false &&
    lowercaseDecision == false &&
    numbersDecision == false &&
    specialDecision == false
  ) {
    var uppercaseDecision = confirm(
      "At least one option must be selected to generate a password!! Would you like to use uppercase characters?"
    );
    var lowercaseDecision = confirm(
      "Would you like to use lowercase characters?"
    );
    var numbersDecision = confirm("Would you like to use numbers characters?");
    var specialDecision = confirm("Would you like to use special characters?");
  }

  // initialize array to add user selected char families
  // initialize empty password
  var charsToUse = [];
  var password = "";

  // add categories based on user's decisions

  if (uppercaseDecision) {
    charsToUse = charsToUse.concat(uppercase);
    password += getRandomChar(uppercase);
  }
  if (lowercaseDecision) {
    charsToUse = charsToUse.concat(lowercase);
    password += getRandomChar(lowercase);
  }
  if (numbersDecision) {
    charsToUse = charsToUse.concat(numbers);
    password += getRandomChar(numbers);
  }
  if (specialDecision) {
    charsToUse = charsToUse.concat(special);
    password += getRandomChar(special);
  }

  var remaining = passwordLength - password.length;

  // add char family if decision is true & increment # of categories
  for (var i = 0; i < remaining; i++) {
    password += getRandomChar(charsToUse);
  }

  return password;
}
