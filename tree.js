//
// tree.js
//
// tree data structure in javascript
//

var tree = function() {
	
	
	var pub = {}
	
	
	

	
	pub.node = function( item ) {
		
		var nod = Object.create( node )
		nod.subs = Object.create( subs )
		nod.item = item

		return nod
	}
	
	////////////////////////////////////////////
	// node definition
	var node = {}
	
	// item
	// payload of the node
	node.item = null
	
	// top node
	node.top = null
	
	
	
	// prev 
	node.prev = null
	
	// next 
	node.next = null
	
	
	// namespace for subs operations
	var subs = ( function() {
		
		var pub = {}
		
		// first and last subs
		pub.first = null
		pub.last = null
		
		// number of subs
		pub.length = 0
		
		
		var current,i
		
		
		// get subnode at index position (0 index)
		pub.at = function( index ) {
			if( index > this.length - 1 )
				throw "node \"at\" failed, given index exceeds subnodes number"
				
			current = o.first
			for( i=0; i<=index; i++ )
				current = current.next
			
			return current
	
		}
		
		
		
		// add sub node at last position
		// returns the added node
		pub.add = function( sub ) {
			
			if( this.last ) {
				sub.prev = this.last
				this.last = sub
			} else {
				this.first = sub
				this.last = sub
			}
			
			this.length++	
			return sub
		}
		
		
		// insert sub node at index position
		// returns the inserted node		
		pub.insert = function( sub, index ) {
			// validate index given
			if( index > this.length - 1 )
				throw "node insert failed, given index exceeds valid values"
				
			current = this.at( index )
			sub.prev = current.prev
			sub.next = current
			current. prev = sub
			
			length++
			
			return sub	
		}	
		
		
		pub.tear = function( sub ) {
			sub.next.prev = sub.prev
			sub.prev.next = sub.next
			this.length--
			return sub
		}		
		
		
		return pub
		
	}() )


	
	return pub 
	
}()


/*
var prot = {}
prot.a = 1

prot_sub = {}

prot_sub.w = 5

var ob1 = Object.create( prot )
ob1.sub = Object.create( prot_sub )

var ob2 = Object.create( prot )
ob2.sub = Object.create( prot_sub )


ob1.sub.w = 10
ob2.sub.w = 20

console.log( 'prot_sub.w: ' + prot_sub.w )

console.log( 'ob1.sub.w: ' + ob1.sub.w )

console.log( 'ob2.sub.w: ' + ob2.sub.w )
*/





/*

var prot = {}
prot.a = 1

prot_sub = {}

prot_sub.w = 5
prot_sub.set = function( x ) { this.w = x }


var ob1 = Object.create( prot )
ob1.sub = Object.create( prot_sub )

var ob2 = Object.create( prot )
ob2.sub = Object.create( prot_sub )


ob1.sub.set( 10 )
ob2.sub.set( 20 )

console.log( 'prot_sub.w: ' + prot_sub.w )

console.log( 'ob1.sub.w: ' + ob1.sub.w )

console.log( 'ob2.sub.w: ' + ob2.sub.w )
 
*/






