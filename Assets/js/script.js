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

var allChars = [uppercase, lowercase, numbers, special];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// get random Int between 2 digits
// used from: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function getRandomInt(max) {
  // ~~ == math.floor
  return ~~(Math.random() * max);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // prompt() == input() in python, gets **string** user input via browser
  var passwordLength = prompt(
    "How many characters should the password be? (8-128 Characters)"
  );
  // validate if length is 8-128
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt(
      "Invalid character count. How many characters should the password be? (8-128 Characters)"
    );
  }

  // confirm() == ONLY 'true' or 'false' (**boolean**) response from user via browser
  var uppercaseDecision = confirm(
    "Would you like to use uppercase characters?"
  );
  var lowercaseDecision = confirm(
    "Would you like to use lowercase characters?"
  );
  var numbersDecision = confirm("Would you like to use numbers characters?");
  var specialDecision = confirm("Would you like to use special characters?");

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

  // store all decisions in a list to check with iteration later
  decisionList = [
    uppercaseDecision,
    lowercaseDecision,
    numbersDecision,
    specialDecision,
  ];

  // SAMPLE INPUT: length=12, yes no no yes

  var charsToUse = [];
  var password = "";

  if (uppercaseDecision) {
    charsToUse = charsToUse.concat(uppercase);
  }
  if (lowercaseDecision) {
    charsToUse = charsToUse.concat(lowercase);
  }
  if (numbersDecision) {
    charsToUse = charsToUse.concat(numbers);
  }
  if (specialDecision) {
    charsToUse = charsToUse.concat(special);
  }

  // chars to use SAMPLE contain: [all uppercase letters, all special chars]

  // lettersLeft: used to increment how many characters we wrote for the password
  var lettersLeft = passwordLength;
  var categoryCount = 0;
  for (var i = 0; i < 4; i++) {
    if (decisionList[i]) {
      categoryCount++;
    }
  }

  // character count per category (lower, upper, num, special)
  var numberOfCharsPerCategory = [0, 0, 0, 0];
  console.log(lettersLeft);

  // get random number for each category selected (should all add up to length)
  var charsList = [];
  for (var i = 0; i < categoryCount; i++) {
    if (i == categoryCount - 1) {
      var numberOfCharsForThisItem = lettersLeft;
      charsList.push(numberOfCharsForThisItem);
      lettersLeft = 0;
      break;
    }
    var numberOfCharsForThisItem = getRandomInt(lettersLeft / categoryCount);
    charsList.push(numberOfCharsForThisItem);
    lettersLeft -= numberOfCharsForThisItem;
  }

  // place each number to corresponding category depending on if each condition is true
  for (var i = 0; i < 4; i++) {
    if (decisionList[i]) {
      numberOfCharsPerCategory[i] = charsList.pop();
    }
  }
  console.log(charsToUse);

  // make 2D array
  var charsToUse = [];

  if (uppercaseDecision) {
    charsToUse.push(uppercase);
  }
  if (lowercaseDecision) {
    charsToUse.push(lowercase);
  }
  if (numbersDecision) {
    charsToUse.push(numbers);
  }
  if (specialDecision) {
    charsToUse.push(special);
  }

  // charsToUse == all acceptable characters used in pass as 2D array
  // numberOfCharsPerCategory = how many chars each category should have in pass
  // password == "" (add to it)

  console.log(charsToUse);
  console.log(numberOfCharsPerCategory);
  console.log(password);

  for (var i = 0; i < numberOfCharsPerCategory.length; i++) {
    for (var j = 0; j < numberOfCharsPerCategory[i]; j++) {
      password += allChars[i][getRandomInt(allChars[i].length)];
    }
  }

  // scramble password
  password = password
    .split("")
    .sort(function () {
      //tell sort function to randomly return a + or - number 50/50
      return Math.random() - 0.5;
    })
    .join("");
  password;

  return password;
}

// tutoring session questions and notes:
// first: go over entire code to explain what is going on
// ask: why is the distribution so skewed
// why is it giving 0 for some of the values?
