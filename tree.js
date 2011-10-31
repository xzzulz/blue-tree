//
// tree.js
//
// tree data structure in javascript
//

var tree = function() {
	
	
	var pub = {}
	
	
	pub.new = function( item ) {
		
		var nod = Object.create( node )
		nod.subs = Object.create( o )
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
	//var subs = ( function() {
		
		var o = {}
		
		// first and last subs
		o.first = null
		o.last = null
		
		// number of subs
		o.length = 0
		
		
		var current,i
		
		
		// get subnode at index position (0 index)
		o.at = function( index ) {
			if( index > o.length - 1 )
				throw "node \"at\" failed, given index exceeds subnodes number"
				
			current = o.first
			for( i=0; i<=index; i++ )
				current = current.next
			
			return current
	
		}
		
		
		
		// add sub node at last position
		// returns the added node
		o.add = function( sub ) {
			
			if( o.last ) {
				sub.prev = o.last
				o.last = sub
			} else {
				o.first = sub
				o.last = sub
			}
			
			o.length++	
			return sub
		}
		
		
		// insert sub node at index position
		// returns the inserted node		
		o.insert = function( sub, index ) {
			// validate index given
			if( index > o.length - 1 )
				throw "node insert failed, given index exceeds valid values"
				
			current = o.at( index )
			sub.prev = current.prev
			sub.next = current
			current. prev = sub
			
			length++
			
			return sub	
		}	
		
		
		o.tear = function( sub ) {
			sub.next.prev = sub.prev
			sub.prev.next = sub.next
			o.length--
			return sub
		}		
		
		
		//return o
		
	//}() )


	
	return pub 
	
}()








