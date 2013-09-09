var Node = function(value){
	this.value = value;
	this.next = null;	
};

var LinkedList = function(){
	this.head = null;
	this.size = 0;	
};

LinkedList.prototype.add = function(index,value){
	var position = 0;
	var cur = this.head;
	if(index > this.size){
		throw "Index is greater than size of Linked List.";
	}
	var node = new Node(value);
	if(index == 0){
		node.next = cur;
		this.head = node;
		this.size++;
		return ;
	}
	while(position < index-1){
		cur = cur.next;
		position++;
	}
	node.next = cur.next;
	cur.next = node;
	this.size++;
};
LinkedList.prototype.remove = function(index){
	var position = 0;
	var cur = this.head;
	if(index > this.size-1){
		throw "Index is greater than no of elements of Linked List.";
	}
	if(index == 0){
		this.head = cur.next;
		this.size--;
		return ;
	}
	while(position < index-1){
		cur = cur.next;
		position++;
	}
	cur.next = cur.next.next;
	this.size--;
};
LinkedList.prototype.get = function(index){
	var position = 0;
	var cur = this.head;
	if(index > this.size-1){
		throw "Index is greater than no of elements of Linked List.";
	}
	while(position < index){
		cur = cur.next;
		position++;
	}
	return cur.value;
};
LinkedList.prototype.find = function(value){
	var cur = this.head;
	var idx = 0;
	while(cur != null){
		if(cur.value === value){
			return idx;
		}
		idx++;
		cur = cur.next;
	}
	return -1;
};