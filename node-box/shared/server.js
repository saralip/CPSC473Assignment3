
var express = require("express"),
        http = require("http"), app;
var bodyParser = require('body-parser');
//var urlencodedParser = bodyParser.urlencoded();


// Create our Express-powered HTTP server
// // and have it listen on port 3000
app = express();
http.createServer(app).listen(3000);

//do I need this?
//app.use(bodyParser());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static(__dirname));


var params = {};


//returns average
var average = function(nums)
{
	var total = 0, i;
	for(i=0; i < nums.length; i++)
	{
		total += Number(nums[i]);
	}
	var avg = total/nums.length;

	return avg;
};
app.get("/average/:array", function (req, res)
{
	//res.send("Is this thing on??");
	//var res = array.split(",");
	//console.log(array);
	var array = req.params.array.split(',');
	console.log(array);
	//console.log(req.body);
	var result = average(array);
	console.log(result);
	return res.json({answer: result});

});

//returns the maximum value
var maximum = function(nums)
{
	var max = nums[0], i;
	for(i=1; i < nums.length; i++)
	{
		if(max<Number(nums[i]))
		{
			max = Number(nums[i]);
		}
	}

	return max;
};
app.get("/maximum/:array", function (req, res)
{
	//res.send("Is this thing on??");
	//var res = array.split(",");
	//console.log(array);
	var array = req.params.array.split(',');
	console.log(array);
	//console.log(req.body);
	var result = maximum(array);
	console.log(result);
	return res.json({answer: result});

});
//returns true if array contains at least one even number
var anyEven = function(nums)
{
	var i=0;

	for(i; i < nums.length; i++)
	{
		if(Number(nums[i])%2==0)
		{
			return true;
		}
	}

	return false;
};
app.get("/anyEven/:array", function (req, res)
{
	//res.send("Is this thing on??");
	//var res = array.split(",");
	//console.log(array);
	var array = req.params.array.split(',');
	console.log(array);
	//console.log(req.body);
	var result = anyEven(array);
	console.log(result);
	return res.json({answer: result});

});
//returns true if array contains all even numbers
var allEven = function(nums)
{
	var i=0;

	for(i; i < nums.length; i++)
	{
		if(nums[i]%2!=0)
		{
			return false;
		}
	}

	return true;
};
app.get("/allEven/:array", function (req, res)
{
	//res.send("Is this thing on??");
	//var res = array.split(",");
	//console.log(array);
	var array = req.params.array.split(',');
	console.log(array);
	//console.log(req.body);
	var result = allEven(array);
	console.log(result);
	return res.json({answer: result});

});
//returns true if array contains specified element
var arrayContains = function(nums, element)
{
	var i=0;

	for(i; i < nums.length; i++)
	{
		if(nums[i] == element)
		{
			return true;
		}
	}

	return false;
};
app.get("/arrayContains/:array/:element", function (req, res)
{
	//res.send("Is this thing on??");
	//var res = array.split(",");
	//console.log(array);
	var array = req.params.array.split(',');
	console.log(array);
	//console.log(req.body);
	var element = req.params.element;

	var result = arrayContains(array, element);
	console.log(result);
	return res.json({answer: result});

});
//returns true if array contains specified element exists specified times(n) or more
var arrayContainsNTimes = function(nums, element, n)
{
	var i=0, count=0;

	for(i; i < nums.length; i++)
	{
		if(Number(nums[i]) == Number(element))
		{
			count++;
		}
	}
	if(count >= Number(n))
	{
		return true;
	}

	return false;
};
app.get("/arrayContainsNTimes/:array/:element/:n", function (req, res)
{
	//res.send("Is this thing on??");
	//var res = array.split(",");
	//console.log(array);
	var array = req.params.array.split(',');
	console.log(array);
	//console.log(req.body);
	var element = req.params.element;
	var n = req.params.n;

	var result = arrayContainsNTimes(array, element, n);
	console.log(result);
	return res.json({answer: result});

});


