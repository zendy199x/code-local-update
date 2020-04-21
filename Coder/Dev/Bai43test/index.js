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

co(function*() {
	var song1 = yield readFilePromise('./song1.txt');
	var song2 = yield readFilePromise('./song2.txt');
	var song3 = yield readFilePromise('./song3.txt');
	console.log(song1, song2, song3);
});