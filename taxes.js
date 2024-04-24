"use strict"
//known values
var salary = 800;
var tax = 0.23;

// we need to find
var taxAmount;
// calculations
var taxAmount = salary * tax;
var taxAmount = Math.round(taxAmount *100) /100;
 
console.log(taxAmount);
