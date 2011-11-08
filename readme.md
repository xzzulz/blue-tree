
<style>
	body {
		font: 14px helvetica, arial, freesans, clean, sans-serif;
	}
	
	.blue_title {
		color: #4182D1;
		margin-top: 40px;
	}
	.blue_tree {
		width: 400px;
		margin-left: 60px;
		margin-right: 60px;
	}
	.code {
		display: block;
		color: #183F92;
		font-size: 15px;
		background-color: #F0F2F2;
		padding: 12px;
		margin: 10px 0px;
	}
	.defin {
		margin: 40px 0px;
	}

</style>

<div class="blue_tree">
	
	<h1 class="blue_title">blue tree</h1>

	<p>tree data structure in javascript</p>

	<p>tested with basement tests</p>
		
		
	<h2 class="blue_title">documentation</h2>		
		
	<h2 class="blue_title">"tree" module</h2>

	<p>The tree module is the main module. Provides a single 
	method, to create new node objects:</p>

	<code class="code">var new_node = tree.node()</code>



	
		
	<h3 class="blue_title">nodes objects</h3>

	<code class="code">var node = tree.node( item )</code>

	<p>The "item" parameter is assigned to the "node.item" property. It's the "payload" of the node.</p>
	
	
	
	
	
	<h3 class="blue_title">nodes objects properties</h3>


	
	<div class="defin">
	<code class="code">node.top</code>
	<p>The parent node</p>
	</div>
	
	<div class="defin">
	<code class="code">node.next</code>
	The next sibling. null if there is none.	
	</div>
	
	<div class="defin">	
	<code class="code">node.prev</code>
	The previous sibling. null if there is none.
	</div>

	<h4>In the next properties, note the use of "sub" as a namespace.</h4>

	<div class="defin">
	<code class="code">node.sub.first</code>
	The first child or null if there is none.
	</div>
	
	<div class="defin">
	<code class="code">node.sub.last</code>
	The last child or null if there is none.
	</div>
	
	<div class="defin">
	<code class="code">node.sub.n</code>
	The number of childs.
	</div>		
	

	<h3 class="blue_title">Node objects methods</h3>

	<div class="defin">
	<code class="code">node.rip()</code>
	Pulls node object from its tree, and return it. tree nodes are.
	</div>
	
	<div class="defin">
	<code class="code">node.sub.add( subnode )</code>
	Add subnode as last child of node, then returns subnode.
	</div>
	
	<div class="defin">
	<code class="code">node.sub.insert( subnode, i )</code>
	Insert subnode as i (zero index) child of node.
Returns subnode.
	</div>
	
</div>




