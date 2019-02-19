function BuildTiles(xNum, yNum, margin, id = "tiles", width = 1920, height = 940){
    var tiles = [];
    var w = (width / xNum) -  (margin * 2);
    var h = (height / yNum) - (margin * 2);
    document.getElementById(id).style.width = width + margin/2 + "px";
    document.getElementById(id).style.height = height + margin/2 + "px";
    for(var i = 0; i < xNum; i++){
        for(var j = 0; j < yNum; j++){
            let tile = document.createElement("div");
            tile.style.width = w+"px";
            tile.style.height = h+"px";
            tile.style.margin = margin+"px";
            tile.style.cssFloat = "left";
            tile.style.left = ((margin+w)*j)+"px";
            tile.className = "tile";
            tile.onclick = function(){
                tile.classList.toggle("redTile");
            }
            document.getElementById(id).append(tile);
            tiles.push(tile);
        }
    }
    console.log(tiles);
}

function BuildTiles(){
    var tiles = [];
    var id = "tiles";
    document.getElementById(id).innerHTML = "";
    var width = 1200;
    var height = 700;
    var margin = 10;
    var xNum = document.getElementById("numColumns").value;
    var yNum = document.getElementById("numRows").value;
    var w = (width / xNum) -  (margin * 2);
    var h = (height / yNum) - (margin * 2);
    document.getElementById(id).style.width = width + margin/2 + "px";
    document.getElementById(id).style.height = height + margin/2 + "px";
    for(var i = 0; i < xNum; i++){
        for(var j = 0; j < yNum; j++){
            let tile = document.createElement("div");
            tile.style.width = w+"px";
            tile.style.height = h+"px";
            tile.style.margin = margin+"px";
            tile.style.cssFloat = "left";
            tile.style.left = ((margin+w)*j)+"px";
            tile.className = "tile";
            tile.onclick = function(){
                tile.classList.toggle("redTile");
            }
            document.getElementById(id).append(tile);
            tiles.push(tile);
        }
    }
    console.log(tiles);
}

function Test(){
    BuildTiles(9,9,10,"tiles",1200, 700);
}