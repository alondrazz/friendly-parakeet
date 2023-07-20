// Assignment code here

// Prompt the user for the password criteria
//    a. password length 8<128
//    b. Lowercase, uppercase, numbers, special characters
var password=document.getElementById("password");
var lowerCaseArr= "abcdefghijklmnopqrstuvwxyz";
var uppercaseArr="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharArr= "!@#$%^&*()_+";
var numberarr="1234567890";
var passwordLength= "12";
var password= "";
var choiceArr=[];

// Display password to the page
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  console.log("Hey! You clicked the button!")
  return "Generated password will go here!"
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
    var correctPrompts = getPrompt();
    var passwordText = document.querySelector("#password");
    
    if (correctPrompts) {
      var newPassword = generatePassword();
      passwordText.value = newPassword;
    } else{
      passwordText.value = "";
    }
}

// Get references to the #generate element
function generatePassword() {
  var password = "";
  for(var i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * choiceArr.length);
      password = password + choiceArr[randomIndex];
  }
  return password;
}

function getPrompt() {
  choiceArr =[];

  characterLength = parseInt(prompt("Password needs to be between 8-12 characters"));
  
  if (isNaN(passwordLength) || characterLength < 8 || characterLength > 12) {
      alert(" Character length has to be a number between 8-12 digits. Please try again");
      return false;
  }
  if (confirm("Did you want to add lowercase letters in your password?")) {
    choiceArr = choiceArr.concat(lowerCaseArr);
  }
  if (confirm("Did you want to use uppercase in your password?")) {
    choiceArr = choiceArr.concat(uppercaseArr);
  }
  if (confirm("Did you want to use special characters in your password?")) {
    choiceArr = choiceArr.concat(specialCharArr);
  }
  if (confirm("Did you want numbers in your password")) {
    choiceArr = choiceArr.concat(numberarr);
  }
  return true;
}
