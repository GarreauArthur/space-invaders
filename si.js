/*************************
*************D*ONT********
******FUCKING*************
*************DARE*********
*********TOUCH************
********MY****************
***********SPAGHETTIS*****

/* 20*25 */



var root = document.getElementById("root");
var keydown = false;
var width = 25;
var height= 20;
var grid = [
	[0,0,0,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
]
/* le joueur */
var pos_c = 8;
var pos_r = 17;

var length = 5;

function printGrid(){
	var html = "";
	for(var i = 0; i<height; i++){
		html += '<p id="line'+i+'">'
		for(var j = 0; j<width; j++){
			html += '<span id="'+grid[i][j].toString()+'" class="color'+grid[i][j].toString()+'">'+grid[i][j].toString()+'</span>';
		}
		html += '</p>';
	}
	root.innerHTML = html;
}

document.addEventListener('keydown',function(e){
	e.preventDefault();
	if(keydown)
		return;
	keydown = true;
	var key = e.key;
	console.log(key)
	if(key == "ArrowLeft"){
		if(pos_c == 0){
			keydown = false;
			return;
		}
		grid[pos_r][pos_c+length-1] = 0;
		pos_c--;
		grid[pos_r][pos_c] = 1;
		printGrid();//
	}
	if(key == "ArrowRight"){
		if((pos_c+length) == width){
			keydown = false;
			return;
		}
		grid[pos_r][pos_c] = 0;
		grid[pos_r][pos_c+length] = 1;
		pos_c++;
		printGrid();//
	}
	if(key == " "){
		var shooter_c, shooter_r;
		shooter_c = Math.floor(length/2)+pos_c;
		shooter_r = pos_r-1;
		var pewpew = setInterval(function(){
			if(shooter_r+1 != pos_r)
				grid[shooter_r+1][shooter_c] = 0;
			if(shooter_r == -1){
				clearInterval(pewpew)
				printGrid();
				return;
			}
			grid[shooter_r][shooter_c] = 3;
			printGrid();
			shooter_r--;
		},200);
	}
	keydown = false;
},false)








/*------------MAIN------------------------*/
printGrid();





































