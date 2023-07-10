"use strict" //Treat all JS code as newer verison.

/*
Primitive DT:
number
bigInt
string
boolean
null
undefined
symbol--Unique

Non-primitive DT:
array
object
function 
*/

let age = 25;
// console.log(typeof age);

// typeof undefined: undefined
// typeof null: object
// typeof function: function

//++++++++++++++++++++++++++++++++++++++++++++++

//*Conversion:

// let  value = "33";
// console.log(typeof value);
// let value1 = Number(value)
// console.log(typeof value1);

// let value = "33abc";
// console.log(typeof value);
// let value1 = Number(value)
// console.log(value1);
// console.log(typeof value1);

//**typeof NaN-------is number

//+++++++++++++++++++++++++++++++++++++++++++++++++++

//Comparison:

console.log(null>0);
console.log(null==0); //equality check
console.log(null>=0);

//Comparison operator changed null(not undefined data type) to a number, treating it as 0.

//++++++++++++++++++++++++++++++++++++++++

//Two types of memory in JS:
//Stack(Primitive), Heap(non-primitive);
