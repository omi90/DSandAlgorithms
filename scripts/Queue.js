var Node = function(value){
	this.value = value;
	this.next = null;	
};

var Queue = function(){
	this.head = null;
	this.size = 0;
};
Queue.prototype.enqueue = function(value){
	var node = new Node(value);
	node.next = this.head;
	this.head = node;
	this.size++;
};
Queue.prototype.dequeue = function(){
	var cur = this.head;
	if(this.size == 0){
		throw "Queue is empty.";
	}
	if(this.size ==1){
		var val = this.head.value;
		this.head = null;
		this.size--;
		return val;
	}
	while(cur.next.next != null){
		cur = cur.next;
	}
	var val = cur.next.value;
	cur.next = null;
	this.size--;
	return val;
};
Queue.prototype.poll = function(){
	if(this.size == 0){
		throw "Stack is empty.";
	}
	var cur = this.head;
	while(cur.next != null){
		cur = cur.next;
	}
	return cur.value;
};
Queue.prototype.isEmpty = function(){
	return this.size ==0;
};