var fs = require('fs');

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

Promise.all([
	readFilePromise('./song1.txt'),
	readFilePromise('./song2.txt'),
	readFilePromise('./song3.txt')
]).then(function(values) {
	console.log(values);
}).catch(function(error) {
	console.log(error);
});