// Assignment code here
function generatePassword() {
  var length = Number(prompt("Pick a number between 8 and 128."));
  if (length < 8 || length > 128) {
    generatePassword();
  }
  else {

  console.log(length);

 var lower = confirm("Would you like lowercase?");
 var upper = confirm("Would you like uppercase?");
 var number = confirm("Would you like numeric?");
 var character = confirm("Would you like special characters?");
 console.log(lower);
 console.log(upper);
 console.log(number);
 console.log(character);

 var passwordSet = "";
 
 if (lower) {
   passwordSet = "abcdefghijklmnopqrstuvwxyz";
  }
  if (upper) {
    passwordSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  if (number) {
    passwordSet = "1234567890"
  }
  if (character) {
    passwordSet = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  }
  var passwordText = "";
  for (var i = 0; i < length; i++) {
    passwordText += passwordSet.charAt(Math.floor(Math.random() * passwordSet.length));
  } 
  console.log(passwordText);
  return passwordText; 
}
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
