/* 
File: multiply.js
GUI Assignment: Using the jQuery Plugin/UI with Dynamic Table Part 1
Description: This javascript file generates a multiplication table
and also displays a message if values entered by the user needed to be swapped.
Chloe Nungaray, UMass Lowell Computer Science, chloe_nungaray@student.uml.edu
Copyright (c) 2021 by Chloe. All rights reserved. May be freely copied or
excerpted for educational purposes with credit to the author.
updated by CN on November 19, 2021 at 8:42 PM
*/


function generateTable(){

    /*clear out any lingering messages from the last table*/
    $("#error").html("");

    /*check if the form was valid, if not, return and do not generate a table*/
    if(!($("#multTable").valid())){
        return False;
    }


var min_col = $("#num1").val();
var max_col = $("#num2").val();

/*switch values if min column is greater than max column*/
if(parseInt(min_col)>parseInt(max_col)){
    //display a message to tell user that the values have been swapped
    $("#error").html("Minimum column value greater than maximum column value. Swapping."+"<br>");
    $("#num1").val(max_col);
    $("#num2").val(min_col);
}

var min_row = $("#num3").val();
var max_row = $("#num4").val();

/*switch values if min row is greater than max row*/
if(parseInt(min_row)>parseInt(max_row)){
    //display a message to tell user that the values have been swapped
    $("#error").html($("#error").html()+ "Minimum row value greater than maximum row value. Swapping.");
    $("#num3").val(max_row);
    $("#num4").val(min_row);
}


/*Get the integer values*/
var num1 = parseInt($("#num1").val());
var num2 = parseInt($("#num2").val());
var num3 = parseInt($("#num3").val());
var num4 = parseInt($("#num4").val());

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

