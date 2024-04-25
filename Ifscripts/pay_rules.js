"use strict";
 // calculating gross pay
 var payRate = 12.50;
 var hoursWorked = 20;
 var grosspay;

 
  grosspay = payRate * hoursWorked;
 


console.log(grosspay);

//
var payRate = 25;
var hoursWorked = 40;

  grosspay = payRate * hoursWorked;
 
console.log(grosspay);

// overtime
var payRate = 17.30;
var hoursWorked = 45;


if (hoursWorked <= 40 ){
  grosspay = payRate * hoursWorked;
 } 
 else { 
  var overTime = hoursWorked - 40;
  var overTimeRate = payRate * 1.5;
  var basePay = 40 * payRate;
  var overTimePay = overTime * overTimeRate;

  grosspay = basePay + overTimePay;
}


console.log(grosspay);