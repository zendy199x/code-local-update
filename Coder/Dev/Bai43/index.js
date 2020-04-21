var fs = require('fs');
var co = require('co');

function readFilePromise(path) {
	return new Promise(function(resolve, reject) {

		fs.readFile(path, {encoding: 'utf8'}, function(err, data) {
			if (err) {
				reject(err);
			} else {
				resolve(data);
			}

		});
	});
}

// co(function*() {
// var song1 = yield readFilePromise('./song1.txt');
// var song2 = yield readFilePromise('./song2.txt');
// var song3 = yield readFilePromise('./song3.txt');
	// var values = [
	// 	yield readFilePromise('./song1.txt'),
	// 	yield readFilePromise('./song2.txt'),
	// 	yield readFilePromise('./song3.txt')
	// ];
	// return values;
	// return [song1, song2, song3];
	// console.log(song1, song2, song3);
// }).then(function(values) {
// 	console.log(values);
// }).catch(function(error) {
// 	console.log(error);
// });

var readFiles = co.wrap(function*(files) {
	var values =yield files.map(function(file) {
		return readFilePromise(file);
	});
	return values;
});

readFiles(['song1.txt', 'song2.txt', 'song3.txt'])
.then(function(values) {
	console.log(values);
})