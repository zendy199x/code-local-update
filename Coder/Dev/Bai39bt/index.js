 var request = require('request');

console.time("Time this");

for(var i = 0; i < 10000; i++) {
	request('https://randomuser.me/api/', function (error, response, body) {
  		console.log('error:', error); // Print the error if one occurred
 		console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  		console.log('body:', body); // Print the HTML for the Google homepage.
};

console.timeEnd("Time this");