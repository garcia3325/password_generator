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
