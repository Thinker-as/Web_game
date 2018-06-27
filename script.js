var firstCell = null;
var SecndCell = null;

function cellClick(obj){
	if(firstCell != null && SecndCell != null){
		return;
	}
	obj.children[0].classList.remove("hidden");
	if (firstCell == null) {
		firstCell = obj;
	}else{
		if(obj == firstCell){
			return;
		}
		SecndCell = obj;
		var a = obj.children[0].innerHTML;
		var b = firstCell.children[0].innerHTML;
		console.log(a,b);
		if(a != b){
			setTimeout(function(){
				firstCell.children[0].classList.add("hidden");
				obj.children[0].classList.add("hidden");
				firstCell = null;
				SecndCell = null;
			}, 1000);
		} else {
			firstCell.classList.add("hidden");
			SecndCell.classList.add("hidden");
			firstCell = null;
			SecndCell = null;
		}
	}
	console.log(obj.children[0].innerHTML);
}


var listOfItems = document.getElementsByClassName("item");
var i;
for(i = 0; i < 18; i++){
	var a;
	var b;
	do{
		a = Math.round(Math.random() * 35);
		b = Math.round(Math.random() * 35);
	}while(a == b 
			|| listOfItems[a].innerHTML != "" 
			|| listOfItems[b].innerHTML != "");
	var value = 10 + Math.round(Math.random() * 3);
	listOfItems[a].innerHTML = value;
	listOfItems[b].innerHTML = value;

	listOfItems[a].classList.add("hidden");
	listOfItems[b].classList.add("hidden");
}

var listOfTd = document.getElementsByClassName("td");
var i;
for (var i = 0; i <  listOfTd.length; i++) {
	listOfTd[i].onclick = function(){
		cellClick(this);
	}
}