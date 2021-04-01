// Assignment code here
function generatePassword() {
  var length = Number(prompt("Pick a number between 8 and 128."));
  if (length < 8 || length > 128) {
    generatePassword();
  }

  console.log(length);
 
 var choices = prompt("Enter 'L' for lowercase, 'U' for uppercase, 'N' for numeric, or 'C' for character.");
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
   passwordSet = "~!@#$%^&*()_-+={}[]|<>.?/;:"
 }  
 var passValue = "";
 for (var i = 0; i < length; i++) {
   passValue += passwordSet.charAt(Math.floor(Math.random() * passwordSet.length));
 } 
 console.log(passValue);
 return passValue; 
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
