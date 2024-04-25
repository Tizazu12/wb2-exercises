"use strict";

//given value
var numOfPeople =38;
var vanCostPerDay = 250;
var vanSeatPassengers =15;

//calculation  total of van we need
var totalOfVan = numOfPeople/vanSeatPassengers;
// to find total cost of the van
var totalCost = totalOfVan * 250;
//find the charge per person
var costPerPerson = Math.ceil(totalCost/numOfPeople);
//find how much we collect
var collect = numOfPeople * costPerPerson;


 
console.log(costPerPerson);

console.log(collect);

