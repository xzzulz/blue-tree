//
// tree.js basement tests
//
// tree data structure in javascript
//
var test = {}




test.do = function() {
	
	basement.set( "blue tree.js" )
			
	test.a_node()
	test.sub_one()	
	test.sub_two()
	test.links()
	test.sub_three()
	test.at()
	test.insert()
	test.at_again()
	test.tear()
}

// connect the function that executes the tests, 
// to the basement test button
basement.test_click = test.do
	

test.a_node = function() {

	this.node1 = tree.node( "one" )
	
	basement.test( 'create a first node "one"' )
		.check( 'item', 		this.node1.item === "one", this.node1.item )
		.check( 'sub length', 	this.node1.sub.n === 0, this.node1.sub.n )
		.check( 'sub first', 	this.node1.sub.first === null, this.node1.sub.first )


}




test.sub_one = function() {
	
	this.node2 = tree.node("sub one")
	
	this.node1.sub.add( this.node2 )
	
	
	basement.test( 'add a sub node "sub one"' )
		.check( 'sub first', 	this.node1.sub.first == this.node2 )
		.check( 'sub length', 	this.node1.sub.n === 1, this.node1.sub.n )
		.check( 'sub last', 	this.node1.sub.last == this.node2 )
		.check( 'sub item', 	this.node1.sub.first.item == "sub one", this.node1.sub.first.item )
		.check( 'top',			this.node2.top == this.node1, 'top item: ' + this.node2.top.item )

	
}




test.sub_two = function() {
	
	this.node3 = tree.node("sub two")
	
	this.node1.sub.add( this.node3 )
	
	
	basement.test( 'add sub node "sub two"' )
		.check( 'sub first', 	this.node1.sub.first == this.node2 )
		.check( 'sub length', 	this.node1.sub.n === 2 )
		.check( 'sub last', 	this.node1.sub.last == this.node3 )
		.check( 'top',			this.node3.top == this.node1 )
		.check( 'next',			this.node2.next == this.node3, 'next: ' + this.node2.next.item )
		.check( 'prev',			this.node3.prev == this.node2 )

	
}




test.links = function() {
	

	basement.test("links")
		.check( 'sub first prev = null', 
			this.node1.sub.first.prev == null )
			
		.check( 'sub last next  = null',
			this.node1.sub.last.next == null )
			
		.check( 'sub last next  = null', 	
			this.node1.sub.last.next == null )
			
		.check( 'sub first next item = "sub two"', 
			this.node1.sub.first.next.item == "sub two" )
			
		.check( 'sub last prev item = "sub one"',
			this.node1.sub.last.prev.item == "sub one" )
	
	
}


test.sub_three = function() {
	
	this.node4 = tree.node("sub three")
	
	this.node1.sub.add( this.node4 )
	
	basement.test('add sub node "sub three"')
		.check( 'sub last item', 
			this.node1.sub.last.item == "sub three" )
		.check( 'last next = null', 
			this.node1.sub.last.next == null )
		.check( 'last prev item = "sub two"', 
			this.node1.sub.last.prev.item == "sub two" )
		.check( 'first next next item = "sub three"', 
			this.node1.sub.first.next.next.item == "sub three" )
			
}


test.at = function() {
	
	basement.test('at method')
		.check( 'sub at 0 = "sub one"', 
			this.node1.sub.at(0).item == "sub one" )
		.check( 'sub at 1 = "sub two"', 
			this.node1.sub.at(1).item == "sub two" )
		.check( 'sub at 2 = "sub three"', 
			this.node1.sub.at(2).item == "sub three" )
		.check( 'sub at 3 = null', 
			this.node1.sub.at(3) == null )
							
}


test.insert = function() {
	
	this.node5 = tree.node('insert')
	
	this.node1.sub.insert( this.node5, 1 )
		
	basement.test('insert method')
		.check( 'sub at 1 = "insert"', 
			this.node1.sub.at(1).item == "insert" )
		.check( 'first next item = "insert"', 
			this.node1.sub.first.next.item == "insert" )
		.check( 'last prev prev item = "insert"', 
			this.node1.sub.last.prev.prev.item == "insert" )				
						
}


test.at_again = function() {
	
	basement.test('at method again')
		.check( 'sub at 0 = "sub one"', 
			this.node1.sub.at(0).item == "sub one" )
		.check( 'sub at 1 = "insert"', 
			this.node1.sub.at(1).item == "insert" )
		.check( 'sub at 2 = "sub two"', 
			this.node1.sub.at(2).item == "sub two" )
		.check( 'sub at 3 = "sub three"', 
			this.node1.sub.at(3).item == "sub three" )
		.check( 'sub at 4 = null', 
			this.node1.sub.at(4) == null )				
						
}


test.tear = function() {
	
	this.node6 = this.node1.sub.at(2).rip()

	basement.test('rip method', 'rip node at 2' )
		.check( 'rip node item = "sub two"', 
			this.node6.item == "sub two" )
		.check( 'sub at 0 = "sub one"', 
			this.node1.sub.at(0).item == "sub one" )				
		.check( 'first next = "insert"', 
			this.node1.sub.first.next.item == "insert" )
		.check( 'first next next = "sub two"', 
			this.node1.sub.first.next.next.item == "sub three" )
		.check( 'sub last = "sub three"', 
			this.node1.sub.last.item == "sub three" )
		.check( 'tear node next = null', 
			this.node6.next == null )
		.check( 'tear node prev = null', 
			this.node6.prev == null )
		.check( 'tear node top = null', 
			this.node6.top == null )

}


