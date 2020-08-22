
// 
// !
// ?
////
// $-- 
// *



// ------------------------------------------------------------------------------


// Assignment Code
//? This makes a variable of the Generate Password button so we can later add an event listener to it
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//? The function is named writePassword
function writePassword() {

  //? The password variable is defined as the generatePassword function
  var password = generatePassword();

  //? passwordText is defined as the element where the #password ID is. 
  //? This is so we can put the generated password here.
  var passwordText = document.querySelector("#password");

  //! and now we know that the return in the password spot is the password?
  passwordText.value = password;

}

// Add event listener to generate button
//? This begins the writePassword function when the generate password button is clicked
// generateBtn.addEventListener("click", writePassword);



// ------------------------------------------------------------------------------

//? Ask the user how many characters they want their password to be
//? Set the response to be var passwordLength

var passwordLength = document.getElementById(password - length)
generateBtn.addEventListener("click", characterMakeup);

// var lowercase = confirm("Do you want your password to contain lowercase characters? Click OK for Yes or Cancel for No.")
// var uppercase = confirm("Do you want your password to contain uppercase characters? Click OK for Yes or Cancel for No.")
// var numerical = confirm("Do you want your password to contain numerical characters? Click OK for Yes or Cancel for No.")
// var special = confirm("Do you want your password to contain special characters? Click OK for Yes or Cancel for No.")

var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numericalArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var specialArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "[", "]", "{", "}", ":", ";", "<", ">", "?", ",", "."]
var passwordArray = []

function characterMakeup() {
  var lowercase = confirm("Do you want your password to contain lowercase characters? Click OK for Yes or Cancel for No.")
  console.log (lowercase)
  var uppercase = confirm("Do you want your password to contain uppercase characters? Click OK for Yes or Cancel for No.")
  console.log (uppercase)
  var numerical = confirm("Do you want your password to contain numerical characters? Click OK for Yes or Cancel for No.")
  console.log (numerical)
  var special = confirm("Do you want your password to contain special characters? Click OK for Yes or Cancel for No.")
  console.log (special)

//? Create if/else for each sequence of confirms (16 total) concatenating all relevant arrays
  //? (1) If yes, yes, yes, yes
  
  if (lowercase === "true" && uppercase === "true" && numerical === "true" && special === "true") {
    passwordArray = lowercaseArray.concat(uppercaseArray, numericalArray, specialArray)
  }

  //? (2) If no, yes, yes, yes
  else if (lowercase === "false" && uppercase === "true" && numerical === "true" && special === "true") {
    passwordArray = uppercaseArray.concat(numericalArray, specialArray)
  }

  //? (3) If yes, no, yes, yes
  else if (lowercase === "true" && uppercase === "false" && numerical === "true" && special === "true") {
    passwordArray = lowercaseArray.concat(numericalArray, specialArray)
  }

  //? (4) If yes, yes, no, yes
  else if (lowercase === "true" && uppercase === "true" && numerical === "false" && special === "true") {
    passwordArray = lowercaseArray.concat(uppercaseArray, specialArray)
  }

  //? (5) If yes, yes, yes, no
  else if (lowercase === "true" && uppercase === "true" && numerical === "true" && special === "false") {
    passwordArray = lowercaseArray.concat(uppercaseArray, numericalArray)
  }

  //? (6) If no, no, yes, yes
  else if (lowercase === "false" && uppercase === "false" && numerical === "true" && special === "true") {
    passwordArray = numericalArray.concat(specialArray)
  }

  //? (7) If no, yes, no, yes
  else if (lowercase === "false" && uppercase === "true" && numerical === "false" && special === "true") {
    passwordArray = uppercaseArray.concat(specialArray)
  }

  //? (8) If no, yes, yes, no
  else if (lowercase === "false" && uppercase === "true" && numerical === "true" && special === "false") {
    passwordArray = uppercaseArray.concat(numericalArray)
  }

  //? (9) If yes, no, no, yes
  else if (lowercase === "true" && uppercase === "false" && numerical === "false" && special === "true") {
    passwordArray = lowercaseArray.concat(specialArray)
  }

  //? (10) If yes, yes, no, no
  else if (lowercase === "true" && uppercase === "true" && numerical === "false" && special === "false") {
    passwordArray = lowercaseArray.concat(uppercaseArray)
  }

  //? (11) If yes, no, yes, no
  else if (lowercase === "true" && uppercase === "false" && numerical === "true" && special === "false") {
    passwordArray = lowercaseArray.concat(numericalArray)
  }

  //? (12) If no, no, no, yes
  else if (lowercase === "false" && uppercase === "false" && numerical === "false" && special === "true") {
    passwordArray = specialArray
  }

  //? (13) If no, no, yes, no
  else if (lowercase === "false" && uppercase === "false" && numerical === "true" && special === "false") {
    passwordArray = numericalArray
  }

  //? (14) If no, yes, no, no
  else if (lowercase === "false" && uppercase === "true" && numerical === "false" && special === "false") {
    passwordArray = uppercaseArray
  }

  //? (15) If yes, no, no, no
  else if (lowercase === "true" && uppercase === "false" && numerical === "false" && special === "false") {
    passwordArray = lowercaseArray
  }

  console.log (passwordArray.length)
  // //? (16) If no, no, no, no = ERROR
  // else {
  //   alert("You must choose at least one from lowercase characters, uppercase characters, numerical characters or special characters. Please start over.")
    // location.reload()
  }



//? Create var arrays for each confirm scenario



// ? LISTEN FOR ALL MOUSE EVENTS????                                                    



// ? Run randomly through the password array until 

  // for (i = 0; i=(passwordLength-1); i++) {

  // }

  // if (lowercase === "true") {
  //   passwordArray = passwordArray.concat(lowercaseArray)
  // }

  // if (uppercase === "true") {
  //   passwordArray = passwordArray.concat(uppercaseArray)
  // }

  // if (numerical === "true") {
  //   passwordArray = passwordArray.concat(numericalArray)
  // }

  // if (special === "true") {
  //   passwordArray = passwordArray.concat(specialArray)
  // }

  // console.log(passwordArray.length)