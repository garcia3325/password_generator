//Variables
var characterLength = 8;
var ChoiceArr = [];

var upperCase = new Array ("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
var lowerCase = new Array ("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
var  numbers = new Array (0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
var specialCharacters = new Array ( "+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^","~", "*", "?", ":" );

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var userInput = getPrompts ();
  var passwordText = document.querySelector("#password");   
    
  if (userInput) {
      var password = generatePassword(); 
       passwordText.value = password;
    } else {
      passwordTest.value ="";
    }
  }
//generate password function
function generatePassword () {
  var password = "";
  for (var i=0; i<characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * ChoiceArr.length);
    password = password + ChoiceArr[randomIndex];
  }  
  return password;
}
// user interaction prompts for password criteria
function getPrompts () {
  
  ChoiceArr =[];

  characterLength = parseInt(window.prompt("Enter a number between 8 and 128 to set your password's length"));
  
  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert ("Character length is invalid. Please try again.");
    return false;
  }
    if (window.confirm("Would you like to use lower case letters?")) {
      ChoiceArr = ChoiceArr.concat(lowerCase);
    }
    if (window.confirm("Would you like to use upper case letters?")) {
      ChoiceArr = ChoiceArr.concat(upperCase);
    }
    if (window.confirm("Would you like to use numbers?")) {
      ChoiceArr = ChoiceArr.concat(numbers);
    }
    if (window.confirm("Would you like to use special characters?")) {
      ChoiceArr = ChoiceArr.concat(specialCharacters);
    }
    return true;
    }