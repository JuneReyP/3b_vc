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
let b =3;
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
console.log(1 === '1');
console.log(1 != '1');
console.log(1 !== '1');

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
function myfunction(){
    let selectID = document.getElementById("demo");
    selectID.innerHTML = "Sample JS";
    selectID.style.backgroundColor = "grey";
    selectID.style.border = "1px solid red";
}

// function with parameter
function sumOF(num1, num2){
    let answer = parseInt(num1) + parseInt(num2);
    document.getElementById("result").innerHTML = answer;
}

function trigger(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    sumOF(num1, num2);
}
// arrays
let cars = ["Saab", "Volvo", "BMW", 1, true];

//document.write(cars[0] + ' ' + cars[4]);

//conditional statements
// if
//if else
//if elseif else
//switch
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

if(1 < 0){
    document.write('that is true');
    // if(){

    // }
}else if(1 < 0){
    document.write('that is true for 2nd condition');
}else if(1 > 0){
    document.write('that is true for 3rd condition');
}else{

}