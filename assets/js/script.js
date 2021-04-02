// Assignment code here
function generatePassword() {
  var length = Number(prompt("Pick a number between 8 and 128."));
  if (length < 8 || length > 128) {
    generatePassword();
  }
  else {

  console.log(length);

 var choices = prompt("Enter 'L' for lowercase, 'U' for uppercase, 'N' for numeric, 'C' for character or 'A' for all.");
 console.log(choices);
 var passwordSet = "";
 var choices = choices.toLowerCase();
 if (choices === "l") {
   passwordSet = "abcdefghijklmnopqrstuvwxyz";
  }
  else if (choices === "u") {
    passwordSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  else if (choices === "n") {
    passwordSet = "1234567890"
  }
  else if (choices === "c") {
    passwordSet = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  }
  else if (choices === "a") {
    passwordSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
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
