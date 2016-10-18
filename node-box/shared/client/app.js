/* jshint browser: true, jquery: true, camelcase: true, indent: 2, undef: true, quotmark: single, maxlen: 80, trailing: true, curly: true, eqeqeq: true, forin: true, immed: true, latedef: true, newcap: true, nonew: true, unused: true, strict: true */

var main = function () {
	'use strict';

	$('.function1 button').on('click', function() {
		var numbers = $('.ex1').val().split(',');

		var input = {"nums": numbers};

		$.post('average', input, function(res) {
			$('.function1 .result').text('Answer: ' + res.result1);
		});

		$('.ex1').val('');
	});

	$('.function2 button').on('click', function() {
		var numbers = $('.ex2').val().split(',');

		var input = {"nums": numbers};

		$.post('maximum', input, function(res) {
			$('.function2 .result').text('Answer: ' + res.result2);
		});

		$('.ex2').val('');
	});		

	$('.function3 button').on('click', function() {
		var numbers = $('.ex3').val().split(',');

		var input = {"nums": numbers};

		$.post('anyEven', input, function(res) {
			$('.function3 .result').text('Answer: ' + res.result3);
		});

		$('.ex3').val('');
	});

	$('.function4 button').on('click', function() {
		var numbers = $('.ex4').val().split(',');

		var input = {"nums": numbers};

		$.post('allEven', input, function(res) {
			$('.function4 .result').text('Answer: ' + res.result4);
		});

		$('.ex4').val('');
	});

	$('.function5 button').on('click', function() {
		var params = $('.ex5').val().split(';');
		var numbers = params[0].split(',');
		var find = params[1];

		var input = {
			"nums": numbers,
			"value": find
		};

		$.post('arrayContains', input, function(res) {
			$('.function5 .result').text('Answer: ' + res.result5);
		});

		$('.ex5').val('');
	});		

	$('.function6 button').on('click', function() {
		var params = $('.ex6').val().split(';');
		var numbers = params[0].split(',');
		var find = params[1]; // if this contains the number
		var n = params[2]; // N Times 

		var input = {
			"nums": numbers,
			"value": find, 
			"count": n
		};

		$.post('arrayContainsNTimes', input, function(res) {
			$('.function6 .result').text('Answer: ' + res.result6);
		});

		$('.ex6').val('');
	});

};

$(document).ready(main); 