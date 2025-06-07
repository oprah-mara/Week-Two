// src = "script.js"

// prompts and alerts
// let homeTown = prompt("What is your hometown?");
// alert(homeTown);
// let firstName = prompt("What is your first name?");
// let lastName = prompt ("What is your last name?");
// alert(firstName + " " + lastName);

// const userName = "Amarachi";
// alert(userName);
// console.log(userName);


// let is a block scope and variable can be reassigned but not redeclared
//  {   
//     let x = 10;
//         x = "NY";
//     console.log(x +" " + "amarachi");
// }

// const is a block scope element and cannot be redeclared or reassigned
// {
//     const xyz = 200;
//     //  xyz = 50;
//     console.log(xyz)
// }

// const and let can be used in the block {}
// {
//     let name = "Amara";
//     const Age = 20;
//     console.log(Age + " " + name);
// }

// let FirstName = prompt ('What is your first name?');
// let LastName = prompt ('What is your last name');
// alert(FirstName + ' ' + LastName);


//  this 
// let hometown = prompt("what is your hometown");
// alert(hometown);
// let firstName = prompt("What is your first name?");
// let lastName = prompt ("what is your last name?");
// alert(firstName + " "+ lastName + " is from " + hometown );

// or this
// let hometown = prompt("What is your hometown?");
// alert(hometown);


// let firstName = prompt("What is your first name");
// let lastName = prompt("What is your last name");

// let fullName = firstName + " " + lastName;
// alert(fullName);

// if statement
// let age = prompt("How old are you?");
// if (age < 18){
//     alert( "You cannot apply"); 
// }
// if (age >= 18){
//     alert("You can apply to Shecodes");
// }

// if else statement

// let currentHour = prompt("What is the time?");
// currentHour = Number(currentHour); // Convert input to a number

// if (currentHour < 12) {
//     alert("Good Morning");
// } else if (currentHour > 18) {
//     alert("Good Evening");
// } else {
//     alert("Good Afternoon");
// }


// toLowerCase() - Converts all characters in countryName to lowercase.
// trim() - Removes any leading and trailing whitespace from countryName.
// string.replace(searchValue, newValue) The replace() method in JavaScript is used to replace a specified value or pattern in a string with another value.

// let countryName = prompt("What country are you from?");
// countryName = countryName.toLowerCase().trim(); //this makes sure all cases work eg POturgal, BraZil etc
// if (countryName === "portugal" || countryName === "brazil"){
//     alert("You speak Portugese")
// } else{
//     alert("You dont speak Portugese")
// }

// function askForCountry (){
//     let country = prompt("What is your Country?");//or let country = prompt("What is your Country?").toLowerCase().trim().replace("brazil","brasil");
//     country = country.toLowerCase().trim().replace("brasil","brazil");
//     if (country === "brazil" || country === "portugal")
//     {
//         alert("You speak Portugese");
//     } else {
//         alert("Go learn Portuguese");
//     }
// }
// askForCountry();


// LOgical Operator Practice
// Age Checker
// let teenageAge = 16;
// if(teenageAge >= 13 && teenageAge <= 19 ){
// console.log("You're a teenager");
// }else{
//   console.log("You're not a teenager");
// }

// login Validation
// let username = prompt('what is your user name');
// let password = prompt('what is your password');
// if(username === '' || password === ''){
// alert('Log in failed');
// }else {
//   alert('Log in Successful');
// }

// OR this solution

// let userName = "user123"; // Example username
// let passWord = "pass123"; // Example password

// if (username !== "" && password !== "") {
//   console.log("Login successful!");
// } else {
//   console.log("Login failed.");
// }

//Weekend calender
let day = 'weekday';
if(day === 'Saturday'  || day === 'Sunday'){
  console.log('Its a Weekend');
}else {
  console.log('its a weekday');
}

//movie ticket discount
let custAge = 16;
if(custAge <= 12 || custAge >= 60){
  console.log('You get a ticket discount');
}else{
  console.log('You dont qualify for a ticket discount');
}

// or this solution 
let age = 25; // Example age

if (age >= 0 && age <= 12) {
  console.log("Child");
} else if (age >= 13 && age <= 19) {
  console.log("Teenager");
} else if (age >= 20 && age <= 59) {
  console.log("Adult");
} else if (age >= 60) {
  console.log("Senior");
} else {
  console.log("Invalid age");
}


//Access Control
let hasAccount = true;    // Does the user have an account?
let isVerified = true;    // Is the user verified?

if (hasAccount && isVerified) {
  console.log("Access granted.");
} else {
  console.log("Access denied.");
}

//light switch
const isDark = "false"

if (isDark === "false" ){
  console.log("Lights off!");
}else{
  console.log("Lights on!");
}

//weather outfit helper
const isRaining = true;  // you can change these
const isCold = false;    // true or false

if (isRaining && isCold) {
  console.log("Wear a raincoat and sweater.");
} else if (isRaining) {
  console.log("Bring an umbrella.");
} else if (isCold) {
  console.log("Wear a sweater.");
} else {
  console.log("T-shirt is fine!");
}
