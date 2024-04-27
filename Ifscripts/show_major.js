"use strict";
let  studentName ="samri";

//
let studentMajor;
let majorName;
let departmentOffice;

if (studentMajor == "BIOL")
{ majorName = "Biology"
  departmentOffice ="science Bldg,Room 310";
}
else if (studentMajor == "CSCI")
{ majorName = "computer Science"
  departmentOffice ="shappard Hall,Room 314";
}
else if(studentMajor == "ENG")
{ majorName = "English"
  departmentOffice ="Kerr Hall,Room 201";}

  else if(studentMajor == "HIST")
{ majorName = "History"
  departmentOffice ="kerr Hall,Room 114";}

 else (studentMajor =="MKT") 
 { 
  majorName = "Marketing"
  departmentOffice ="Westly Hall,Room 310";
 }
// display the results.
 console.log("Student: " + studentName);
 console.log("Major: "+ majorName);
 console.log("Advising Locattion: "  + departmentOffice);