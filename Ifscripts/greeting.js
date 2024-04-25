"use strict"

//what do we start with
var time = 9;


// what do we need to compute

var greeting;

if (time < 0){
  greeting = "ERROR INVALID HOUR OF " + time;

}

else if (time < 10) {
  greeting = "Good Morning!";
}
else if (time <= 17) {
  greeting = "Good day!";
}
else if (time <= 23) {
  greeting = "Good eveninig!";
}
else{
  greeting = "ERROR INVALID HOUR OF " + time;
}

// display the result

console.log(greeting)

