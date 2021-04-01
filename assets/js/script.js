// Assignment code here
function generatePassword() {
  var passwordLength = Number(prompt("Pick a number between 8 and 128."));
  if (passwordLength < 8 || passwordLength > 128) {
    generatePassword();
  }
  else {
    options();
  }
  console.log(passwordLength);
}
var options = function() { 
 var choices = prompt("Enter 'L' for lowercase, 'U' for uppercase, 'N' for numeric, or 'C' for character.");
 var passwordSet = "";
 var choicesTypeLower = choicesTypeLower.toLowerCase();
 if (choicesTypeLower === "l") {
   passwordSet = "abcdefghijklmnopqrstuvwxyz";
 }
 else if (choicesTypeLower === "u") {
   passwordSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
 }
 else if (choicesTypeLower === "n") {
   passwordSet = "1234567890"
 }
 else if (choicesTypeLower === "c") {
   passwordSet = "~!@#$%^&*()_-+={}[]|<>.?/;:"
 }  
 var returnValue = "";
 for (var i = 0; i < passwordLength; i++)  
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// var passwordInfo = {
// numeric: function() {
//   Math.floor(Math.random());
// },
// lowerCase: "",  
// upperCase: "", 
// characters: "",  
// numeric: 
// }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
var n = ["1234567890"]
var l = ["abcdefghijklmnopqrstuvwxyz"]
var u = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
var c = ["~!@#$%^&*()_-+={}[]|<>.?/;:"]