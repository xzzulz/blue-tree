
# tree.js
v0.6

tree data structure in javascript

tested with [basement tests](http://nzonbi.github.com/blue-tree)

## documentation

### "tree" module

The tree module is the main module. Provides a single method, to create new node objects:

    var new_node = tree.node()


### nodes objects

    var node = tree.node( item )

the "item" parameter is assigned to the "node.item" property. It's the "payload" of the node.

#### Node objects properties:


    node.top
The parent node  

    node.next
The next sibling. null if there is none.  

    node.prev
The previous sibling. null if there is none.  

    node.item
The "payload" of the node.  


In the next properties, note the use of "sub" as a namespace.  

    node.sub.first
The first child or null if there is none.  

    node.sub.last
The last child or null if there is none.  
	
    node.sub.n	
The number of childs.  

#### Node objects methods:


    node.rip()
Pulls node object from its tree, and return it. tree nodes are.  

    node.sub.add( subnode)
Add subnode as last child of node, then returns subnode.  

    node.sub.insert( subnode, i )
Insert subnode as i (zero index) child of node.
Returns subnode.  
					






