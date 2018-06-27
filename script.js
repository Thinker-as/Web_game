function cellClick(obj){
	console.log(obj);
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
	var value = 10 + Math.round(Math.random() * 89);
	listOfItems[a].innerHTML = value;
	listOfItems[b].innerHTML = value;
}

/*function Stack() {
    this._size = 0;
    this._storage = {};
}
Stack.prototype.push = function(data) {
    // increases the size of our storage
    var size = this._size++;
 
    // assigns size as a key of storage
    // assigns data as the value of this key
    this._storage[size] = data;
};

Stack.prototype.pop = function() {
    var size = this._size,
        deletedData;
 
    deletedData = this._storage[size];
 
    delete this._storage[size];
    this.size--;
 
    return deletedData;
};


for (var i = 0; i < listOfItems[i]; i++) {

	listOfItems[i]
};*/