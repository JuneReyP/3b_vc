// document.getElementById("demo").innerHTML = "Sample JS";

// let docuID = document.getElementById("demo");

// let value = innerHTML = "Sample JS";

// document.write('write function');
// alert('This is an alert!');

// variables
/* 
var 
let
const
*/
var a = 5;
let b = 3;
// let a = 'text';
// console.log(a);
const c = 4;

// JavaScript Operators
/* 
Types of JavaScript Operators

There are different types of JavaScript operators:

    Arithmetic Operators 
        Operator 	Description
            + 	        Addition
            - 	        Subtraction
            * 	        Multiplication
            ** 	        Exponentiation (ES2016)
            / 	        Division
            % 	        Modulus (Division Remainder)
            ++ 	        Increment
            -- 	        Decrement
    Assignment Operators
    Operator 	Example 	Same As
        = 	    x = y 	    x = y
        += 	    x += y 	    x = x + y
        -= 	    x -= y 	    x = x - y
        *= 	    x *= y 	    x = x * y
        /= 	    x /= y 	    x = x / y
        %= 	    x %= y 	    x = x % y
        **= 	x **= y 	x = x ** y
    Comparison Operators
    Operator 	Description
        == 	    equal to (1 == 1 or 1 == '11')
        === 	equal value and equal type
        != 	    not equal
        !== 	not equal value or not equal type
        > 	    greater than
        < 	    less than
        >= 	    greater than or equal to
        <= 	    less than or equal to
        ? 	    ternary operator
    Logical Operators
        Operator 	Description
            && 	        logical and
            || 	        logical or
            ! 	        logical not

            example
            ((condition = T) || (condition = T))
    Ternary Operators
    ?
    (condition) ? ifTrue : ifFalse;


*/
console.log(1 === "1");
console.log(1 != "1");
console.log(1 !== "1");

/* 

JavaScript has 8 Datatypes

1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
8. Object

The Object Datatype

The object data type can contain:

1. An object
2. An array
3. A date

*/

// function without parameter
function myfunction() {
  let selectID = document.getElementById("demo");
  selectID.innerHTML = "Sample JS";
  selectID.style.backgroundColor = "grey";
  selectID.style.border = "1px solid red";
}

// function with parameter
function sumOF(num1, num2) {
  let answer = parseInt(num1) + parseInt(num2);
  document.getElementById("result").innerHTML = answer;
}

function trigger() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;

  sumOF(num1, num2);
}
// arrays
// let cars = ["Saab", "Volvo", "BMW", 1, true];

//document.write(cars[0] + ' ' + cars[4]);

//conditional statements
// if
//if else
//if elseif else
//switch-case
//for-loop
//while-loop

//if
// if(condition){
//     //executed code if the condition is true
// }

// if(1 > 0){
//     document.write('that is true');
// }

//if else
// if(condition){
//     //executed code if the condition is true
// }else{
// executed code if the condition is false
//}
// if(1 < 0){
//     document.write('that is true');
// }else{
//     document.write('that is false');
// }

//if elseif else
// if(condition){
//     //executed code if the condition is true
// }elseif(condition){
// executed code if the second condition is true
//}else{
//executed code if the all condition are false
// }

// if(1 < 0){
//     document.write('that is true');
//     // if(){

//     // }
// }else if(1 < 0){
//     document.write('that is true for 2nd condition');
// }else if(1 > 0){
//     document.write('that is true for 3rd condition');
// }else{

// }

/**
switch(y) {
  case x:
    // code block
    break;
  case y:
    // code block
    if()
    for()
    switch()
    break;
  default:
    // code block
}
 */

// let data = 2;
// switch(data){
//     case 0:
//         alert('Light\'s ON')
//         break;
//     case 1:
//         alert('Light\'s OFF')
//         break;
//     default:
//         alert("Not in the case's");
//         break;
// }
// let day = "";
// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//   case 1:
//     day = "Monday";
//     alert(day);
//   case 2:
//     day = "Tuesday";
//     alert(day);
//   case 3:
//     day = "Wednesday";
//     alert(day);
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
// }

// let input = Number(prompt("Select: \n [1] Check Balance \n [2] Withdraw \n [3] Deposit \n [4] Exit"));

// let bal = 3000;
// switch(input){
//     case 1:
//         alert(bal)
//         break;
//     case 2:
//         let withdraw_amount = Number(prompt("Enter amount to withdraw"));

//         if(withdraw_amount < bal){
//             let new_bal = withdraw_amount - bal;
//             alert(new_bal)
//         }else{
//             alert("Cannot withdraw greater than your balance")
//         }
//         break;
//     case 3:
//         let deposit_amount = Number(prompt("Enter amount to deposit"));
//         let new_deposit = bal + deposit_amount;
//         alert(new_deposit)
//     case 4:
//         break;

// }

/**
for (intializer; condition; iterator) {
  // code block to be executed
}
 */

// for(let start = 0; start < 5; start++){
//     alert(start);
// }

//alert(0)
//alert(1)
//alert(2)
//alert(3)
//alert(4)

// arrays
// let cars = ["Saab", "Volvo", "BMW", 1, true];

// for(let i = 0; i < 5; i++){
//     alert(cars[i]);
// }

//cars[0] = Saab
//cars[1] = Volvo

let myArr = [
  ["Saab", "Volvo", "BMW", "Saab", "Volvo", "BMW"], //0
  ["Banana", "Apple", "Orange", "Orange"], //1
  [
    ["Red", "Green", "Yellow"],
    ["Red", "Green", "Yellow"],
    ["Red", "Green", "Yellow"],
  ], //2
  ["Red", "Green", "Yellow"], //3
  ["Red", "Green", "Yellow"], //4
];

// document.write(myArr[2][2][])

// for(let i = 0; i < myArr.length; i++){
//     for(let j = 0; j < myArr[i].length; j++){
//         document.write(myArr[i][j] + "<br>")
//     }
//     document.write("<br>")
// }

//myArr[0][0] = Saab
//myArr[0][1] = Volvo
//myArr[0][2] = BMW

//myArr[1][0] = Banana
//myArr[1][1] = Apple
//myArr[1][2] = Orange

/**
while (condition) {
  // code block to be executed
}
 */
// let i = 0;
// let text = "";
// while (i < 10) {
//     text = "The number is " + i
//     document.write( text + "<br>");
//     i++;
//   }

let bal = 5000;
let start = true;
while (start) {
  let input = parseInt(
    prompt(
      "Select: \n [1] Check Balance \n [2] Withdraw \n [3] Deposit \n [4] Exit"
    )
  );
  
  switch (input) {
    case 1:
      alert(bal);
      break;
    case 2:
      let withdraw_amount = parseInt(prompt("Enter amount to withdraw"));

      if (withdraw_amount < bal) {
         bal = bal - withdraw_amount;
        alert(bal);
      } else {
        alert("Cannot withdraw greater than your balance");
      }
      break;
    case 3:
      let deposit_amount = parseInt(prompt("Enter amount to deposit"));
      bal = bal + deposit_amount;
      alert(bal);
      break;
    case 4:
        start = false;
      break;
  }
}

/**
 * 1. Create a simple calculator using switch-case with html and JS
        *inputs:
        1st number and 2nd number and display the total
        buttons:
        + - / *

2. Create a simple program that accepts user input and display a left-triangle asterisk(*) using nested for-loop
        output:
        Sample input: 3
        *
        **
        ***

3. Create a program that checks a letter if a vowel or a consonant using switch-case
 */