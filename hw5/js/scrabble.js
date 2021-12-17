/* 
File: scrabble.js
GUI Assignment: Implementing a Single-Player Scrabble game with Drag-and-Drop
Description: This javascript file currently contains functions that generate random tiles,
generate droppable objects, and restarts the scrabble game.
Chloe Nungaray, UMass Lowell Computer Science, chloe_nungaray@student.uml.edu
Copyright (c) 2021 by Chloe. All rights reserved. May be freely copied or
excerpted for educational purposes with credit to the author.
updated by CN on December 16, 2021 at 9:15 PM
*/

/*This is a global data structure that contains the tile letters as well
as their value and how many are left. Creator of this data structure is Ramon Meza*/
var ScrabbleTiles={"pieces": [
	{"letter":"A", "value":1, "amount":9},
	{"letter":"B", "value":3, "amount":2},
	{"letter":"C", "value":3, "amount":2},
	{"letter":"D", "value":2, "amount":4},
	{"letter":"E", "value":1, "amount":12},
	{"letter":"F", "value":4, "amount":2},
	{"letter":"G", "value":2, "amount":3},
	{"letter":"H", "value":4, "amount":2},
	{"letter":"I", "value":1, "amount":9},
	{"letter":"J", "value":8, "amount":1},
	{"letter":"K", "value":5, "amount":1},
	{"letter":"L", "value":1, "amount":4},
	{"letter":"M", "value":3, "amount":2},
	{"letter":"N", "value":1, "amount":5},
	{"letter":"O", "value":1, "amount":8},
	{"letter":"P", "value":3, "amount":2},
	{"letter":"Q", "value":10, "amount":1},
	{"letter":"R", "value":1, "amount":6},
	{"letter":"S", "value":1, "amount":4},
	{"letter":"T", "value":1, "amount":6},
	{"letter":"U", "value":1, "amount":4},
	{"letter":"V", "value":4, "amount":2},
	{"letter":"W", "value":4, "amount":2},
	{"letter":"X", "value":8, "amount":1},
	{"letter":"Y", "value":4, "amount":2},
	{"letter":"Z", "value":10, "amount":1}
],
"creator":"Ramon Meza"
};

/*global var to keep track of how many tiles are on the tile rack and the player's score*/
var num_of_tiles = 0;
var score = 0;

/*This function will randomly select tiles and put them on the tile rack*/
function generate_tiles(){
    var pos = $("#tile_rack").position(); // returns an object with the attribute top and left
    pos.top=pos.top+75;  // top offset position: y
    pos.left=pos.left+20; // left offset position: x
    /*obtain 7 random scrabble tiles*/
    for(var i = 0;i<7;i++){
    /*generate a random value between 0-26 inclusive*/
    var rand = Math.floor(Math.random()*26);
    /*create an image tile and place it on the tile rack*/
    $("#rand_tiles").append("<img id = tile"+ num_of_tiles + " src="+"'images/graphics_data/Scrabble_Tile_"+ScrabbleTiles.pieces[rand].letter+".jpg'>");
    $("#tile"+num_of_tiles).draggable({
        revert:"invalid",
        snap: ".ui-droppable"
    });
    /*set the position of the newly generated tile*/
    $("#tile"+num_of_tiles).css({top: pos.top, left: pos.left, position:'absolute', width:65, height: 65});
    /*change position for next tile*/
    pos.left=pos.left+90;
    num_of_tiles++;
    }
}

/*This function allows a player to go to the next word but keep the running score*/
function next(){
    //keep score tally and only add the specific number of tiles
}

/*This function restarts the game*/
function restart(){
    //remove all tiles and generate more tiles
    clear();
    //reset value of number of tiles
    num_of_tiles = 0;
    //reset score
    score = 0;
    generate_tiles();
}

function clear(){
    //remove all tiles and call generate_tiles
    for(var i = num_of_tiles-1;i>=0;i--){
        $("img#tile"+i).remove();
    }
}
/*create droppable board tiles*/
function generate_droppables(){
    var pos = $("#scrabbleboard").position(); // returns an object with the attribute top and left
    pos.top=pos.top+7;  // top offset position: y
    pos.left=pos.left+5; // left offset position: x
    /*create 15 droppable score board squares*/
    for(var i = 0;i<15;i++){
    var rand = Math.floor(Math.random()*26);
    $("#board_tiles").append("<div id = tiledrop"+ i + " class = 'ui-droppable'></div>");
    $("#tiledrop"+i).droppable({});
    /*set the position of the newly generated tile*/
    $("#tiledrop"+i).css({top: pos.top, left: pos.left, position:'absolute', width:65, height: 65});
    /*change position for next tile*/
    pos.left=pos.left+75;
    }
    
}