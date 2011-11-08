
# blue tree
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



### nodes objects properties:

#### node.top
The parent node
<br /><br />

#### node.next
The next sibling. null if there is none.
<br /><br />

#### node.prev
The previous sibling. null if there is none.  
<br /><br />

#### node.item
The "payload" of the node.  
<br /><br />

In the next properties, note the use of "sub" as a namespace.
<br /><br /><br />
    
#### node.sub.first
The first child or null if there is none.
<br /><br />
				
    node.sub.last
The last child or null if there is none.
<br /><br /><br />
	
    node.sub.n	
The number of childs.
<br /><br /><br />


#### Node objects methods:


    node.rip()
Pulls node object from its tree, and return it. tree nodes are.    

    node.sub.add( subnode)
Add subnode as last child of node, then returns subnode.    

    node.sub.insert( subnode, i )
Insert subnode as i (zero index) child of node.
Returns subnode.  
					






