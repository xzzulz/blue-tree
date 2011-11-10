
# blue tree
v0.7

Tree data structure in javascript

Tested with [basement tests](http://nzonbi.github.com/blue-tree) (tests in the browser)

license (MIT) included in "license" file.



## Documentation

Nodes are create with:

    var new_node = tree.node( item )

The item parameter, is the node payload, assigned to node.item

A list of properties and methods of nodes objects is provided:

### nodes properties

* node.top  
  parent node

* node.next  
  next sibling or null

* node.prev  
  previous sibling or null

* node.item  
  Anything that is assigned as the node payload

* node.sub.n  
  number of childs

* node.sub.first  
  first child or null

* node.sub.last  
  last child or null


### nodes methods

* node.sub.add( subnode )  
adds subnode as last child of node, then returns subnode

* node.sub.at( index )  
returns the child at index position (zero index)

* node.sub.insert( subnode, i )  
Insert subnode as i (zero index) child of node. Returns subnode.

* node.rip()  
Pulls node object from its tree, and returns it (node).  
Other nodes of the tree are left in consistent state.

* node.walk( action )  
Calls "action" function on all the nodes below "node". Descend 
recursively on subnodes of subnodes.

* node.sub.each( action )  
Calls "action" function on all the direct subnodes of "node",
only the first level of depth. No recursion.








