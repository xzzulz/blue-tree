
# blue tree
v0.6

Tree data structure in javascript

Tested with [basement tests](http://nzonbi.github.com/blue-tree/test)

licensed (MIT) included in "license" file.



## Documentation

Nodes are create with:

    var new_node = tree.node( item )

The item parameter, is the node payload, assigned to node.item

A list of properties and methods is provided:

### properties

* node.top	
  parent node

* node.next	
  next sibling or null

* node.prev	
  previous sibling or null

* node.item	
  Anything that is assigned asthe node payload

* node.sub.n	
  number of childs

* node.sub.first	
  first child or null

* node.sub.last	
  last child or null

* node.sub.last	
  last child or null

### methods

* node.sub.add( subnode )
  adds subnode as last child of node, then returns subnode

* node.sub.insert( subnode, i )
  Insert subnode as i (zero index) child of node. Returns subnode.

* node.rip()
  Pulls node object from its tree, and return it (node). 
  Other nodes of the tree, are left in consistent state.









