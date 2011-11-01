//
// tree.js
//
// tree data structure in javascript
//
var tests = {}




tests.do = function() {
	
	
	basement.html = 'basement'
	
	
	this.a_node()
	this.sub_one()
	this.sub_two()
	this.links()
	
}


tests.a_node = function() {

	this.node1 = tree.node("one")
	
	basement.test("a_node")
	.test( 'item', 			this.node1.item === "one" )
	.test( 'subs length', 	this.node1.subs.length === 0 )
	.test( 'subs first', 	this.node1.subs.first === null )
	.done()
	
}


tests.sub_one = function() {
	
	this.node2 = tree.node("two")
	
	this.node1.subs.add( this.node2 )
	
	
	basement.test("sub_node")
	.test( 'subs first', 	this.node1.subs.first == this.node2 )
	.test( 'subs length', 	this.node1.subs.length === 1 )
	.test( 'subs last', 	this.node1.subs.last == this.node2 )
	.test( 'top',			this.node2.top == this.node1 )
	.done()
	
}


tests.sub_two = function() {
	
	this.node3 = tree.node("two")
	
	this.node1.subs.add( this.node3 )
	
	
	basement.test("sub_two")
	.test( 'subs first', 	this.node1.subs.first == this.node2 )
	.test( 'subs length', 	this.node1.subs.length === 2 )
	.test( 'subs last', 	this.node1.subs.last == this.node3 )
	.test( 'top',			this.node3.top == this.node1 )
	.test( 'next',			this.node2.next == this.node3 )
	.test( 'prev',			this.node3.prev == this.node2 )
	.done()
	
}


tests.links = function() {
	
	
	
	basement.test("links")
	.test( 'subs first prev = null', 	this.node1.subs.first.prev == null )
	.test( 'subs last next  = null', 	this.node1.subs.last.next == null )
	.test( 'fail test', 				this.node1 == this.node2 )
	.done()
	
}

