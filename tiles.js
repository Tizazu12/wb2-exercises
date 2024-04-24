"use strict"
// room dimension
var length = 8;
var width = 6;
var area = length * width;
//tiles we need
var tilesWeNeed = area;
// we need 10% more just to be safe
var extraTiles =(tilesWeNeed* 0.10);
// we need to know the total
var totalTilesWeNeed = tilesWeNeed + extraTiles;
// the calculat number of box we need

var box = 12;
// we need to find out how many box we need and roundup
var boxWeNeed = Math.ceil(totalTilesWeNeed / box);
 
console.log(boxWeNeed);





