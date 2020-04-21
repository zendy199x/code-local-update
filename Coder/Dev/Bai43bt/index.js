var fs = require('fs');
var axios = require('axios');
var co = require('co');

function load(path) {
	return axios.get(path);
};

//c1
// co(function*() {
// 	var values = yield [
//   load('https://jsonplaceholder.typicode.com/todos/1'),
//   load('https://jsonplaceholder.typicode.com/todos/2'),
//   load('https://jsonplaceholder.typicode.com/todos/3'),
//   load('https://jsonplaceholder.typicode.com/todos/4'),
//   load('https://jsonplaceholder.typicode.com/todos/5')
// ];
//   return values;
// }).then(function(item) {
// 	for(var i = 0; i < item.length; i++) {
// 		console.log(item[i].data);
// 	}
// }).catch(function(error) {
// 	console.log(error)
// })

c2
var requestURL = co.wrap(funtion(item) {
	var values = yield arr.map(function(item) {
		return load(item);
	})
	return values;
})
  
requestURL(urls)
.then(function(value){
      for(var i =0; i<value.length; i++){
        console.log(value[i].data)
      }
    })
.catch(function(error){
      console.log(error);
    })