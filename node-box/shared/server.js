var express = require('express'),
        http = require('http'), app;
var bodyParser = require('body-parser');
//var urlencodedParser = bodyParser.urlencoded();


// Create our Express-powered HTTP server
// // and have it listen on port 3000
app = express();
http.createServer(app).listen(3000);
console.log('Server is listening on port 3000'); 

app.use(express.static(__dirname + '/client'));
app.use(bodyParser.urlencoded({'extended': true}));
app.use(bodyParser.json());


//returns average
var average = function(nums) {
	var sumTotal = 0;
	
	nums.forEach(function(value) {
		sumTotal = sumTotal + value; 
	}); 

	return sumTotal/nums.length;
};

app.post('/average', function (req, res)
{
	var nums = [];

	req.body.nums.forEach(function(value) {
		nums.push(Number(value));
	});

	console.log(req.body.nums, average(nums));
	
	res.json({'result1': average(nums)});
});

//returns the maximum value
var maximum = function(nums) {
	var largest = nums[0]; 

	nums.forEach(function(value) {
		if (value > largest) {
			largest = value; 
		}}); 

	return largest;
};

app.post('/maximum', function (req, res)
{
	var nums = [];

	req.body.nums.forEach(function(value) {
		nums.push(Number(value));
	});

	console.log(req.body.nums, maximum(nums));
	
	res.json({'result2': maximum(nums)});
});

//returns true if array contains at least one even number
var anyEven = function(nums) {
	var anEven = false; 

	nums.forEach(function(value) {
		if (value%2 === 0) {
			anEven = true; 
		}
	});

	return anEven;    
};

app.post('/anyEven', function (req, res)
{
	var nums = [];
	req.body.nums.forEach(function(value) {
		nums.push(Number(value));
	});

	console.log(nums);
	
	res.json({'result3': anyEven(nums)});
});

//returns true if array contains all even numbers
var allEven = function(nums) {
	var allEven = true; 

	nums.forEach(function(value) {
		if (value%2 !== 0) {
			allEven = false; 
		}
	});
	return allEven; 
};

app.post('/allEven', function (req, res)
{
	var nums = [];
	req.body.nums.forEach(function(value) {
		nums.push(Number(value));
	});

	console.log(nums);
	
	res.json({'result4': allEven(nums)});
});

//returns true if array contains specified element
var arrayContains = function (x, y) {
	var contains = false; 

	x.forEach(function(word) {
		if(word === y) {
			contains = true;
		}
	});
	return contains; 
};

app.post('/arrayContains', function (req, res)
{
	var nums = req.body.nums; 
	var value = req.body.value;

	console.log(nums, value);

	res.json({'result5': arrayContains(nums, value)});
});

//returns true if array contains specified element exists specified times(n) or more
var arrayContainsNTimes = function(nums, y, n)
{
	var contains = false,
		count=0;

	nums.forEach(function(word) {
		if(word === y) {
			count++; 
			if (count >= n) {
				contains = true; 
			}
		}
	});

	return contains; 
};

app.post('/arrayContainsNTimes', function (req, res)
{
	var nums = req.body.nums; 
	var value = req.body.value;
	var counter = req.body.count;

	console.log(nums, value, counter);

	res.json({'result6': arrayContainsNTimes(nums, value, counter)});
});


