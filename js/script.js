//addition

const num1 = 15;
const num2 = 20;

const add = num1 + num2;

console.log('sum of ' + num1 + ' and ' + num2 + ' is: ' + add);



//subraction


const num3 = 15;
const num4 = 20;

const sub = num3 - num4;

console.log('sum of ' + num3 + ' and ' + num4 + ' is: ' + sub);




//multipication


const num5 = 15;
const num6 = 20;

const mul = num5 * num6;

console.log('sum of ' + num5 + ' and ' + num6 + ' is: ' + mul);



//divide


const num7 = 15;
const num8 = 20;

const div = num7 / num8;

console.log('sum of ' + num7 + ' and ' + num8 + ' is: ' + div);



//area of a circle

var r = 20;


console.log('The area of circle with radius 20cm is: ' + Math.PI * r * r);


//area of a triangle

const base = 10;
const height = 15;
const areaOfTriangle = (base * height) / 2;

console.log('area of a triangle:' + areaOfTriangle);


//simple interest


var p, t, r, SI;

p = 15000;
t = 12;
r = 12;

SI = (p * t * r) / 100;

console.log("Simple Interest = " + SI);


//area of square

var areaOfSquare = 20;


console.log('The area of square is: ' + areaOfSquare * areaOfSquare);



//area of cube

const a = 10;
const areaOfCube = 6*(a*a);

console.log('The area of Cube is: ' + areaOfCube);



//Swap two numbers 

let number1 = 5;
let number2 = 10;

let temp;

temp = number1;
console.log(number1);
number1 = number2;
number2 = temp;

console.log('The value of a after swapping: ' + number1 + ':' + number2);

// 11. Program to calculate total and average

const arr = [10, 20, 30, 40, 50];
let sum = 0;
for (var number of arr) {
    sum += number;
}
average = sum / arr.length;
console.log(average);

// 12. Program for large number

function maxOfThree(x, y, z) 
 {
  maxVal = 0;
  if (x > y)
  {
    maxVal = x;
  } else
  {
    maxVal = y;
  }
  if (z > maxVal) 
  {
    maxVal = z;
  }
  return maxVal;
}

console.log(maxOfThree(1000,510,440));

// 13. Program to check number is positive or not

let number11 = prompt(" Q: Program to check number is positive or not \n Input: Enter the number", "");
number11 = parseInt(number11);

if(number11 < 0)
    console.log("\nYou entered Negative Number.");
else if(number11 > 0)
    console.log("\nYou entered Positive Number.");
else
    console.log("\nYou entered Zero.");


// 14. Program to check number is greater than 10

let number21 = 10;

if (number21 > 10) {
  console.log('\nGiven number is greater than 10.');
}

// 15. Even or Odd

const evenOdd = 17;

if(evenOdd% 2 == 0) {
    console.log("\nThe number is even.");
}
else {
    console.log("\nThe number is odd.");
}

// 16. Program to check whether number is divisible by 5

const divBy5 = 9;

if (divBy5 % 2 === 0) {
  console.log("Even")
} else {
 console.log("Odd") 
}


// 17. Program to check whether number is multiple of 7

var multiOf7 = 12;

if (multiOf7 % 3 == 0)
	console.log('Multiple of 7')
else 
  console.log('Not a multiple of 7')

// 18. Ascending and Decending order of 3 numbers

// let = ascDes;
// let ascDes = [5, 13, 1, 44, 32, 15, 500];

// let ascending = aseDes.sort((a, b) => a - b);
// let descending = aseDes.sort((a, b) => b - a);

// console.log(ascending);
// console.log(descending);

// 21. Program to find marriage eligibility

function validate(age) {
var ans="not eigible";
if(age >= 18){
  ans = "eligible";
}
console.log("You are "+ans+" for marriage");
}

var age = 55;



var year = 2000;
if(year%4==0) {
	console.log("leap year");
}
else {
	console.log("non leap year");
}

var num = 2;
if(num % 11==0)  {
	console.log("divide by 11");
	
}
else{
	console.log("doesnt divide with 11");
}


var mark = 30;
if(mark > 80) {
	console.log("a grade");
}
else if (50< mark) {
	console.log("b grade");
}
else if (35<mark){
	console.log("c grade");
}
else if (35<=mark) {
	console.log("d grade");
}
else {
	console.log("fail");
}
	