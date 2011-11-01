//
// basement.js
//
// javascript testing lab
//
var basement = function() {

	// o public space
	
	o = {}
	
	
	
	o.html = null
	
	
	
	rgx_name = /^\w[\w\d_]*$/
	
	// create a new test
	o.test = function( name ) {
		
		console.log( 'new test: ' + name )
			
		if( ! rgx_name.test( name ) )
			throw "Invalid test name. Start with a letter, and only letters or numbers, no spaces"
		
		var test = Object.create( proto_test )
		test.name = name
		test.tests = []
		
		add_test_label( name )
		
		return test
	}
	
	
	

	
	
	
	var html_test = '<div id="{name}" class="test_top">{name}</div>'
	
	var html_item = '<div id="{name}" class="test_item">{res} {name}</div>'
	var html_item_ok = '<span class="ok">ok</span>'
	var html_item_fail = '<span class="fail">fail</span>'
	
	
	var div
	
	var add_test_label = function( label ) {
		
		var html = html_test
			.replace( '{name}', label )
			.replace( '{name}', label )
		
		div = $( html ).appendTo( '#' + o.html )
	}




	var add_sub_label = function( label, bool ) {
				
		var html = html_item
			.replace( "{name}", label )
			.replace( "{name}", label )
		
		if( bool ) 
			html = html.replace( '{res}', html_item_ok )
		else
			html = html.replace( '{res}', html_item_fail )
			
		$( html ).appendTo( '#' + o.html )
	}	
		
		
		
	// add a test result to the test object
	var	test = function( label, bool ) { 

		add_sub_label( label, bool )
		this.tests.push( bool )
		
		return this 
	}
		
	
		
	
	var done = function() {
		
		console.log( 'done' )
		
		if( this.tests.length == 0 ) {
			this.pass = false
			return false
		}
	
		
		this.pass = mix_tests( this.tests )
		
		console.log( "   pass: " + this.pass )	
			
		
		if( this.pass ) {
			$( '#' + this.name ).addClass('test_top_ok')
			console.log( 'class test_top_ok added to ' + this.name )
		} else {
			$( '#' + this.name ).addClass('test_top_fail')
			console.log( 'class test_top_fail added to ' + this.name )
		}
				
	}
	


	// test object prototype
	var proto_test = {
		
		name: '',
		pass: null,
		notes: '',
		test: test,
		done: done
		
	}
	
	
	
	
	// tests if all values in an array are true
	var mix_tests = function( list ) {

		var res = true, i = 0
			
		for (i=0; i<list.length; i++) {
			res = res && list[i]
			console.log('      mix tests - res: ' + res )
		}
		
		return res
	}





	
	return o
	
}()
