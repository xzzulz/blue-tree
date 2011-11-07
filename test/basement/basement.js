//
// basement.js
//
// javascript testing lab
//
var basement = function() {


	// public
	pub = {}
	
	
	// counters
	var tests_count = 0
	var passed_tests = 0
	var failed_tests = 0


	// starts a new set of tests
	pub.set = function( title ) {
		$('#title_box').text( title )
		
		// clear the view from previous tests
		$( view.tests_box  ).empty()
		
		// reset counters
		tests_count = 0
		passed_tests = 0
		failed_tests = 0
		
		// update view counters
		view.update_counters()
	}
	
	
	
	// test click button
	// users should place a function
	// that executes tests here
	pub.test_click = function() { console.log('click') }
	
	
	
	// create a new test
	// return the test object
	pub.test = function( name, descrip ) {
				
		tests_count++
		passed_tests++
		
		
		// create the test object
		var test = Object.create( proto_test )
		// sets test id
		test.id = tests_count
		// sets name
		test.name = name
		// sets the description
		if(descrip)
			test.descrip = descrip
		else
			test.descrip = ""
		// creates a liust for the checks results
		test.checks = []
		
		view.add_test( test )
		
		// return the test object
		return test
	}
	
	
	
	var current_test


	// test object prototype
	var proto_test = {
		
		// id
		id: null,
		
		// test name
		name: '',
		
		// test passed status, true of false
		pass: true,
		
		// test description
		descrip: '',
		
		// performs a check within the test,
		// and updates the view with the result
		check: function( label, bool, descrip ) { 
						
			this.checks.push( bool )
			view.add_check( label, bool, descrip, this.id )
			
			this.update_status( bool )
			return this 
		},
			

		update_status: function( bool ) {
			
			// determine if any counter should be increased
			if( this.pass && !bool ) {
				passed_tests--
				failed_tests++					
			}
			
			view.update_counters()

			this.pass = this.pass && bool

			// update the view
			view.set_test_pass_status( this )
					
		}
		
	}
	// end of test object prototype
	
	
	
	
	// tests if all values in an array are true
	// used to verify if al checks in a test were passed
	var mix_tests = function( list ) {

		var res = true, i = 0
			
		for (i=0; i<list.length; i++) {
			res = res && list[i]
		}
		
		return res
	}



	
	/////////////////////////////////////////////////////////////	
	/////////////////////////////////////////////////////////////
	// html view
	
	var view = {}
	
	
	// view setup
	// sets the test button event
	view.setup = function() {	 
		$('#test_button').click( pub.test_click );
	}
	
	$( window ).load( view.setup )
	
	
	
	// html element where the test fields will be show
	view.tests_box = '#tests_box'


	// views 
	view.test = '<div id="{test.id}_box">'
	+ '<div>'
	+ '<div class="test_id">{test.id}</div>'
	+ '<div id="{test.id}" class="test">{test.name}'
	+ '<div class="descrip">{test.descrip}</div>'
	+ '</div>'
	+ '</div>'
	+ '</div>'
	
	view.check = '<div id="{name}" class="check">'
	+ '{res}' 
	+ '<div class="check_text">{name}'
	+ '<span class="comment">{check.comment}</span>'
	+ '</div>'
	+ '</div>'
	
	view.check_ok = '<div class="ok">ok</div>'
	view.check_fail = '<div class="fail">fail</div>'
	
	


	var html
	// add a test to the view
	view.add_test = function( test ) {
				
		html = view.test
			.replace( '{test.id}', test.id )
			.replace( '{test.id}', test.id )
			.replace( '{test.id}', test.id )
			.replace( '{test.name}', test.name )
			.replace( '{test.descrip}', test.descrip )
		
		$( html ).appendTo( view.tests_box )
	}

	

	// set test pass statuss
	view.set_test_pass_status = function( test ) {
		
		$( '#' + test.id ).removeClass('ok')
		$( '#' + test.id ).removeClass('fail')
		
		if( test.pass ) {
			$( '#' + test.id ).addClass('ok')
		} else {
			$( '#' + test.id ).addClass('fail')
		}		
		
	}

	var id_box// , html
	// add a check to the view
	view.add_check = function( label, bool, descrip, id ) {
		
		if( ! descrip ) descrip = ''
		
		html = view.check
			.replace( "{name}", label )
			.replace( "{name}", label )
			.replace( "{check.comment}", descrip )
		
		if( bool ) 
			html = html.replace( '{res}', view.check_ok )
		else
			html = html.replace( '{res}', view.check_fail )
		
		//$( html ).appendTo( view.tests_box )
		id_box = $( '#' + id + '_box' )
		$( html ).appendTo( id_box )
	}
	
	
	view.update_counters = function() {
		
		$('#tests_passed').text( passed_tests )
		$('#tests_failed').text( failed_tests )
		
	}	
		
		

	/////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////	
	
	
	
	return pub
	
}()

