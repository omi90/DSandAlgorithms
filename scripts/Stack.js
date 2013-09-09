var Node = function(value){
	this.value = value;
	this.next = null;	
};

var Stack = function(){
	this.head = null;
	this.size = 0;
};
Stack.prototype.push = function(value){
	var node = new Node(value);
	node.next = this.head;
	this.head = node;
	this.size++;
};
Stack.prototype.pop = function(){
	if(this.size == 0){
		throw "Stack is empty.";
	}
	var value = this.head.value;
	this.head = this.head.next;
	this.size--;
	return value;
};
Stack.prototype.poll = function(){
	if(this.size == 0){
		throw "Stack is empty.";
	}
	return this.head.value;
};
Stack.prototype.isEmpty = function(){
	return this.size == 0;
};
