//
// tree.js
//
// tree data structure in javascript
//
var test = {}




test.do = function() {
			
	test.a_node()
	test.sub_one()
	test.sub_two()
	test.links()
	
	
}
	

test.a_node = function() {

	this.node1 = tree.node("one")
	
	basement.new_test("a_node")
	.check( 'item', 			this.node1.item === "one" )
	.check( 'subs length', 	this.node1.subs.length === 0 )
	.check( 'subs first', 	this.node1.subs.first === null )


}




test.sub_one = function() {
	
	this.node2 = tree.node("two")
	
	this.node1.subs.add( this.node2 )
	
	
	basement.new_test("sub_node")
	.check( 'subs first', 	this.node1.subs.first == this.node2 )
	.check( 'subs length', 	this.node1.subs.length === 1 )
	.check( 'subs last', 	this.node1.subs.last == this.node2 )
	.check( 'top',			this.node2.top == this.node1 )

	
}




test.sub_two = function() {
	
	this.node3 = tree.node("two")
	
	this.node1.subs.add( this.node3 )
	
	
	basement.new_test("sub_two", "this is a test description")
	.check( 'subs first', 	this.node1.subs.first == this.node2 )
	.check( 'subs length', 	this.node1.subs.length === 2 )
	.check( 'subs last', 	this.node1.subs.last == this.node3 )
	.check( 'top',			this.node3.top == this.node1 )
	.check( 'next',			this.node2.next == this.node3 )
	.check( 'prev',			this.node3.prev == this.node2 )

	
}




test.links = function() {
	

	basement.new_test("links")
	.check( 'subs first prev = null', 	this.node1.subs.first.prev == null )
	.check( 'subs last next  = null', 	this.node1.subs.last.next == null )
	.check( 'fail test', 				this.node1 == this.node2 )

	
}



