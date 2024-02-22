// variables for passowrd characters
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialchar = ["!", "@", "#", "$", "%", "&", "*", "+", "=", ";", ":", "?", ",", ".", "/", "<", ">", "{", "}", "[", "]", "(", ")", "~", "^"];
var digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //prompt user for password criteria
  var passwordLength = prompt("Please select a number between 8 and 128 for the length of your password.")

  while (passwordLength < 8 || passwordLength > 128) {
    window.alert("The number selected was not between 8 and 128. Please try again.")
    passwordLength = prompt("Please select a number between 8 and 128 for the length of your password");
  }
  var upper = false;
  var lower = false;
  var special = false;
  var number = false;
  while (upper === false && lower === false && special === false && number === false) {
    upper = confirm("Would you like your password to have uppercase letters?")
    lower = confirm("Would you like your password to have lowercase letters?")
    special = confirm("Would you like your password to have special characters?")
    number = confirm("Would you like your password to contain numbers?")
    if (upper === false && lower === false && special === false && number === false) {
      window.alert("Please select at least one of the of the password categories")
    }
  }
  // why would computer pick not just be password length. i need help understanding this for loop better
  var computerPick = "";
  for (i = 0; i < passwordLength; i++) {
    if (upper && computerPick.length < passwordLength) {
      var randomIndex = Math.floor(Math.random() * uppercase.length)
      computerPick = computerPick + uppercase[randomIndex]
    }
    if (lower && computerPick.length < passwordLength) {
      var randomIndex = Math.floor(Math.random() * lowercase.length)
      computerPick = computerPick + lowercase[randomIndex]
    }
    if (special && computerPick.length < passwordLength) {
      var randomIndex = Math.floor(Math.random() * specialchar.length)
      computerPick = computerPick + specialchar[randomIndex]
    }
    if (number && computerPick.length < passwordLength) {
      var randomIndex = Math.floor(Math.random() * digits.length)
      computerPick = computerPick + digits[randomIndex]
    }
  }
  
  return computerPick;
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
