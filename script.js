//Variables
var length =""
let upperCase = new Array ("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
let lowerCase = new Array ("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
let  numbers = new Array (0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
let specialCharacters = new Array ( "+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^","~", "*", "?", ":" );

// user interaction prompts for password criteria
//window.prompt("Enter a number between 8 and 128 to set your password's length")
//window.confirm("Would you like to use upper and lower cases?");
//window.confirm("Would you like to use Numbers?");
//window.confirm("Would you like to use special characters?");


// validate input by ensuring that character length is between 18-128 and one input is selected







   



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

//generate password function
function generatePassword () {
  return "Generated Password goes here!"
  console.log ("it worked")
}
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
