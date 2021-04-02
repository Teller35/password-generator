// Assignment code here
function generatePassword() {
  var length = Number(prompt("Pick a number between 8 and 128."));
  if (length < 8 || length > 128) {
    generatePassword();
  }
  else {
  
 console.log(length);

 var lower = confirm("Would you like lowercase?");
 if (lower) {
  lower = "abcdefghijklmnopqrstuvwxyz";
 }
 var upper = confirm("Would you like uppercase?");
 if (upper) {
  upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}
 var number = confirm("Would you like numeric?");
 if (number) {
  number = "1234567890";
}
 var character = confirm("Would you like special characters?");
 if (character) {
  character = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
}

var passwordSet = "";

if (lower) {
  passwordSet += lower
} 
if (upper) {
  passwordSet += upper
} 
if (number) {
  passwordSet += number
} 
if (character) {
  passwordSet += character
} 
  var passwordText = "";

  for (var i = 0; i < length; i += 1) {
    passwordText += passwordSet[Math.floor(Math.random() * passwordSet.length)];
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
