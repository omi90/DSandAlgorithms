var TreeNode = function(value){
	this.value = value;
	this.left = null;
	this.right = null;
};

var BinaryTree = function(){
	this.root = null;
};
BinaryTree.prototype.add = function(value){
	var node = new TreeNode(value);
	if(this.root == null){
		this.root = node;
		return;
	}
	var cur = this.root;
	while(cur!=null){
		if(value < cur.value ){
			if(cur.left == null){
				cur.left = node;
				return;
			}
			cur = cur.left;
		}
		else{
			if(cur.right == null){
				cur.right = node;
				return;
			}
			cur = cur.right;
		}
	}
	
};

