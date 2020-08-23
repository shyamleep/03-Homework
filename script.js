// // Assignment Code

// var generateBtn = document.getElementById(#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.getElementById(#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// ? ---------------------------------------------------------------------

var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numericalArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var specialArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "[", "]", "{", "}", ":", ";", "<", ">", "?", ",", "."]
var passwordArray = []

var passwordLength = document.getElementById(password)

var generateBtn = document.getElementById(generate)

function verify() {
  var lowercaseCheck = document.getElementById(lowercase).checked
  console.log(lowercaseCheck)

  var uppercaseCheck = document.getElementById(uppercase).checked
  console.log(uppercaseCheck)

  var numericalCheck = document.getElementById(numerical).checked
  console.log(numericalCheck)

  var specialCheck = document.getElementById(special).checked
  console.log(specialCheck)

  if (lowercaseCheck === false && uppercaseCheck === false && numericalCheck === false && specialCheck === false) {
    alert("You must choose at least one set of characters to be in your password.")
  }
}

generateBtn.addEventListener("click", verify);
document.addEventListener("submit", verify);

