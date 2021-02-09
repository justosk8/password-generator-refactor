// Assignment Code
//random arrays
var symbols = ['@', '#', '$', '%', '^', '&', '*', '(', ')', '~', '-', '[', ']', '{', '}', ':', '!' ];
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// collect password options
function getPasswordOptions() {
  var length = prompt('Password character length?');
  if (NaN(length) === true) {
    alert('Length must be a number');
    return;
  };
  if (length < 8 || length > 128) {
    alert('Must be at least 8, and no more than 128 characters');
    return;
  };
 
  var specChar = confirm('Click OK to include special characters');
  var numberChar = confirm('Click OK to include numbers');
  var lowerCaseChar = confirm('Click OK to include lowercase characters');
  var upperCaseChar = confirm('Click OK to include uppercase characters');
  
  if (specChar === false && numberChar === false && lowerCaseChar === false && upperCaseChar === false) {
    alert('Must select at least one character type');
    return;
  };

  var passwordOptions = {
    length: length,
    specChar : specChar,
    numberChar: numberChar,
    lowerCaseChar: lowerCaseChar,
    upperCaseChar: upperCaseChar
  };
  return passwordOptions;
};

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
