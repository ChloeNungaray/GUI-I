/* 
File: multiply.js
GUI Assignment: Using the jQuery Plugin/UI with Dynamic Table Part 2
Description: This javascript file generates a multiplication table
and also creates tabs of multiplication tables.
Chloe Nungaray, UMass Lowell Computer Science, chloe_nungaray@student.uml.edu
Copyright (c) 2021 by Chloe. All rights reserved. May be freely copied or
excerpted for educational purposes with credit to the author.
updated by CN on November 22, 2021 at 9:24 PM
*/

/*global variable to keep track of how many current tabs there are*/
var tabCount=1;
/*This function deletes all the tabs */
function delectAll(){
    var str = "#tab";
    /*go through each tab id and remove it*/
    for(tabCount;tabCount!=0;tabCount--){
    $(str+tabCount).remove();
    }
    /*delete all of the li elements to remove all the tabs*/
    $("li").remove();
    tabs.tabs("refresh");
    /*set tab count back to 1*/
    tabCount = 1;
}
/*this function creates a tab*/
function createTab(){
    /*if there is an error present, do not create a tab*/
    if(!($("#multTable").valid())){
        return False;
    }
    /*count the number of list items since each tab is located on a li*/
    var tabNum = $("li").length;
    /*set a maximum number of tabs and return so a tab isn't created*/
    if (tabNum > 14){
        alert("You have hit the maximum number of allowed tabs(15). Please delete a few tabs to add more.");
        return false;
    }
    /*get the values from the form*/
    var min_col = parseInt($("#num1").val());
    var max_col = parseInt($("#num2").val());
    var min_row = parseInt($("#num3").val());
    var max_row = parseInt($("#num4").val());
    var tabs = $("#tabs").tabs();

    /*swap values for it to make sense in the tab titles*/
    if(min_col > max_col){
        var temp;
        temp = min_col;
        min_col = max_col;
        max_col = temp;
    }
    if(min_row > max_row){
        var temp;
        temp = min_row;
        min_row = max_row;
        max_row = temp;
    }
    tabCount++;
    /*set a title for each tab*/
    var tabTitle = "<li><a href='#tab" + tabCount +"'>" + "Column Values: " + min_col + " to " + max_col + " by Row Values:" + min_row +
    " to " + max_row + "</a>" +"<span class='ui-icon ui-icon-close' role='presentation'></span>" + "</li>";
    $("div#tabs ul").append(tabTitle);
    $("div#tabs").append('<div id="tab'+tabCount+'" class="tabscroll" style = "overflow:auto">'+$("#multTab").html()+'</div>');
    $("#tabs").tabs("refresh");
    $("#tabs").tabs("option", "active", -1);
    /*used code from https://jqueryui.com/tabs/#manipulation to add x buttons to delete the tabs*/
    tabs.on( "click", "span.ui-icon-close", function() {
        var panelId = $( this ).closest( "li" ).remove().attr( "aria-controls" );
        $( "#" + panelId ).remove();
        tabs.tabs( "refresh" );
    });
}

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
    $("#error").html("Minimum column value greater than maximum column value. Swapping these values."+"<br>");
    var temp;
    temp = min_col;
    min_col = max_col;
    max_col = temp;
    /*$("#num1").val(max_col);
    $("#num2").val(min_col);*/
}

var min_row = $("#num3").val();
var max_row = $("#num4").val();

/*switch values if min row is greater than max row*/
if(parseInt(min_row)>parseInt(max_row)){
    //display a message to tell user that the values have been swapped
    $("#error").html($("#error").html()+ "Minimum row value greater than maximum row value. Swapping these values.");
    var temp;
    temp = min_row;
    min_row = max_row;
    max_row = temp;
    /*$("#num3").val(max_row);
    $("#num4").val(min_row);*/
}


/*Get the integer values*/
var num1 = parseInt(min_col);
var num2 = parseInt(max_col);
var num3 = parseInt(min_row);
var num4 = parseInt(max_row);

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

