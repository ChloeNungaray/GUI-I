/* 
File: multiply.js
GUI Assignment: Creating an Interactive Dynamic Table
Description: This javascript file generates a multiplication table
and also displays any error messages due to user error.
Chloe Nungaray, UMass Lowell Computer Science, chloe_nungaray@student.uml.edu
Copyright (c) 2021 by Chloe. All rights reserved. May be freely copied or
excerpted for educational purposes with credit to the author.
updated by CN on October 26, 2021 at 4:10 PM
*/
function generateTable(){
/* Get all the numbers from html form */
var n1 = document.getElementById('num1').value;
var n2 = document.getElementById('num2').value;
var n3 = document.getElementById('num3').value;
var n4 = document.getElementById('num4').value;

var num1 = parseInt(n1);
var num2 = parseInt(n2);
var num3 = parseInt(n3);
var num4 = parseInt(n4);

/*Error checking*/
var text = "<p>";
var bool = 1;/*this bool will keep track if there was an error with the values the user entered
if there was an error, bool = 0 and a table will not be created*/
var err = document.getElementById('error');
/*Check if user is entering a valid number*/
if(isNaN(num1)||isNaN(num2)||isNaN(num3)||isNaN(num4)){
    text+= 'Please enter a numeric value within the range of -50 to 50 (words or characters will not be accepted).<br>';
    bool = 0;
}

/*Check if number user entered is within the specified range*/
if(num1 < -50 || num1 > 50){
    text += 'The number '+num1+' is not within the range of -50 to 50. Please try again.<br>'
    bool = 0;
}

if(num2 < -50 || num2 > 50){
    text += 'The number '+num2+ ' is not within the range of -50 to 50. Please try again.<br>'
    bool = 0;
}

if(num3 < -50 || num3 > 50){
    text += 'The number '+num3+ ' is not within the range of -50 to 50. Please try again.<br>'
    bool = 0;
}

if(num4 < -50 || num4 > 50){
    text += 'The number '+num4+ ' is not within the range of -50 to 50. Please try again.<br>'
    bool = 0;
}

/*swap the minimum column size and maximum column size if minimum column size is larger*/
if(num1 > num2 && bool!=0){
    text+= "Minimum Column size is greater than Maximum Column size. Swapping these values.<br>";
    var temp = num1;
    num1 = num2;
    num2 = temp;
}
/*swap the minimum row size and maximum row size if minimum row size is larger*/
if(num3 > num4&&bool!=0){
    text+= 'Minimum Row size is greater than Maximum Row size. Swapping these values.<br>'
    var temp = num3;
    num3 = num4;
    num4 = temp;
}
text+="</p>";

/*Check if user entered a decimal number*/
if(n1.indexOf(".")!=-1||n2.indexOf(".")!=-1 || n3.indexOf(".")!=-1 || n4.indexOf(".")!=-1){
    text+="<p id = 'p1'>Please note that decimal values will be rounded down to the nearest whole number.</p>";
}

/*Make sure there were messages added, else do not display change the innerHTML*/
if(text!="<p></p>"){
err.innerHTML = text;
}

if(bool==1){
var dynamicTab = document.getElementById("multTab");
var table = "<table id = 'table1'>";

/*this loop sets the table headers for the column headers*/
for(let k = num1;k<=num2;k++){
    
    /*add empty cell to first row to align table correctly*/
    if(k == num1){
        table+="<tr><td></td>"
    }
    table+="<th id = 'th1'>"+k+"</th>";   
}
table+="</tr>";

/*Make Multiplication Table using a nested for loop*/
for(let i = num3;i<=num4;i++){    
    table+="<tr>";
    /*make a table header for each row start*/
    table+="<th id ='th2'>"+ i + "</th>";
    for(let j = num1; j<=num2;j++){
        table+="<td id = 'td1'>"+(i*j)+"</td>";
    }
    table+="</tr>"
}
table+="</table>";
dynamicTab.innerHTML = table;
}
}
