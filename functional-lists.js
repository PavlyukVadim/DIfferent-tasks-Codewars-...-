"use strict";

function List() {}

function EmptyList() {}


EmptyList.prototype = new List();
EmptyList.prototype.constructor = EmptyList;

EmptyList.prototype.toString = function() { 
	return "()";
};
EmptyList.prototype.isEmpty = function() { 
	return true;
};

EmptyList.prototype.length = function() { 
	return 0;
};

EmptyList.prototype.push = function(x) { 
	let listNode = new ListNode(x, this);
	return listNode; 
};

EmptyList.prototype.remove = function(x) { /* implement this */ };
EmptyList.prototype.append = function(xs) { /* implement this */ };


function ListNode(value, next) { 
	this.value = value;
	this.next = next;
}



ListNode.prototype = new List();
ListNode.prototype.constructor = ListNode;
ListNode.prototype.isEmpty = function() { 
	if (!this.length()) return true;
	return false;
};

ListNode.prototype.toString = function() { 
	let list = this,
		values = [];
	while (list instanceof ListNode) {
		values.push(list.value);
		list = list.next;
	}
	return "(" + values.join(" ") + ")";
};

ListNode.prototype.head = function() { 
	return this;
};

ListNode.prototype.tail = function() { 
	return this.next;
};
ListNode.prototype.length = function() {
	let length = 0;
	let list = this;
	while (list instanceof ListNode) {
		length++;
		list = list.next;
	}
	return length;
};

ListNode.prototype.push = function(x) { 
	let listNode = new ListNode(x, this);
	return listNode;
};

ListNode.prototype.remove = function(x) { /* implement this */ };
ListNode.prototype.append = function(xs) {
	console.log(xs.toString())
	let length = this.length();
	let list = this;
	let copyThis, headCopy;
	let prevNode;

	copyThis = new ListNode(list.value, undefined);
	headCopy = copyThis;	 
	prevNode = copyThis;
	length--;
	while (length >= 1) {
		length--;
		list = list.next;
		console.log(list.value);
		copyThis = new ListNode(list.value, undefined);
		prevNode.next = copyThis;
		prevNode = copyThis;
	}
	prevNode.next = xs;
	return headCopy;
};



var mt, l1, l2, l3, l4;

mt = new EmptyList();
l1 = mt.push('c').push('b').push('a');
l2 = mt.push('c');
l3 = l1.append(l1);





console.log(l1.toString());
console.log(l3.toString());
/*l3 = l1.remove('b');
l4 = l2.remove('b');


console.log(mt.isEmpty(), "Empty List is empty");
console.log( !l1.isEmpty(), "Non-empty list is not empty");
console.log(mt.toString() === "()", "()");
console.log(l3.toString() === "(a c)", "(a c)");
console.log(mt.length() === 0, "Empty list has length zero");
console.log(l1.length() === 3, "(a b c) length 3");

console.log(l2.tail().tail().tail() === l1, "(a b c a b c) shares");
console.log(l2 !== l1, "(a b c a b c) doesn't share too much");
console.log(l3.tail() === l1.tail().tail(), "(a b c) remove b shares c");*/
