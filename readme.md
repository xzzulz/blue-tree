
# tree.js
v0.6

tree data structure in javascript

tested with [basement tests](http://nzonbi.github.com/blue-tree)

## documentation

### "tree" module

The tree module is the main module. Provides a single method, to create new node objects:
```javascript
var new_node = tree.node()
```
### nodes objects
```javascript
var node = tree.node( item )
```
the "item" parameter is assigned to the "node.item" property. It's the "payload" of the node.


#### Node objects properties:
```javascript
	node.top
```
The parent node

```javascript
node.next	
```
The next sibling. null if there is none

```javascript
node.prev
```	
The previous sibling. null if there is none

```javascript
node.item
```
The "payload" of the node
	
In the next properties, note the use of "sub" as a namespace.
```javascript
node.sub.first
```
The first child or null if there is none

```javascript
node.sub.last
```	
The last child or null if there is none
	
```javascript
node.sub.n	
```
The number of childs

#### Node objects methods:

```javascript
node.rip()
```
Pulls node object from its tree, and return it. tree nodes are

```javascript
node.sub.add( subnode)
```
Add subnode as last child of node, then returns subnode.

```javascript
node.sub.insert( subnode, i )
```
Insert subnode as i (zero index) child of node.
Returns subnode
					






