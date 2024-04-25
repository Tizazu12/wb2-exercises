"use strict"
var payRate = 12.50;
var hoursWorked = 20;
var grosspay;
var annualGrossPay;
// 20 hours 

grosspay = payRate * hoursWorked;
annualGrossPay = grosspay * 52;

console.log(annualGrossPay);

// 40 hours
var payRate = 25;
var hoursWorked = 40;



grosspay = payRate * hoursWorked;
annualGrossPay = grosspay * 52;


console.log(annualGrossPay);

// overtime
var payRate = 17.30;
var hoursWorked = 45;
var overtime;

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



annualGrossPay = grosspay * 52;




console.log(annualGrossPay);

/// sigle filers

// var annualIncomeRenge; 
var taxRate;

// if(annualIncomeRenge <= 12000 ) {
//   taxRate = 0.05;
// } 

//  else if 
//   (annualIncomeRenge <= 2499999);{
//     taxRate = 0.1;
//   }


//  { annualIncomeRenge <= 7499999;
// taxRate = 0.15
// } else(annualIncomeRenge >= 75000) {taxRate= .20;}

// 
var single;

if (stat == "single") {
   if (annualGrossPay <= 12000) {
    taxRate = 0.05;
  }
  else if (annualGrossPay <= 24999.99) {
    taxRate = 0.1;
  }
  else if (annualGrossPay <= 75999.99) {
    taxRate = 0.15;
  }
  else {
    taxRate = .20;
  }
}
//
if (stat == "joint") {
  if (annualGrossPay < 12000) {
    taxRate = 0;
  }
  else if (annualGrossPay < 25000) {
    taxRate = 0.06;
  }
  else if (annualGrossPay <= 75999.99) {
    taxRate = 0.11;
  }
  else {
    taxRate = 0.2;
  }
}


let taxHold = grosspay * taxRate;
let net = grosspay - taxHold;

console.log("you worked " + hoursWorked + " hours this period.")
console.log("because you earn" + payRate + "per hour, your is " + grosspay + "if you filling ststus is " 
+ single)
console.log()

